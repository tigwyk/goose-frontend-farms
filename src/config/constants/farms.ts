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
      80001: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
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
    pid: 3,
    risk: 3,
    lpSymbol: 'WMATIC-USDC LP',
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      80001: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      80001: '0x38934dEfD7f171FAe33E1bb0EE06C45Fef69bE22',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
]

export default farms
