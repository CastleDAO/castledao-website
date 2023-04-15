import { getENS } from '../lib/ens';
import React, { useEffect, useState } from 'react';
import { formatAddress } from '../../app/lib/utils';

import { useProvider } from 'wagmi';
import { getServerSideProvider } from '../api/getServerSideProvider';
import { getTreasureTag } from '../lib/getTreasureTag';
import useSWR from 'swr';

async function fetchAddressResolved(address: string, showTreasureTag?: boolean) {
  const providerMainnet = getServerSideProvider(1);
  const providerArbitrum = getServerSideProvider(42161);

  if (showTreasureTag) {
    const treasureTag = await getTreasureTag(providerArbitrum, address);

    if (treasureTag) {
      return treasureTag;
    }
  }

  const ens = await getENS(providerMainnet, address);

  return ens ? ens : formatAddress(address).toLowerCase();
}

export function Address({
  address,
  showTreasureTag
}: {
  address: string;
  showTreasureTag?: boolean;
}): React.ReactElement {
  const [addressFormated, setAddressFormatted] = useState(formatAddress(address || ''));

  const { data, error, mutate } = useSWR(address ? `address-${address}` : null, () =>
    fetchAddressResolved(address, showTreasureTag)
  );

  return <React.Fragment>{data ? data : formatAddress(address || '').toLowerCase()}</React.Fragment>;
}
