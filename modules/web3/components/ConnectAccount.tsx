import { ConnectButton } from '@rainbow-me/rainbowkit';

export function ConnectAccount({ text = 'Connect your wallet to continue' }) {
  return (
    <div>
      <div className="wrapper">
        <div className="connect">
          <h2>CastleDAO</h2>
          <p>{text}</p>
          <div className="login-wrapper">
            <ConnectButton />
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          margin: 30px;
        }
        .connect {
          background: radial-gradient(circle, var(--mythic) 0%, #a14c06 100%);

          background-size: 100% 100%;
          background-repeat: no-repeat;
          padding: 120px;
          padding-top: 60px;
          padding-bottom: 60px;
          max-width: 650px;

          margin: 0 auto;
        }

        .connect {
          text-align: center;
        }

        h2 {
          font-size: 40px;
          text-shadow: 0 0 10px black;
        }

        p {
          margin-bottom: 20px;
        }

        .login-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
