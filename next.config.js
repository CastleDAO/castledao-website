// https://github.com/vercel/next.js/issues/8251#issuecomment-854148718
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  // experimental: { appDir: true },
  webpack: function (config, { dev, isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    // copy files you're interested in
    // if (!dev) {
    //     config.plugins.push(
    //         new CopyPlugin({
    //             patterns: [{ from: "base-images", to: "base-images" }],
    //         })
    //     )
    // }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**'
      }
    ],

    domains: [
      'ipfs.io',
      'castledao.com',
      'gateway.pinata.cloud',
      'ipfs.infura.io',
      'castledao.infura-ipfs.io',
      'nftstorage.link',
      'castledao-go-api.vercel.app',
      'cdn.talesofelleria.com',
      'ipfs.moralis.io',
      'images.shogun.lol',
      'app.rlm.land',
      'ipfs.tetrateras.io',
      'ipfs.*',
      '*'
    ]
  }
};
