import { useCallback, useState, ReactChild, CSSProperties } from 'react';
import Jazzicon from './Jazzicon';
import { useEnsAvatar } from 'wagmi';

export interface AvatarProps {
  size: number;
  address: string;
  defaultComponent?: ReactChild | ReactChild[];
  style?: CSSProperties;
}

export function Avatar({ size, address, style }: AvatarProps): JSX.Element {
  const { data, isError, isLoading } = useEnsAvatar({
    addressOrName: address,
    chainId: 1
  });

  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, [address, data]);

  let avatarImg: any | null = null;

  const cssStyle = {
    display: loaded ? undefined : 'none',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `${size}px`,
    ...(style || {})
  };

  if (data) {
    avatarImg = <img alt="avatar" style={cssStyle} src={data} onLoad={onLoad} />;
  }

  const defaultAvatar = (!data || !loaded) && address && <Jazzicon address={address} size={size} />;

  return (
    <>
      {defaultAvatar}
      {avatarImg}
    </>
  );
}
