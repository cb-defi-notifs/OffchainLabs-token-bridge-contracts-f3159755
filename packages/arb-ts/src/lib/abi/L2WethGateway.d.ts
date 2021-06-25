/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface L2WethGatewayInterface extends ethers.utils.Interface {
  functions: {
    'STORAGE_GAP()': FunctionFragment
    'calculateL2TokenAddress(address)': FunctionFragment
    'counterpartGateway()': FunctionFragment
    'exitNum()': FunctionFragment
    'finalizeInboundTransfer(address,address,address,uint256,bytes)': FunctionFragment
    'gasReserveIfCallRevert()': FunctionFragment
    'getOutboundCalldata(address,address,address,uint256,bytes)': FunctionFragment
    'inboundEscrowAndCall(address,uint256,address,address,bytes)': FunctionFragment
    'initialize(address,address,address,address)': FunctionFragment
    'l1Weth()': FunctionFragment
    'l2Weth()': FunctionFragment
    'outboundTransfer(address,address,uint256,bytes)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'STORAGE_GAP',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'calculateL2TokenAddress',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'counterpartGateway',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'exitNum', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'finalizeInboundTransfer',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'gasReserveIfCallRevert',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'getOutboundCalldata',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'inboundEscrowAndCall',
    values: [string, BigNumberish, string, string, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, string, string]
  ): string
  encodeFunctionData(functionFragment: 'l1Weth', values?: undefined): string
  encodeFunctionData(functionFragment: 'l2Weth', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'outboundTransfer',
    values: [string, string, BigNumberish, BytesLike]
  ): string

  decodeFunctionResult(functionFragment: 'STORAGE_GAP', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'calculateL2TokenAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'counterpartGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'exitNum', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'finalizeInboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'gasReserveIfCallRevert',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getOutboundCalldata',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'inboundEscrowAndCall',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'l1Weth', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'l2Weth', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'outboundTransfer',
    data: BytesLike
  ): Result

  events: {
    'InboundTransferFinalized(address,address,address,uint256,uint256,bytes)': EventFragment
    'OutboundTransferInitiated(address,address,address,uint256,uint256,bytes)': EventFragment
    'TransferAndCallTriggered(bool,address,address,uint256,bytes)': EventFragment
    'TxToL1(address,address,uint256,bytes)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'InboundTransferFinalized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OutboundTransferInitiated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TransferAndCallTriggered'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TxToL1'): EventFragment
}

