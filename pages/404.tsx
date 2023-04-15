import Link from 'next/link';
import { Button } from '../modules/app/components/Button';
import { LayoutFullWidth } from '../modules/app/components/LayoutFullWidth';

import Teaser from '../modules/app/components/Teaser';

export default function Home() {
  return (
    <LayoutFullWidth>
      <Teaser title="404" subtitle="Are you lost?" bg>
        <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Button tertiary>Go to the home page</Button>
        </Link>
      </Teaser>

      <style jsx>{`
        .centered {
          max-width: 960px;
          margin: 0 auto;
          padding: 30px;
          text-align: center;
        }

        .partners {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
      `}</style>
    </LayoutFullWidth>
  );
}
