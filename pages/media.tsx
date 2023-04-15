import Link from 'next/link';
import { LayoutFullWidth } from '../modules/app/components/LayoutFullWidth';
import Teaser from '../modules/app/components/Teaser';

export default function Token() {
  return (
    <LayoutFullWidth>
      <Teaser title="Media Kit" subtitle="CastleDAO media kit for memes, collabs or whatever you need." bg />

      <div className="centered" style={{ textAlign: 'left' }}>
        <h3>Logos</h3>
        <img src="/logos/logo_v2_medium.png" />
        <img src="/logos/Logo_CastleDAO_Icon.png" />
        <img src="/logos/Logo_CastleDAO_text.png" />
        <img src="/logos/Logo_CastleDAO_Landscape.png" />
        <img src="/logos/Logo_CastleDAO_Landscape_HD.png" />

        <h3>Cards</h3>
        <img src="/arena/Card_Back.png" />
        <h3>SmolBrawlers</h3>

        <img src="/smol-brawlers/smol-brawlers.png" />
        <img src="/smol-brawlers/demo/0.png" />
        <img src="/smol-brawlers/demo/1.png" />
        <img src="/smol-brawlers/demo/2.png" />
        <img src="/smol-brawlers/promosmolbrawlers.png" />
        <img src="/smol-brawlers/1400x400.png" />

        <h3>Other</h3>
        <img src="/media/1400x300.png" />
        <img src="/media/1400x400-castles.png" />
        <img src="/media/defiheroes-1400x400.png" />
        <img src="/media/defiheroes-600x600.png" />
        <img src="/media/defihero.png" />
        <img src="/media/image-generals-map.png" />
        <img src="/media/banner.png" />
        <h3>Collabs</h3>
        <img src="/collabs/blueberry.png" />
        <img src="/collabs/mintyouregg.png" />

        <h3>CastleDAO in the media</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YuAZ3oHBSxQ"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <style jsx>{`
        .centered {
          max-width: 960px;
          margin: 0 auto;
          padding: 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .roadmap-section-title {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .title {
          text-align: center;
          background: url(/icons-set-2/banners/small/banner_small3.png);
          background-size: 100% 100%;
          padding: 30px 30px 20px 30px;
          font-size: 12px;
        }

        .title.green {
          background: url(/icons-set-2/banners/small/banner_small2.png);
          background-size: 100% 100%;
        }

        .title.yellow {
          background: url(/icons-set-2/banners/small/banner_small1.png);
          background-size: 100% 100%;
        }

        .blocks {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }

        .roadmap-section {
          text-align: center;
          margin-bottom: 30px;
          background: url(/wall_castle_dark.png);
          background-size: 300px;
          padding: 30px;
          color: white;
        }

        .roadmap-description {
          padding: 15px;
          margin-top: 15px;
          background: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </LayoutFullWidth>
  );
}