export class L2WethGateway extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: L2WethGatewayInterface

  functions: {
    STORAGE_GAP(overrides?: CallOverrides): Promise<[string]>

    'STORAGE_GAP()'(overrides?: CallOverrides): Promise<[string]>

    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    counterpartGateway(overrides?: CallOverrides): Promise<[string]>

    'counterpartGateway()'(overrides?: CallOverrides): Promise<[string]>

    exitNum(overrides?: CallOverrides): Promise<[BigNumber]>

    'exitNum()'(overrides?: CallOverrides): Promise<[BigNumber]>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<[BigNumber]>

    'gasReserveIfCallRevert()'(overrides?: CallOverrides): Promise<[BigNumber]>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { outboundCalldata: string }>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { outboundCalldata: string }>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'inboundEscrowAndCall(address,uint256,address,address,bytes)'(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    initialize(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'initialize(address,address,address,address)'(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    l1Weth(overrides?: CallOverrides): Promise<[string]>

    'l1Weth()'(overrides?: CallOverrides): Promise<[string]>

    l2Weth(overrides?: CallOverrides): Promise<[string]>

    'l2Weth()'(overrides?: CallOverrides): Promise<[string]>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>
  }

  STORAGE_GAP(overrides?: CallOverrides): Promise<string>

  'STORAGE_GAP()'(overrides?: CallOverrides): Promise<string>

  calculateL2TokenAddress(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  'calculateL2TokenAddress(address)'(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  counterpartGateway(overrides?: CallOverrides): Promise<string>

  'counterpartGateway()'(overrides?: CallOverrides): Promise<string>

  exitNum(overrides?: CallOverrides): Promise<BigNumber>

  'exitNum()'(overrides?: CallOverrides): Promise<BigNumber>

  finalizeInboundTransfer(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>

  'gasReserveIfCallRevert()'(overrides?: CallOverrides): Promise<BigNumber>

  getOutboundCalldata(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  'getOutboundCalldata(address,address,address,uint256,bytes)'(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  inboundEscrowAndCall(
    _l2Address: string,
    _amount: BigNumberish,
    _from: string,
    _to: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'inboundEscrowAndCall(address,uint256,address,address,bytes)'(
    _l2Address: string,
    _amount: BigNumberish,
    _from: string,
    _to: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  initialize(
    _l1Counterpart: string,
    _router: string,
    _l1Weth: string,
    _l2Weth: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'initialize(address,address,address,address)'(
    _l1Counterpart: string,
    _router: string,
    _l1Weth: string,
    _l2Weth: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  l1Weth(overrides?: CallOverrides): Promise<string>

  'l1Weth()'(overrides?: CallOverrides): Promise<string>

  l2Weth(overrides?: CallOverrides): Promise<string>

  'l2Weth()'(overrides?: CallOverrides): Promise<string>

  'outboundTransfer(address,address,uint256,bytes)'(
    _l1Token: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
    _l1Token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  callStatic: {
    STORAGE_GAP(overrides?: CallOverrides): Promise<string>

    'STORAGE_GAP()'(overrides?: CallOverrides): Promise<string>

    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    counterpartGateway(overrides?: CallOverrides): Promise<string>

    'counterpartGateway()'(overrides?: CallOverrides): Promise<string>

    exitNum(overrides?: CallOverrides): Promise<BigNumber>

    'exitNum()'(overrides?: CallOverrides): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>

    'gasReserveIfCallRevert()'(overrides?: CallOverrides): Promise<BigNumber>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'inboundEscrowAndCall(address,uint256,address,address,bytes)'(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    initialize(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(address,address,address,address)'(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: CallOverrides
    ): Promise<void>

    l1Weth(overrides?: CallOverrides): Promise<string>

    'l1Weth()'(overrides?: CallOverrides): Promise<string>

    l2Weth(overrides?: CallOverrides): Promise<string>

    'l2Weth()'(overrides?: CallOverrides): Promise<string>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>
  }

  filters: {
    InboundTransferFinalized(
      token: null,
      _from: string | null,
      _to: string | null,
      _transferId: BigNumberish | null,
      _amount: null,
      _data: null
    ): EventFilter

    OutboundTransferInitiated(
      token: null,
      _from: string | null,
      _to: string | null,
      _transferId: BigNumberish | null,
      _amount: null,
      _data: null
    ): EventFilter

    TransferAndCallTriggered(
      success: null,
      _from: string | null,
      _to: string | null,
      _amount: null,
      callHookData: null
    ): EventFilter

    TxToL1(
      _from: string | null,
      _to: string | null,
      _id: BigNumberish | null,
      _data: null
    ): EventFilter
  }

  estimateGas: {
    STORAGE_GAP(overrides?: CallOverrides): Promise<BigNumber>

    'STORAGE_GAP()'(overrides?: CallOverrides): Promise<BigNumber>

    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>

    'counterpartGateway()'(overrides?: CallOverrides): Promise<BigNumber>

    exitNum(overrides?: CallOverrides): Promise<BigNumber>

    'exitNum()'(overrides?: CallOverrides): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>

    'gasReserveIfCallRevert()'(overrides?: CallOverrides): Promise<BigNumber>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'inboundEscrowAndCall(address,uint256,address,address,bytes)'(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    initialize(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'initialize(address,address,address,address)'(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    l1Weth(overrides?: CallOverrides): Promise<BigNumber>

    'l1Weth()'(overrides?: CallOverrides): Promise<BigNumber>

    l2Weth(overrides?: CallOverrides): Promise<BigNumber>

    'l2Weth()'(overrides?: CallOverrides): Promise<BigNumber>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    STORAGE_GAP(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'STORAGE_GAP()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    counterpartGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'counterpartGateway()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    exitNum(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'exitNum()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    gasReserveIfCallRevert(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'gasReserveIfCallRevert()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'inboundEscrowAndCall(address,uint256,address,address,bytes)'(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    initialize(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'initialize(address,address,address,address)'(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    l1Weth(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'l1Weth()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l2Weth(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'l2Weth()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>
  }
}
