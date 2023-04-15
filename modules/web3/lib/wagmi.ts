import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { arbitrumNovaNetwork } from '../data/networks';

const nova = {
  id: arbitrumNovaNetwork.chainId,
  name: arbitrumNovaNetwork.name,
  rpcUrls: { default: arbitrumNovaNetwork.rpc[0] },
  network: arbitrumNovaNetwork.network
};
export const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.arbitrumGoerli],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'CastleDAO',
  chains
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});
