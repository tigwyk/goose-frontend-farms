import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PULL-BUSD LP',
    lpAddresses: {
      137: '',
      80001:'0xDAbd64fcBA5c3eDF30B7939CC41bdD804E5668f8',
    },
    tokenSymbol: 'PULL',
    tokenAddresses: {
      137: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
      80001:'0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
]

export default farms
