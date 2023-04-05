// SPDX-License-Identifier: Apache-2.0

/*
 * Copyright 2020, Offchain Labs, Inc.
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

pragma solidity ^0.6.11;

import "@arbitrum/nitro-contracts/src/bridge/IOutbox.sol";
import "@arbitrum/nitro-contracts/src/bridge/IBridge.sol";

abstract contract AbsInboxMock {
    address l2ToL1SenderMock = address(0);

    event TicketData(uint256 maxSubmissionCost);
    event RefundAddresses(address excessFeeRefundAddress, address callValueRefundAddress);
    event InboxRetryableTicket(address from, address to, uint256 value, uint256 maxGas, bytes data);

    function bridge() external view returns (IBridge) {
        return IBridge(address(this));
    }

    function activeOutbox() external view returns (address) {
        return address(this);
    }

    function setL2ToL1Sender(address sender) external {
        l2ToL1SenderMock = sender;
    }

    function l2ToL1Sender() external view returns (address) {
        return l2ToL1SenderMock;
    }
}

contract InboxMock is AbsInboxMock {
    function createRetryableTicket(
        address to,
        uint256 l2CallValue,
        uint256 maxSubmissionCost,
        address excessFeeRefundAddress,
        address callValueRefundAddress,
        uint256 gasLimit,
        uint256 maxFeePerGas,
        bytes calldata data
    ) external payable returns (uint256) {
        if (msg.value < (maxSubmissionCost + l2CallValue + gasLimit * maxFeePerGas)) {
            revert("WRONG_ETH_VALUE");
        }
        emit TicketData(maxSubmissionCost);
        emit RefundAddresses(excessFeeRefundAddress, callValueRefundAddress);
        emit InboxRetryableTicket(msg.sender, to, l2CallValue, gasLimit, data);
        return 0;
    }
}

contract ERC20InboxMock is AbsInboxMock {
    function createRetryableTicket(
        address to,
        uint256 l2CallValue,
        uint256 maxSubmissionCost,
        address excessFeeRefundAddress,
        address callValueRefundAddress,
        uint256 gasLimit,
        uint256 maxFeePerGas,
        uint256 tokenTotalFeeAmount,
        bytes calldata data
    ) external returns (uint256) {
        // ensure the user's deposit alone will make submission succeed
        if (tokenTotalFeeAmount < (maxSubmissionCost + l2CallValue + gasLimit * maxFeePerGas)) {
            revert("WRONG_TOKEN_VALUE");
        }

        emit TicketData(maxSubmissionCost);
        emit RefundAddresses(excessFeeRefundAddress, callValueRefundAddress);
        emit InboxRetryableTicket(msg.sender, to, l2CallValue, gasLimit, data);
        return 0;
    }
}
