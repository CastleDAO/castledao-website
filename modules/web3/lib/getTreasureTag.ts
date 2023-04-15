import { ethers } from 'ethers';
import treasureTagAbi from './abi/treasureTagAbi.json';
export async function getTreasureTag(provider: ethers.providers.JsonRpcProvider, address: string) {
  const contractAddress = '0xE50ABe4756809B51b0041bB5Ab12ec4c5C67aF47';
  const contract = new ethers.Contract(contractAddress, treasureTagAbi, provider);

  try {
    const id = await contract.userToOwnedSubdomainToken(address);
    const tokenUri = await contract.tokenURI(id);
    const response = await fetch(tokenUri);
    const data = await response.json();
    return data.name;
  } catch (e) {
    console.log(e);
    return null;
  }
}
