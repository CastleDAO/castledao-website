import Link from 'next/link';

export function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="link">
          <a href="https://castledao.gitbook.io/castles/" target="_blank" rel="noopener noreferrer">
            Wiki
          </a>
        </div>
        <div className="link">
          <a
            href="https://twitter.com/CastlesDAO2"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter account"
          >
            Twitter CastlesDAO
          </a>
        </div>
        <div className="link">
          <a
            href="https://instagram.com/castlesdao2"
            target="_blank"
            rel="noopener noreferrer"
            title="instagram account"
          >
            Instagram
          </a>
        </div>

        <div className="link">
          <a
            title="Join discord"
            href="https://discord.gg/nyKYmvnXca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Discord
          </a>
        </div>

        <div className="link">
          <Link href="/media" title="Media Kit">
            Media Kit
          </Link>
        </div>

        <div className="link">
          <Link href="/blog" title="Blog">
            Blog
          </Link>
        </div>

        <div className="link">
          <a href="https://gmx.io?ref=castledao">Trade on GMX!</a>
        </div>

        <div className="link">
          <a href="https://github.com/CastleDAO">GitHub</a>
        </div>

        <div className="link">
          <a href="https://slayersofmoloch.com">Slayers Of Moloch</a>
        </div>
      </div>
      <div style={{ padding: '30px', textAlign: 'center' }}>2023 - CastleDAO</div>
      <style jsx>
        {`
          .footer {
            padding: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            max-width: 1500px;
            margin: 0 auto;
            margin-top: 30px;
            text-transform: uppercase;
          }

          .footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            color: white;
            text-transform: uppercase;
            text-decoration: underline;
          }

          .link {
            padding: 30px;
          }
        `}
      </style>
    </div>
  );
}
