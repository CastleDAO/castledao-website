import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNprogress from 'nextjs-progressbar';
import { ModalProvider } from '../modules/app/context/ModalContext';
import { TransactionsProvider } from '../modules/web3/context/TransactionsContext';
import TransactionList from '../modules/web3/components/TransactionList';
import { ErrorBoundary } from '../modules/app/components/ErrorBoundary';
import 'react-tooltip/dist/react-tooltip.css';
import { WagmiConfig } from 'wagmi';
import { chains, wagmiClient } from '../modules/web3/lib/wagmi';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Analytics />
      <NextNprogress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <TransactionsProvider>
        <ModalProvider>
          <ErrorBoundary componentName="Application">
            <Component {...pageProps} />
          </ErrorBoundary>
          <ErrorBoundary componentName="Transactions list">
            <TransactionList />
          </ErrorBoundary>
        </ModalProvider>
      </TransactionsProvider>
      <ToastContainer position="top-center" theme="dark" />
      <style jsx global>{`
        :root {
          --gap: 16pt;
          --black-background: #1a1b1f;
          --page-background-color: #1a1b1f;
          --light-background-color: #3a3740;
          --alt-background-color: grey;
          --text-main-color: white;
          --gold-color: #d6bb7b;
          --text-secondary-color: grey;
          --alt-text-main-color: green;
          --alt-text-secondary-color: grey;
          --mythic: #ff7a0e;
          --rare: #a8a9ad;
          --divine: #9d4edd;
          --blue: #4141be;
          --orange: #ff6000;
          --red: #b53c3c;
          --green: #388938;
          --orange-light: #ffa559;
          --beige: #ffe6c7;

          --z-index-modal: 1000;
          --z-index-header: 100;
          --accents-1: #f9fafc;
          --accents-2: #eaeaea;
          --accents-3: #999;
          --accents-4: #888;
          --accents-5: #666;
          --accents-6: #444;
          --accents-7: #333;
          --accents-8: #111;
        }

        * {
          scroll-behavior: smooth;
        }

        @font-face {
          font-family: 'Atari';
          src: url('/fonts/AtariClassic-gry3.ttf');
        }

        body {
          font-family: 'Atari';
          padding: 0;
          margin: 0;
          margin: 0;
          padding: 0;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.8;
          color: var(--text-main-color);
          background: var(--page-background-color);
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #252525;
          border-radius: 24px;
        }
        ::-webkit-scrollbar-thumb {
          background: gold;
          border-radius: 24px;
        }

        @media only screen and (max-width: 600px) {
          body {
            font-size: 13px;
          }
        }
        a {
          color: white;
        }
        h1 {
          font-weight: 700;
        }

        p {
          margin-bottom: 10px;
        }

        * {
          box-sizing: border-box;
        }

        input {
          padding: 15px;
          border: none;
          font-size: 20px;
          background: white;
          border: none;
          box-shadow: 1px 1px 1px 3px black;
          font-family: 'Atari';
        }

        select {
          padding: 15px;
          border: none;
          box-shadow: 1px 1px 1px 3px black;
          font-family: 'Atari';
        }

        img {
          max-width: 100%;
        }

        .nfta-emblem {
          align-items: center;
          background: #fff;
          border-radius: 24px 0 0 24px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
          display: flex;
          padding: 3px;
          top: 50%;
          right: 0;
          position: fixed;
          text-decoration: none;
          will-change: transform;
          z-index: 3;
        }
        .nfta-emblem .nfta-logo {
          background: #000;
          border-radius: 50%;
          display: block;
          padding: 4px;
          height: 32px;
          width: 32px;
        }
        .nfta-emblem .nfta-logo path {
          fill: #fff;
        }
        .nfta-emblem strong {
          color: #000;
          display: block;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          overflow: hidden;
          padding-left: 0;
          max-width: 0;
          transition: max-width 0.35s ease-out, padding-left 0.35s ease-out, padding-right 0.35s ease-out;
          white-space: nowrap;
        }
        .nfta-emblem:hover strong {
          padding-left: 8px;
          padding-right: 4px;
          max-width: 210px;
        }

        .Toastify__toast-container {
          font-size: 20px;
        }

        .groovy {
          box-shadow: inset 0 0 16px 4px darken(#4e4a4e, 10%);
          border: 10px groove #d6bb7b;
          background-color: #4e4a4e;
        }
      `}</style>
    </div>
  );
}
export default function AppWrapper(props) {
  return (
    <div>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <App {...props} />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}
