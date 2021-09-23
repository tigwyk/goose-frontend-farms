import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PULL-USDC LP',
    lpAddresses: {
      137: '0x72dEf214b363D646F0abA67717A9a8412212f916',
      80001: '0x4d2438dac888ff432563b28D7c9634D6406c62B2',
    },
    tokenSymbol: 'PULL',
    tokenAddresses: {
      137: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
      80001: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'PULL-wBAN LP',
    lpAddresses: {
      137: '0x6B98a63Aad9a4234b5Fa68a9979Ef511816F470D',
      80001: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'PULL',
    tokenAddresses: {
      137: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
      80001: '0xB44cf912E9D0341e92f64f4a0642393B7f3526C4',
    },
    quoteTokenSymbol: QuoteToken.wBAN,
    quoteTokenAdresses: contracts.wban,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'MATIC-USDC LP',
    lpAddresses: {
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
      80001: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      137: '0x0000000000000000000000000000000000001010',
      80001: '0x0000000000000000000000000000000000001010',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
]

export default farms
