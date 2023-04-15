import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CurrentNetwork from '../../web3/components/CurrentNetwork';
import { Login } from '../../account/components/Login';
import { Button } from './Button';

export function Header() {
  const [show, setShow] = useState(false);

  // Prevent server-side problem with different UI
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div>
      <div className="header-wrapper">
        <div className="header">
          <div className="left">
            <Link href="/" title="CastleDAO home page" style={{ textDecoration: 'none' }}>
              <div className="logo-wrapper">
                <div style={{ marginLeft: '5px' }} className="logo">
                  <Image src="/new-logo.png" alt="logo" width={255} height={45} />
                </div>
              </div>
            </Link>
          </div>
          <div className="right">
            <div className="links">
              <div className="link play">
                <a href="https://slayersofmoloch.com/" target="_blank" rel="noopener noreferrer">
                  <Button primary>Play Slayers of Moloch</Button>
                </a>
              </div>

              <div className="link wiki">
                <a href="https://castledao.gitbook.io/castles/">Wiki</a>
              </div>

              <div className="link discord" style={{ height: '20px' }}>
                <a
                  title="Join discord"
                  href="https://discord.gg/nyKYmvnXca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/Discord-Logo-White.png" alt="Discord" style={{ width: '20px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header-wrapper {
          }

          .header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            flex-wrap: wrap;
            background: var(--black-background);
            padding: 15px;
          }

          .links {
            display: flex;
            justify-content: space-between;
            max-width: 800px;
            margin: 0 auto;
            font-size: 12px;
            padding-left: 15px;
            padding-right: 15px;
            flex-wrap: wrap;
            align-items: center;
          }

          .link {
            margin-left: 15px;
            margin-right: 15px;
            font-size: 12px;
          }

          a {
            color: white;
          }

          .logo-wrapper {
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            color: white;
          }

          .logo-wrapper a {
            color: var(--text-main);
            text-decoration: none;
            display: flex;
            align-items: center;
          }

          .login-box {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .network {
            margin-right: 15px;
          }

          @media only screen and (max-width: 1300px) {
            .discord {
              display: none;
            }

            .points {
              display: none;
            }
          }

          @media only screen and (max-width: 600px) {
            .help,
            .wiki {
              display: none;
            }
            .link {
              font-size: 10px;
            }

            .links {
              padding-left: 0;
              padding-right: 0;
            }
            .network {
              display: none;
            }
          }

          .right {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
