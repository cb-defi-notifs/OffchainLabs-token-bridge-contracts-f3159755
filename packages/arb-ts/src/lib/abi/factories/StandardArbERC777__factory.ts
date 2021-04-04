/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { StandardArbERC777 } from '../StandardArbERC777'

export class StandardArbERC777__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<StandardArbERC777> {
    return super.deploy(overrides || {}) as Promise<StandardArbERC777>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): StandardArbERC777 {
    return super.attach(address) as StandardArbERC777
  }
  connect(signer: Signer): StandardArbERC777__factory {
    return super.connect(signer) as StandardArbERC777__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StandardArbERC777 {
    return new Contract(address, _abi, signerOrProvider) as StandardArbERC777
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenHolder',
        type: 'address',
      },
    ],
    name: 'AuthorizedOperator',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'Burned',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'Minted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenHolder',
        type: 'address',
      },
    ],
    name: 'RevokedOperator',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'Sent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'holder',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenHolder',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [
      {
        internalType: 'contract ArbTokenBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'bridgeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultOperators',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'granularity',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridge',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Address',
        type: 'address',
      },
      {
        internalType: 'uint8',
        name: '_decimals',
        type: 'uint8',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenHolder',
        type: 'address',
      },
    ],
    name: 'isOperatorFor',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Address',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'migrate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'operatorBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'operatorSend',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'send',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'holder',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'newName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'newSymbol',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'newDecimals',
        type: 'uint8',
      },
    ],
    name: 'updateInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'destination',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50600a805460ff19166001179055612a5e8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106101795760003560e01c806395d89b41116100d9578063d95b637111610087578063d95b63711461080e578063dd62ed3e1461083c578063e78cea921461086a578063f3fef3a314610872578063fad8b32a1461089e578063fc673c4f146108c4578063fe9d930314610a0257610179565b806395d89b41146104ea5780639bd9bbc6146104f2578063a61a2ff8146105ab578063a9059cbb146106d9578063ad68ebf714610705578063c2eeeebd14610731578063cb6eb3f41461075557610179565b8063556f0dc711610136578063556f0dc7146103015780635b36f1661461030957806362ad1b83146103115780636f791d291461045c57806370a082311461046457806389232a001461048a578063959b8c3f146104c457610179565b806306e485381461017e57806306fdde03146101d6578063095ea7b31461025357806318160ddd1461029357806323b872dd146102ad578063313ce567146102e3575b600080fd5b610186610aad565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101c25781810151838201526020016101aa565b505050509050019250505060405180910390f35b6101de610b10565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610218578181015183820152602001610200565b50505050905090810190601f1680156102455780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61027f6004803603604081101561026957600080fd5b506001600160a01b038135169060200135610b9a565b604080519115158252519081900360200190f35b61029b610bb2565b60408051918252519081900360200190f35b61027f600480360360608110156102c357600080fd5b506001600160a01b03813581169160208101359091169060400135610bb8565b6102eb610d34565b6040805160ff9092168252519081900360200190f35b61029b610d39565b6102eb610d3f565b61045a600480360360a081101561032757600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561036157600080fd5b82018360208201111561037357600080fd5b803590602001918460018302840111600160201b8311171561039457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156103e657600080fd5b8201836020820111156103f857600080fd5b803590602001918460018302840111600160201b8311171561041957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d4f945050505050565b005b61027f610daa565b61029b6004803603602081101561047a57600080fd5b50356001600160a01b0316610db3565b61045a600480360360608110156104a057600080fd5b5080356001600160a01b03908116916020810135909116906040013560ff16610dce565b61045a600480360360208110156104da57600080fd5b50356001600160a01b0316610e92565b6101de610f93565b61045a6004803603606081101561050857600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561053757600080fd5b82018360208201111561054957600080fd5b803590602001918460018302840111600160201b8311171561056a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610ff4945050505050565b61045a600480360360608110156105c157600080fd5b810190602081018135600160201b8111156105db57600080fd5b8201836020820111156105ed57600080fd5b803590602001918460018302840111600160201b8311171561060e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561066057600080fd5b82018360208201111561067257600080fd5b803590602001918460018302840111600160201b8311171561069357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff1691506110179050565b61027f600480360360408110156106ef57600080fd5b506001600160a01b0381351690602001356110ef565b61045a6004803603604081101561071b57600080fd5b506001600160a01b0381351690602001356111c1565b6107396112ad565b604080516001600160a01b039092168252519081900360200190f35b61045a6004803603606081101561076b57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561079a57600080fd5b8201836020820111156107ac57600080fd5b803590602001918460018302840111600160201b831117156107cd57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506112bc945050505050565b61027f6004803603604081101561082457600080fd5b506001600160a01b0381358116916020013516611329565b61029b6004803603604081101561085257600080fd5b506001600160a01b03813581169160200135166113cb565b6107396113f6565b61045a6004803603604081101561088857600080fd5b506001600160a01b03813516906020013561140a565b61045a600480360360208110156108b457600080fd5b50356001600160a01b031661149a565b61045a600480360360808110156108da57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561090957600080fd5b82018360208201111561091b57600080fd5b803590602001918460018302840111600160201b8311171561093c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561098e57600080fd5b8201836020820111156109a057600080fd5b803590602001918460018302840111600160201b831117156109c157600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061159b945050505050565b61045a60048036036040811015610a1857600080fd5b81359190810190604081016020820135600160201b811115610a3957600080fd5b820183602082011115610a4b57600080fd5b803590602001918460018302840111600160201b83111715610a6c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506115f2945050505050565b60606005805480602002602001604051908101604052809291908181526020018280548015610b0557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ae7575b505050505090505b90565b60028054604080516020601f6000196101006001871615020190941685900493840181900481028201810190925282815260609390929091830182828015610b055780601f10610b6e57610100808354040283529160200191610b05565b820191906000526020600020905b815481529060010190602001808311610b7c57509395945050505050565b600033610ba8818585611667565b5060019392505050565b60015490565b60006001600160a01b038316610bff5760405162461bcd60e51b81526004018080602001828103825260248152602001806129246024913960400191505060405180910390fd5b6001600160a01b038416610c445760405162461bcd60e51b81526004018080602001828103825260268152602001806129bd6026913960400191505060405180910390fd5b6000339050610c75818686866040518060200160405280600081525060405180602001604052806000815250611753565b610ca181868686604051806020016040528060008152506040518060200160405280600081525061199b565b610cfb8582610cf686604051806060016040528060298152602001612994602991396001600160a01b03808c166000908152600960209081526040808320938b1683529290522054919063ffffffff611c0416565b611667565b610d298186868660405180602001604052806000815250604051806020016040528060008152506000611c9b565b506001949350505050565b601290565b60045490565b600b54600160a01b900460ff1681565b610d593386611329565b610d945760405162461bcd60e51b815260040180806020018281038252602c815260200180612968602c913960400191505060405180910390fd5b610da385858585856001611f3b565b5050505050565b600a5460ff1690565b6001600160a01b031660009081526020819052604090205490565b600a5461010090046001600160a01b031615610e20576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600a8054610100600160a81b0319166101006001600160a01b038681169190910291909117909155600b80546001600160a01b031916918416919091179055610e70610e6b82612007565b612013565b600b805460ff909216600160a01b0260ff60a01b199092169190911790555050565b336001600160a01b0382161415610eda5760405162461bcd60e51b81526004018080602001828103825260248152602001806128926024913960400191505060405180910390fd5b6001600160a01b03811660009081526006602052604090205460ff1615610f2b573360009081526008602090815260408083206001600160a01b03851684529091529020805460ff19169055610f5a565b3360009081526007602090815260408083206001600160a01b03851684529091529020805460ff191660011790555b60405133906001600160a01b038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b60038054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610b055780601f10610b6e57610100808354040283529160200191610b05565b61101233848484604051806020016040528060008152506001611f3b565b505050565b600a5461010090046001600160a01b03163314611069576040805162461bcd60e51b815260206004820152600b60248201526a4f4e4c595f42524944474560a81b604482015290519081900360640190fd5b825161107c906002906020860190612769565b508151611090906003906020850190612769565b5061109a81612007565b60045414611012576040805162461bcd60e51b815260206004820152601c60248201527f373737206772616e756c61726974792063616e2774206368616e676500000000604482015290519081900360640190fd5b60006001600160a01b0383166111365760405162461bcd60e51b81526004018080602001828103825260248152602001806129246024913960400191505060405180910390fd5b6000339050611167818286866040518060200160405280600081525060405180602001604052806000815250611753565b61119381828686604051806020016040528060008152506040518060200160405280600081525061199b565b610ba88182868660405180602001604052806000815250604051806020016040528060008152506000611c9b565b6111eb338260405180602001604052806000815250604051806020016040528060008152506121ac565b600a54600b546101009091046001600160a01b039081169163429866e69181169085903390611225908790600160a01b900460ff166123d5565b604080516001600160e01b031960e088901b1681526001600160a01b0395861660048201529385166024850152919093166044830152606482019290925260a06084820152600060a48201819052915160e4808301939282900301818387803b15801561129157600080fd5b505af11580156112a5573d6000803e3d6000fd5b505050505050565b600b546001600160a01b031681565b600a5461010090046001600160a01b0316331461130e576040805162461bcd60e51b815260206004820152600b60248201526a4f4e4c595f42524944474560a81b604482015290519081900360640190fd5b6110128383836040518060200160405280600081525061242f565b6000816001600160a01b0316836001600160a01b0316148061139457506001600160a01b03831660009081526006602052604090205460ff16801561139457506001600160a01b0380831660009081526008602090815260408083209387168352929052205460ff16155b806113c457506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff165b9392505050565b6001600160a01b03918216600090815260096020908152604080832093909416825291909152205490565b600a5461010090046001600160a01b031681565b611434338260405180602001604052806000815250604051806020016040528060008152506121ac565b600a54600b5460408051636ce5768960e11b81526001600160a01b03928316600482015285831660248201526044810185905290516101009093049091169163d9caed129160648082019260009290919082900301818387803b15801561129157600080fd5b6001600160a01b0381163314156114e25760405162461bcd60e51b81526004018080602001828103825260218152602001806128b66021913960400191505060405180910390fd5b6001600160a01b03811660009081526006602052604090205460ff1615611536573360009081526008602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611562565b3360009081526007602090815260408083206001600160a01b03851684529091529020805460ff191690555b60405133906001600160a01b038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b6115a53385611329565b6115e05760405162461bcd60e51b815260040180806020018281038252602c815260200180612968602c913960400191505060405180910390fd5b6115ec848484846121ac565b50505050565b6115fa610d39565b828161160257fe5b0615611648576040805162461bcd60e51b815260206004820152601060248201526f22a9219b9b9b9d102120a216a3a920a760811b604482015290519081900360640190fd5b611663338383604051806020016040528060008152506121ac565b5050565b6001600160a01b0383166116ac5760405162461bcd60e51b81526004018080602001828103825260258152602001806128026025913960400191505060405180910390fd5b6001600160a01b0382166116f15760405162461bcd60e51b8152600401808060200182810382526023815260200180612a066023913960400191505060405180910390fd5b6001600160a01b03808416600081815260096020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6040805163555ddc6560e11b81526001600160a01b03871660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b1580156117d757600080fd5b505afa1580156117eb573d6000803e3d6000fd5b505050506040513d602081101561180157600080fd5b505190506001600160a01b0381161561199257806001600160a01b03166375ab97828888888888886040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156118c75781810151838201526020016118af565b50505050905090810190601f1680156118f45780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561192757818101518382015260200161190f565b50505050905090810190601f1680156119545780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b15801561197957600080fd5b505af115801561198d573d6000803e3d6000fd5b505050505b50505050505050565b6119a3610d39565b83816119ab57fe5b06156119f1576040805162461bcd60e51b815260206004820152601060248201526f22a9219b9b9b9d102120a216a3a920a760811b604482015290519081900360640190fd5b6119fd868686866115ec565b611a4083604051806060016040528060278152602001612849602791396001600160a01b038816600090815260208190526040902054919063ffffffff611c0416565b6001600160a01b038087166000908152602081905260408082209390935590861681522054611a75908463ffffffff6126ac16565b600080866001600160a01b03166001600160a01b0316815260200190815260200160002081905550836001600160a01b0316856001600160a01b0316876001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611b26578181015183820152602001611b0e565b50505050905090810190601f168015611b535780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611b86578181015183820152602001611b6e565b50505050905090810190601f168015611bb35780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a4836001600160a01b0316856001600160a01b0316600080516020612948833981519152856040518082815260200191505060405180910390a3505050505050565b60008184841115611c935760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c58578181015183820152602001611c40565b50505050905090810190601f168015611c855780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6040805163555ddc6560e11b81526001600160a01b03871660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b158015611d1f57600080fd5b505afa158015611d33573d6000803e3d6000fd5b505050506040513d6020811015611d4957600080fd5b505190506001600160a01b03811615611edd57806001600160a01b03166223de298989898989896040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611e0e578181015183820152602001611df6565b50505050905090810190601f168015611e3b5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611e6e578181015183820152602001611e56565b50505050905090810190601f168015611e9b5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015611ec057600080fd5b505af1158015611ed4573d6000803e3d6000fd5b50505050611f31565b8115611f3157611ef5866001600160a01b0316612706565b15611f315760405162461bcd60e51b815260040180806020018281038252604d8152602001806128d7604d913960600191505060405180910390fd5b5050505050505050565b6001600160a01b038616611f805760405162461bcd60e51b81526004018080602001828103825260228152602001806128276022913960400191505060405180910390fd5b6001600160a01b038516611fdb576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b33611fea818888888888611753565b611ff881888888888861199b565b61199281888888888888611c9b565b60120360ff16600a0a90565b33600090815260066020526040808220805460ff1916600117905580516a22a9219b9b9baa37b5b2b760a91b8152815190819003600b0181206329965a1d60e01b82523060048301819052602483019190915260448201529051731820a4b7618bde71dce8cdc73aab6c95905fad24926329965a1d926064808201939182900301818387803b1580156120a557600080fd5b505af11580156120b9573d6000803e3d6000fd5b5050604080516922a92199182a37b5b2b760b11b8152815190819003600a0181206329965a1d60e01b82523060048301819052602483019190915260448201529051731820a4b7618bde71dce8cdc73aab6c95905fad2493506329965a1d9250606480830192600092919082900301818387803b15801561213957600080fd5b505af115801561214d573d6000803e3d6000fd5b5050505060018110156121a7576040805162461bcd60e51b815260206004820181905260248201527f4772616e756c6172697479206d7573742062652031206f722067726561746572604482015290519081900360640190fd5b600455565b6001600160a01b0384166121f15760405162461bcd60e51b81526004018080602001828103825260228152602001806128706022913960400191505060405180910390fd5b3361220181866000878787611753565b61220e81866000876115ec565b612251846040518060600160405280602381526020016129e3602391396001600160a01b038816600090815260208190526040902054919063ffffffff611c0416565b6001600160a01b03861660009081526020819052604090205560015461227d908563ffffffff61270c16565b600181905550846001600160a01b0316816001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156123025781810151838201526020016122ea565b50505050905090810190601f16801561232f5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561236257818101518382015260200161234a565b50505050905090810190601f16801561238f5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516000916001600160a01b038816916000805160206129488339815191529181900360200190a35050505050565b600060128260ff161115612416576040805162461bcd60e51b815260206004820152600360248201526244454360e81b604482015290519081900360640190fd5b61241f82612007565b838161242757fe5b049392505050565b6001600160a01b03841661248a576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b612492610d39565b838161249a57fe5b06156124e0576040805162461bcd60e51b815260206004820152601060248201526f22a9219b9b9b9d102120a216a3a920a760811b604482015290519081900360640190fd5b336124ee81600087876115ec565b600154612501908563ffffffff6126ac16565b6001556001600160a01b03851660009081526020819052604090205461252d908563ffffffff6126ac16565b6001600160a01b03861660009081526020819052604081209190915561255a908290878787876001611c9b565b846001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156125d95781810151838201526020016125c1565b50505050905090810190601f1680156126065780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015612639578181015183820152602001612621565b50505050905090810190601f1680156126665780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516001600160a01b038716916000916000805160206129488339815191529181900360200190a35050505050565b6000828201838110156113c4576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3b151590565b600082821115612763576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106127aa57805160ff19168380011785556127d7565b828001600101855582156127d7579182015b828111156127d75782518255916020019190600101906127bc565b506127e39291506127e7565b5090565b610b0d91905b808211156127e357600081556001016127ed56fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f2061646472657373ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a2646970667358221220e69dfbec46d9ba3662c64624741492b2f8f5b2a64a20d2bbd62edddf319b0d2d64736f6c634300060b0033'
