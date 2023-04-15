import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import Head from 'next/head';

export function LayoutFullWidth({
  children,
  noHeader,
  metaDescription = 'CastleDAO is a community of builders at Arbitrum. We are building Slayers of Moloch.'
}: {
  children: React.ReactNode;
  noHeader?: boolean;
  metaDescription?: string;
}): React.ReactElement {
  return (
    <React.Fragment>
      {!noHeader && <Header />}
      <Head>
        <title>CastleDAO | Builders at Arbitrum</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/logos/logo_v2_medium.png" />
      </Head>

      <div className="body">
        <div className="main">{children}</div>
      </div>
      <Footer />
      <style jsx>{`
        .body {
          min-height: 100vh;
          padding: 0;
          max-width: 100%;
          margin: 0 auto;
        }
      `}</style>
    </React.Fragment>
  );
}
