import logger from '../logger';

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET_KEY);

const fs = require('fs');
const filePrefix = process.env.PINATA_FILE_PREFIX || 'arbitrum-gen-one';
export async function uploadToIPFS(path: string, name): Promise<any> {
  // TODO https://www.npmjs.com/package/@pinata/sdk
  await pinata.testAuthentication();
  const readableStreamForFile = fs.createReadStream(path);
  const options = {
    pinataMetadata: {
      name: `${filePrefix}-${name}`
    },
    pinataOptions: {
      cidVersion: 0
    }
  };

  const result = await pinata.pinFileToIPFS(readableStreamForFile, options);

  logger('DEBUG', 'Uploaded to IPFS', result);
  return `ipfs://${result.IpfsHash}`;
}
