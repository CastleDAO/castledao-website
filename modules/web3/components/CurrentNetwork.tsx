import { useChainModal } from '@rainbow-me/rainbowkit';
import { useNetwork } from 'wagmi';

import NetworkIcon from './NetworkIcon';
import { Tooltip } from 'react-tooltip';

export default function CurrentNetwork() {
  const { chain } = useNetwork();
  const { openChainModal } = useChainModal();

  return (
    <div>
      <Tooltip anchorId={'network-selector'} style={{ zIndex: 2000 }}>
        <div style={{ maxWidth: '300px' }}>
          <p>Switch network.</p>
        </div>
      </Tooltip>
      <div className="wrapper" id="network-selector" onClick={openChainModal}>
        <NetworkIcon chainId={chain ? chain.id : 0} width={30} />
      </div>
      <style jsx>{`
        .wrapper {
          padding: 5px 5px;
          background: var(--black-background);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          flex-direction: column;
          transition: all 300ms linear;
          cursor: pointer;
        }

        .wrapper:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
