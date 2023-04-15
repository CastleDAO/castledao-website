type Explorer = {
  name: string;
  url: string;
  standard: string;
};

export type Chain = {
  name: string;
  chainId: number;
  shortName: string;
  networkId: number;
  rpc: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  faucets?: any;
  chain?: string;
  network?: string;
  explorers?: Explorer[];
  infoURL: string;
};
