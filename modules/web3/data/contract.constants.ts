import { chainId } from 'wagmi';

export const CONTRACTS = {
  [chainId.arbitrumGoerli]: {
    castles: '0x887bD304b57d1daF5BC6075Df728bBE27852C713',
    defiheroes: '0x5B706a68077690E5648Df00939543b18B5412149',
    generals: '0x284d29b06CDF38043cca6FD7b229739e377523E3',
    ballot: '0xA86F02D8854e6c1dB41eB3308138D0473250CAF5',
    manager: '0xb41a1D1fCff8b00d1342881561BFa3Edb495f748',
    masterCastles: '0x474D5fBafda609670fBe96D92dcd90Ec5F02b9B4',
    generalsAmulet: '0x5CFCA09928afC89be9c118E35b81c78E9443D4b8',

    // Other
    magic: '0x2D110bF8fd17b514CbdCa025a97AAeb5E463AF4E',
    arb: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    ruby: ''
  },
  [chainId.arbitrum]: {
    castles: '0x71f5C328241fC3e03A8c79eDCD510037802D369c',
    generals: '0x1aaEC0Fa487A979A3F6B46DCCf0aC2648167a61E',
    defiheroes: '0x8Ec75Bc963181489D7fc1d892f687b8B0987d9eC',
    ballot: '0x9fe6688e7d4bfbc69fe2727f578b1f1b8c75b930',
    masterCastles: '0xfc7590e2d9226327FF9D517F2D3653C05b7f625E',
    generalsAmulet: '0x1DF62622F2FA840eD0708a52B67b89f48bAD806b',

    // other
    magic: '0x539bde0d7dbd336b79148aa742883198bbf60342',
    arb: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    ruby: '',
    elm: '0x45d55eadf0ed5495b369e040af0717eafae3b731'
  },
  [chainId.mainnet]: {
    castles: '0x90e9da69c4c77c6123e54d9e0e51c1603b3d09e4'
  }
};
