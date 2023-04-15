import { useEffect, useState } from 'react';
import { Avatar } from './Avatar';

export default function AddressIcon({
  address,
  width = 22
}: {
  address: string;
  width?: number;
}): React.ReactElement {
  const [show, setShow] = useState(false);
  // Prevent server-side problem with different UI
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) {
    return (
      <div
        style={{
          width: width,
          height: width,
          borderRadius: '100%',
          background: 'grey'
        }}
      ></div>
    );
  }

  return (
    <div style={{ width: width, height: width }}>
      <Avatar size={width} address={address} />
    </div>
  );
}
