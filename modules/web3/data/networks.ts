import { Chain } from '../chain';

export const ethereumNetwork: Chain = {
  name: 'Ethereum Mainnet',
  chainId: 1,
  shortName: 'eth',
  networkId: 1,
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpc: [
    'https://mainnet.infura.io/v3/${INFURA_API_KEY}',
    'wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}',
    'https://api.mycryptoapi.com/eth',
    'https://cloudflare-eth.com'
  ],
  faucets: [],
  infoURL: 'https://ethereum.org'
};

export const polygonNetwork: Chain = {
  name: 'Matic(Polygon) Mainnet',
  chainId: 137,
  shortName: 'matic',
  networkId: 137,
  nativeCurrency: { name: 'Matic', symbol: 'MATIC', decimals: 18 },
  rpc: [
    'https://rpc-mainnet.matic.network',
    'wss://ws-mainnet.matic.network',
    'https://rpc-mainnet.matic.quiknode.pro',
    'https://matic-mainnet.chainstacklabs.com'
  ],
  faucets: [],
  infoURL: 'https://matic.network/'
};

export const arbitrumNetwork: Chain = {
  name: 'Arbitrum One',
  chainId: 42161,
  shortName: 'arb1',
  chain: 'ETH',
  network: 'mainnet',
  networkId: 42161,
  nativeCurrency: { name: 'Ether', symbol: 'AETH', decimals: 18 },
  rpc: ['https://arb1.arbitrum.io/rpc', 'wss://arb1.arbitrum.io/ws'],
  explorers: [
    { name: 'Arbiscan', url: 'https://arbiscan.io', standard: 'EIP3091' },
    {
      name: 'Arbitrum Explorer',
      url: 'https://explorer.arbitrum.io',
      standard: 'EIP3091'
    }
  ],
  infoURL: 'https://arbitrum.io'
};

export const arbitrumGoerliNetwork: Chain = {
  name: 'Arbitrum Testnet Goerli',
  chainId: 421613,
  shortName: 'arbgoerli',
  chain: 'ETH',
  network: 'goerli',
  networkId: 421613,
  nativeCurrency: { name: 'Goerli Ether', symbol: 'GOETH', decimals: 18 },
  rpc: ['https://goerli.arbitrum.io/rpc', 'wss://goerli.arbitrum.io/ws'],
  explorers: [],
  infoURL: 'https://arbitrum.io'
};

export const ropstenNetwork: Chain = {
  name: 'Ethereum Testnet Ropsten',
  chainId: 3,
  shortName: 'rop',
  networkId: 3,
  nativeCurrency: { name: 'Ropsten Ether', symbol: 'ROP', decimals: 18 },
  rpc: ['https://ropsten.infura.io/v3/${INFURA_API_KEY}', 'wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}'],
  faucets: [],
  infoURL: 'https://github.com/ethereum/ropsten'
};

export const optimismNetwork: Chain = {
  name: 'Optimism',
  chainId: 10,
  shortName: 'opt',
  networkId: 10,
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  rpc: ['https://mainnet.optimism.io'],
  faucets: [],
  infoURL: 'https://optimistic.etherscan.io'
};

export const arbitrumNovaNetwork: Chain = {
  name: 'Arbitrum Nova',
  chainId: 42170,
  shortName: 'arb2',
  networkId: 42170,
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  rpc: ['https://nova.arbitrum.io/rpc	'],
  faucets: [],
  infoURL: 'https://nova-explorer.arbitrum.io'
};
