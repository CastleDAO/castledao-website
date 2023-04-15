import Image from 'next/image';
import React from 'react';
import {
  arbitrumNetwork,
  optimismNetwork,
  ethereumNetwork,
  arbitrumNovaNetwork,
  polygonNetwork,
  arbitrumGoerliNetwork
} from '../data/networks';

export default function NetworkIcon({
  chainId,
  width
}: {
  chainId: number;
  width: number;
}): React.ReactElement {
  return (
    <React.Fragment>
      {!chainId && <div className="not-connected">N/A</div>}
      {chainId === optimismNetwork.chainId && (
        <Image
          title="Optimism"
          src={'/networks/optimism.svg'}
          alt="Optimism"
          width={width}
          height={width}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      )}
      {chainId === arbitrumGoerliNetwork.chainId && <span>Testnet</span>}
      {chainId === ethereumNetwork.chainId && (
        <Image
          title="Ethereum"
          src={'/networks/ethereum-eth.svg'}
          alt="Ethereum"
          width={width}
          height={width}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      )}
      {chainId === arbitrumNovaNetwork.chainId && (
        <Image
          title="Nova"
          src={'/networks/nova.svg'}
          alt="Nova"
          width={width}
          height={width}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      )}
      {chainId === polygonNetwork.chainId && (
        <Image
          title="Polygon"
          src={'/networks/polygon.svg'}
          alt="Polygon"
          width={width}
          height={width}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      )}
      {chainId === arbitrumNetwork.chainId && (
        <Image
          title="Arbitrum"
          src={'/networks/arbitrum.svg'}
          alt="Arbitrum"
          width={width}
          height={width}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      )}
    </React.Fragment>
  );
}
