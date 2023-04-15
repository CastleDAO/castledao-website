import { providers } from 'ethers';
import { chainId } from 'wagmi';

function getBaseURLProvider(id: number): string {
  switch (id) {
    case chainId.mainnet:
      return 'https://eth-mainnet.alchemyapi.io/v2/';
    case chainId.arbitrumGoerli:
      return 'https://arb-goerli.g.alchemy.com/v2/';
    case chainId.arbitrum:
      return 'https://arb-mainnet.g.alchemy.com/v2/';
    case chainId.polygon:
      return 'https://polygon-mainnet.g.alchemy.com/v2/';
    default:
      return 'https://eth-mainnet.alchemyapi.io/v2/';
  }
}

export function getAlchemyRPC(chainId: number): string {
  const urlBase = getBaseURLProvider(chainId);

  return `${urlBase}${process.env.NEXT_PUBLIC_ALCHEMY_ID}`;
}

export function getServerSideProvider(chainId: number): providers.JsonRpcProvider {
  const alchemyRPC = getAlchemyRPC(chainId);
  return new providers.JsonRpcBatchProvider(alchemyRPC);
}
