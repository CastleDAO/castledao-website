import {
  arbitrumNetwork,
  arbitrumNovaNetwork,
  ethereumNetwork,
  optimismNetwork,
  polygonNetwork,
  ropstenNetwork
} from './data/networks';

export const supportedChainIds = [
  arbitrumNetwork.chainId,
  ropstenNetwork.chainId,
  arbitrumNovaNetwork.chainId,
  ethereumNetwork.chainId,
  polygonNetwork.chainId,
  optimismNetwork.chainId,
  421611
];

export enum Networks {
  any = 'any',
  arbitrum = 'arbitrum',
  ethereum = 'ethereum',
  polygon = 'polygon',
  optimism = 'optimism',
  nova = 'nova'
}

export const NETWORKS = {
  [Networks.ethereum]: ethereumNetwork,
  [Networks.arbitrum]: arbitrumNetwork,
  [Networks.polygon]: polygonNetwork,
  [Networks.optimism]: optimismNetwork,
  [Networks.nova]: arbitrumNovaNetwork
};
