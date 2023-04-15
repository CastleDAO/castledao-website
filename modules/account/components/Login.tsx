import { useEffect, useMemo, useState } from 'react';

import { AccountBox } from './AccountBox';
import { useAccount, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Tooltip } from 'react-tooltip';

export function Login() {
  const [show, setShow] = useState(false);
  // Prevent server-side problem with different UI
  useEffect(() => {
    setShow(true);
  }, []);

  const { address, isConnected, status } = useAccount();

  if (!show) {
    return null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Tooltip anchorId={'user-menu'} style={{ zIndex: 2000 }}>
        <div style={{ maxWidth: '300px' }}>
          <p>Menu</p>
        </div>
      </Tooltip>
      {address && (
        <div className="gold">
          <div id="user-menu" style={{ cursor: 'pointer' }}>
            <AccountBox text="" address={address} height={50} />
          </div>
        </div>
      )}
      {!isConnected && <ConnectButton />}
      {/* {status  && <p className="error">Invalid network</p>} */}
      <style jsx>{`
        .error {
          font-size: 10px;
          padding: 0;
          margin: 0;
        }

        .gold {
          color: var(--gold-color);
        }

        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
