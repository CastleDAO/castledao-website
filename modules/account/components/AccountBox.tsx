import React, { useContext } from 'react';
import AddressIcon from '../../web3/components/AddressIcon';
import { Address } from '../../web3/components/Address';

export function AccountBox({
  address,
  text = 'My account',
  height = 50
}: {
  address: string;
  text?: string;
  height?: number;
}): React.ReactElement {
  return (
    <div>
      <div className="wrapper">
        <div className="img-wrapper">
          <AddressIcon address={address} width={height} />
        </div>
        <div className="address">
          {text && <div className="address-top">{text}</div>}
          <div className="address-bottom">
            <Address address={address} showTreasureTag />
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          height: ${height};
        }

        .img-wrapper {
          height: ${height};
          width: ${height};
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          margin-right: 5px;
          overflow: hidden;
        }

        .address {
          font-size: 12px;
          padding-left: 3px;
          padding-right: 3px;
        }

        @media only screen and (max-width: 1300px) {
          .address {
            display: none;
          }
        }

        @media only screen and (max-width: 600px) {
          .wrapper {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  );
}
