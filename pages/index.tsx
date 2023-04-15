import Link from 'next/link';
import { Button } from '../modules/app/components/Button';
import { LayoutFullWidth } from '../modules/app/components/LayoutFullWidth';
import { Divider } from '../modules/app/components/Divider';
import Image from 'next/image';
import { HighlightProjectCarouse } from '../modules/app/components/HighLightProjectCarouse';

function WhatIsCastledao() {
  return (
    <div className="wrapper">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <div>
          <div className="title">
            <h2>What is CastleDAO?</h2>
          </div>

          <div className="description">
            CastleDAO is the collective in charge of developing and launching the different parts of the
            Castle Protocol, and expanding the Castle ecosystem.
            <br />
            Currently we are working on the following projects:
            <ul>
              <li>Castle Protocol</li>
              <li>Slayers of Moloch</li>
              <li>CastleDAO NFT Collections</li>
            </ul>
          </div>
        </div>
        <div className="image">
          <Image
            src="/Cards.png"
            alt="Deck"
            fill
            style={{
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          padding: 30px;
          padding-bottom: 60px;
          background: var(--blue);
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
        }

        h2 {
          width: auto;
        }

        .subtitle {
          display: flex;
          justify-content: center;
          margin-top: 15px;
        }
        h3 {
          text-align: center;
          width: 300px;
          background: var(--red);
        }

        .title {
          background: black;
          width: 500px;
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
        }

        .description {
          max-width: 800px;
          padding: 15px;
        }

        .image {
          width: 500px;
          position: relative;
          height: 500px;
        }

        @media (max-width: 768px) {
          .wrapper {
            padding: 0;
            flex-direction: column;
          }

          .title {
            width: auto;
          }

          h3 {
            font-size: 15px;
          }

          .image {
            width: 350px;
            height: 350px;
          }
        }
      `}</style>
    </div>
  );
}

function Collections() {
  const collections = [
    {
      name: 'Castles',
      image: '/collections/castles.png',
      description: 'The first NFT on the Arbitrum Layer 2',
      troveLink: 'https://trove.treasure.lol/collection/castles'
    },
    {
      name: 'CryptoGenerals',
      image: '/collections/generals.png',
      description: 'Claim for free with your Castle, go on quests, level up and battle with your Generals',
      troveLink: 'https://trove.treasure.lol/collection/cryptogenerals'
    },
    {
      name: 'DefiHeroes',
      image: '/collections/defiheroes.png',
      description: 'Funny DefiHeroes, level up on chain and battle with your friends',
      troveLink: 'https://trove.treasure.lol/collection/defiheroes'
    },
    {
      name: 'CastleDAO Ballot',
      image: '/collections/ballot.png',
      description:
        'A piece of memoralia, fully rendered on chain and minted on the Arbitrum Layer 2. It allows to upgrade your General to a higher level',
      troveLink: 'https://trove.treasure.lol/collection/castledaoballot'
    }
  ];
  return (
    <div className="wrapper">
      <div className="collections">
        {collections.map((collection, index) => {
          return (
            <div className="collection" key={`collection-${index}`}>
              <div className="image">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div className="description">
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
                <a href={collection.troveLink}>
                  <Button>See on Trove</Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .wrapper {
          padding: 30px;
        }

        .collection {
          display: flex;
          flex-wrap: wrap;
        }

        .description {
          margin-left: 15px;
          flex: 1;
        }

        .image {
          position: relative;
          width: 300px;
          height: 300px;
          min-width: 300px;
        }

        @media (max-width: 768px) {
          .wrapper {
            padding: 0;
          }
          .collection {
            flex-direction: column;
            margin-bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <LayoutFullWidth>
      <HighlightProjectCarouse />
      <WhatIsCastledao />

      <div className="teaser">
        <div className="teaser-content">
          <div
            style={{
              maxWidth: '500px'
            }}
          >
            <Image
              alt="Castledao Logo"
              src="/logos/Logo_CastleDAO_text.png"
              width={500}
              height={80}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
          <p>
            CastleDAO launched in september 2021 &quot;Castles&quot;, the first NFT on the Arbitrum Layer 2.
            Since then we have launched new collections like CryptoGenerals, DefiHeroes and we are working on
            the Castle Protocol.
          </p>

          <div className="subtitle">
            <h3>Our collections</h3>
          </div>
          <Collections />
        </div>
      </div>

      <Divider />

      <style jsx>{`
        .teaser {
          background-color: var(--black-background);
          background-image: linear-gradient(to bottom, transparent, var(--black-background)),
            url('/wall_castle.png');

          padding: 100px;
          font-size: 18px;
        }

        .teaser .teaser-content {
          background: black;
          padding: 60px;
        }

        @media only screen and (max-width: 600px) {
          .teaser {
            padding: 15px;
          }
          .teaser .teaser-content {
            padding: 15px;
          }
        }
      `}</style>
    </LayoutFullWidth>
  );
}
