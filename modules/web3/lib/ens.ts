export async function getENS(provider, address: string): Promise<string | null> {
  try {
    const name = await provider.lookupAddress(address);
    return name;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function resolveENS(provider, ensName: string): Promise<string | null> {
  try {
    const address = await provider.resolveName(ensName);
    return address;
  } catch (err) {
    console.log(err);
    return null;
  }
}
