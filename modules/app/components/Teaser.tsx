import React from 'react';

export default function Teaser({
  title,
  subtitle,
  bg = false,
  children
}: {
  title: string;
  subtitle: React.ReactElement | string;
  bg?: boolean;
  children?: React.ReactElement;
}): React.ReactElement {
  return (
    <div>
      <div className={`teaser ${bg ? 'bg' : ''}`}>
        <h2>{title}</h2>
        <div className="text">{subtitle}</div>
        {children}
      </div>
      <style jsx>{`
        .teaser {
          padding: 100px;
          text-align: center;
          text-transform: uppercase;
          font-size: 18px;
        }

        .teaser.bg {
          background-color: var(--black-background);
          background-image: linear-gradient(to bottom, transparent, var(--black-background)),
            url('/wall_castle.png');
        }

        @media only screen and (max-width: 600px) {
          .teaser {
            padding: 30px;
          }
        }

        .teaser h2 {
          color: var(--mythic);
          font-size: 35px;
          text-shadow: 3px 3px 3px black;
        }

        .teaser .text {
          font-weight: 400;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
          max-width: 600px;
          margin: 0 auto 40px;
        }
      `}</style>
    </div>
  );
}
