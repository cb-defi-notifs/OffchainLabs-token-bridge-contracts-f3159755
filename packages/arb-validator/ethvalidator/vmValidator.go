/*
 * Copyright 2019, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package ethvalidator

import (
	"context"
	"errors"
	"log"
	"math/big"
	"sync"
	"time"

	"github.com/offchainlabs/arbitrum/packages/arb-validator/challenges"

	"github.com/offchainlabs/arbitrum/packages/arb-validator/valprotocol"

	errors2 "github.com/pkg/errors"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/core/types"

	"github.com/offchainlabs/arbitrum/packages/arb-util/machine"
	"github.com/offchainlabs/arbitrum/packages/arb-util/protocol"
	"github.com/offchainlabs/arbitrum/packages/arb-util/value"
	"github.com/offchainlabs/arbitrum/packages/arb-validator/arbbridge"
	"github.com/offchainlabs/arbitrum/packages/arb-validator/bridge"
	"github.com/offchainlabs/arbitrum/packages/arb-validator/hashing"
	"github.com/offchainlabs/arbitrum/packages/arb-validator/validator"
	"github.com/offchainlabs/arbitrum/packages/arb-validator/valmessage"
)

type VMValidator struct {
	// Safe public interface
	VMID              common.Address
	CompletedCallChan chan valmessage.FinalizedAssertion

	challengeEverything bool
	Mutex               *sync.Mutex
	// private thread only
	Validator      *Validator
	arbitrumVM     arbbridge.VMConnection
	MessageMonChan chan bridge.BridgeMessage
	ErrorMonChan   chan bridge.Error
}

func (val *VMValidator) Address() common.Address {
	return val.Validator.Address()
}

func (val *VMValidator) SendMonitorMsg(msg bridge.BridgeMessage) {
	val.MessageMonChan <- msg
}

func (val *VMValidator) SendMonitorErr(msg bridge.Error) {
	val.ErrorMonChan <- msg
}

func NewVMValidator(
	val *Validator,
	vmID common.Address,
	machine machine.Machine,
	config *valmessage.VMConfiguration,
	challengeEverything bool,
	con arbbridge.VMConnection,
) (*VMValidator, error) {
	callOpts := &bind.CallOpts{
		Pending: false,
		From:    val.Address(),
		Context: context.Background(),
	}

	err := con.VerifyVM(
		callOpts,
		config,
		machine.Hash(),
	)
	if err != nil {
		return nil, errors2.Wrap(err, "Validator failed to verify vm")
	}

	completedCallChan := make(chan valmessage.FinalizedAssertion, 1024)
	msgmon := make(chan bridge.BridgeMessage, 100)
	errmon := make(chan bridge.Error, 100)
	vmVal := &VMValidator{
		vmID,
		completedCallChan,
		challengeEverything,
		&sync.Mutex{},
		val,
		con,
		msgmon,
		errmon,
	}
	return vmVal, nil
}

func (val *VMValidator) ensureVMActivated() error {
	err := val.waitForActivation(context.Background())
	if err != nil {
		return errors2.Wrap(err, "Error checking for VM activation")
	}
	log.Println("Validator is validating vm", hexutil.Encode(val.VMID[:]))
	return nil
}

func (val *VMValidator) waitForActivation(
	ctx context.Context,
) error {
	auth := &bind.CallOpts{
		Pending: false,
		From:    val.Address(),
		Context: ctx,
	}

	for {
		select {
		case _ = <-time.After(time.Second):
			enabled, err := val.arbitrumVM.IsEnabled(auth)
			if err != nil {
				return err
			}
			if enabled {
				return nil
			}
		case _ = <-ctx.Done():
			return errors.New("VM never enabled")
		}
	}
}

func (val *VMValidator) Sign(msgHash [32]byte) ([]byte, error) {
	return val.Validator.Sign(msgHash[:])
}

func (val *VMValidator) StartListening(ctx context.Context) (chan arbbridge.Notification, error) {
	if err := val.ensureVMActivated(); err != nil {
		return nil, err
	}
	parsedChan := make(chan arbbridge.Notification, 1024)

	if err := val.arbitrumVM.StartConnection(ctx); err != nil {
		return nil, err
	}

	outChan, errChan := val.arbitrumVM.GetChans()
	go func() {
		for {
			hitError := false
			select {
			case <-ctx.Done():
				break
			case parse, ok := <-outChan:
				if !ok {
					hitError = true
					break
				}
				parsedChan <- parse
			case <-errChan:
				// log.Printf("Validator recieved error: %v\n", err)
				// fmt.Println("Resetting channels")
				hitError = true

			}

			if hitError {
				// Ignore error and try to reset connection
				for {
					if err := val.arbitrumVM.StartConnection(ctx); err == nil {
						break
					}
					log.Println("Error: Validator can't connect to blockchain")
					time.Sleep(5 * time.Second)
				}
			}
		}
	}()

	return parsedChan, nil
}

func (val *VMValidator) FinalizedAssertion(
	assertion *protocol.ExecutionAssertion,
	onChainTxHash []byte,
	signatures [][]byte,
	proposalResults *valmessage.UnanimousUpdateResults,
) {
	val.Mutex.Lock()
	finalizedAssertion := valmessage.FinalizedAssertion{
		Assertion:       assertion,
		OnChainTxHash:   onChainTxHash,
		Signatures:      signatures,
		ProposalResults: proposalResults,
	}
	val.CompletedCallChan <- finalizedAssertion
	val.Mutex.Unlock()
}

func (val *VMValidator) IsPendingUnanimous(
	ctx context.Context,
) (bool, error) {
	val.Mutex.Lock()
	isPending, err := val.arbitrumVM.IsPendingUnanimous(
		&bind.CallOpts{
			Pending: false,
			From:    val.Address(),
			Context: ctx,
		},
	)
	val.Mutex.Unlock()
	return isPending, err
}

func (val *VMValidator) IsInChallenge(
	ctx context.Context,
) (bool, error) {
	val.Mutex.Lock()
	isPending, err := val.arbitrumVM.IsInChallenge(
		&bind.CallOpts{
			Pending: false,
			From:    val.Address(),
			Context: ctx,
		},
	)
	val.Mutex.Unlock()
	return isPending, err
}

func (val *VMValidator) PendingDisputableAssert(
	ctx context.Context,
	precondition *valprotocol.Precondition,
	assertion *protocol.ExecutionAssertion,
) (*types.Receipt, error) {
	val.Mutex.Lock()
	receipt, err := val.arbitrumVM.PendingDisputableAssert(
		val.Validator.MakeAuth(ctx),
		precondition,
		assertion,
	)
	val.Mutex.Unlock()
	return receipt, err
}

func (val *VMValidator) ConfirmDisputableAsserted(
	ctx context.Context,
	precondition *valprotocol.Precondition,
	assertion *protocol.ExecutionAssertion,
) (*types.Receipt, error) {
	val.Mutex.Lock()
	receipt, err := val.arbitrumVM.ConfirmDisputableAsserted(
		val.Validator.MakeAuth(ctx),
		precondition,
		assertion,
	)
	val.Mutex.Unlock()
	return receipt, err
}

func (val *VMValidator) InitiateChallenge(
	ctx context.Context,
	precondition *valprotocol.Precondition,
	assertion *valprotocol.ExecutionAssertionStub,
) (*types.Receipt, error) {
	val.Mutex.Lock()
	receipt, err := val.arbitrumVM.InitiateChallenge(
		val.Validator.MakeAuth(ctx),
		precondition,
		assertion,
	)
	val.Mutex.Unlock()
	return receipt, err
}

func (val *VMValidator) SendMessage(ctx context.Context, data value.Value, tokenType [21]byte, currency *big.Int) error {
	val.Mutex.Unlock()
	err := val.Validator.SendMessage(val.Validator.MakeAuth(ctx), protocol.NewSimpleMessage(data, tokenType, currency, val.VMID))
	val.Mutex.Unlock()
	return err
}

func (val *VMValidator) ForwardMessage(ctx context.Context, data value.Value, tokenType [21]byte, currency *big.Int, sig []byte) error {
	val.Mutex.Lock()
	err := val.Validator.ForwardMessage(val.Validator.MakeAuth(ctx), protocol.NewSimpleMessage(data, tokenType, currency, val.VMID), sig)
	val.Mutex.Unlock()
	return err
}

func (val *VMValidator) SendEthMessage(
	ctx context.Context,
	data value.Value,
	amount *big.Int,
) (uint64, error) {
	val.Mutex.Lock()
	receipt, err := val.Validator.SendEthMessage(val.Validator.MakeAuth(ctx), data, val.VMID, amount)
	val.Mutex.Unlock()
	return receipt, err
}

func (val *VMValidator) UnanimousAssertHash(
	sequenceNum uint64,
	beforeHash [32]byte,
	newInboxHash [32]byte,
	originalInboxHash [32]byte,
	assertion *protocol.ExecutionAssertion,
) ([32]byte, error) {
	return hashing.UnanimousAssertHash(
		val.VMID,
		sequenceNum,
		beforeHash,
		newInboxHash,
		originalInboxHash,
		assertion,
	)
}

func (val *VMValidator) Challenge(
	ctx context.Context,
	address common.Address,
	precondition *valprotocol.Precondition,
	machine machine.Machine,
) error {
	challenge, err := NewChallengeValidator(val.Validator, address)

	header, err := val.Validator.LatestHeader(context.Background())
	if err != nil {
		return errors2.Wrap(err, "Validator couldn't get latest error")
	}
	challengeEvents, err := challenge.StartListening(ctx)
	if err != nil {
		return err
	}
	challengeVal := validator.NewChallengerValidator(challenge, header, precondition, machine, val.challengeEverything)
	go challengeVal.Run(ctx, challengeEvents)
	go func() {
		for err := range challenge.ErrorMonChan {
			val.ErrorMonChan <- err
		}
	}()
	go func() {
		for msg := range challenge.MessageMonChan {
			val.MessageMonChan <- msg
		}
	}()
	return err
}

func (val *VMValidator) DefendChallenge(
	ctx context.Context,
	address common.Address,
	assDef challenges.AssertionDefender,
) error {
	challenge, err := NewChallengeValidator(val.Validator, address)

	header, err := val.Validator.LatestHeader(context.Background())
	if err != nil {
		return errors2.Wrap(err, "Validator couldn't get latest error")
	}
	challengeEvents, err := challenge.StartListening(ctx)
	if err != nil {
		return err
	}
	challengeVal := validator.NewDefenderValidator(challenge, header, assDef)
	go challengeVal.Run(ctx, challengeEvents)
	go func() {
		for err := range challenge.ErrorMonChan {
			val.ErrorMonChan <- err
		}
	}()
	go func() {
		for msg := range challenge.MessageMonChan {
			val.MessageMonChan <- msg
		}
	}()
	return err
}

func (val *VMValidator) ObserveChallenge(
	ctx context.Context,
	address common.Address,
) error {
	challenge, err := NewChallengeValidator(val.Validator, address)

	header, err := val.Validator.LatestHeader(context.Background())
	if err != nil {
		return errors2.Wrap(err, "Validator couldn't get latest error")
	}
	challengeEvents, err := challenge.StartListening(ctx)
	if err != nil {
		return err
	}
	challengeVal := validator.NewObserverValidator(challenge, header)
	go challengeVal.Run(ctx, challengeEvents)
	go func() {
		for err := range challenge.ErrorMonChan {
			val.ErrorMonChan <- err
		}
	}()
	go func() {
		for msg := range challenge.MessageMonChan {
			val.MessageMonChan <- msg
		}
	}()
	return err
}
