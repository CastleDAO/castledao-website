export function formatAddress(address: string): string {
  return address.slice(0, 7) + '...' + address.slice(-4);
}
