import { Divider } from '../../modules/app/components/Divider';
import MarkdownIt from 'markdown-it';
import fs from 'fs';
const matter = require('gray-matter');
import { LayoutFullWidth } from '../../modules/app/components/LayoutFullWidth';
import { GetStaticProps } from 'next';
import { Button } from '../../modules/app/components/Button';
import Head from 'next/head';
import Link from 'next/link';
export default function Blog({ content, title }) {
  return (
    <LayoutFullWidth>
      <Head>
        <title>CastleDAO | {title}</title>
      </Head>
      <div className="bg">
        <div className="content">
          <Link href="/blog" title="Back to the blog">
            <Button>Back</Button>
          </Link>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <Divider />
          <p>
            If you have want to know more about us, please, refer to our{' '}
            <a
              title="Join discord"
              href="https://discord.gg/nyKYmvnXca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
            .
          </p>
        </div>
      </div>
      <style jsx>{`
        .bg {
          background: url(/wall_castle_dark.png);
          padding: 30px;
        }

        .content {
          background: black;
          padding: 30px 70px;
          max-width: 1300px;
          margin: 0 auto;
        }

        @media (max-width: 600px) {
          .content {
            padding: 16px;
          }

          .bg {
            padding: 0;
          }
        }
      `}</style>
    </LayoutFullWidth>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const md = MarkdownIt({
    linkify: true
  });
  const data = fs.readFileSync(`./docs/blog/${context.params.path}.md`);
  const matterInfo = matter(data.toString());
  const content = md.render(matterInfo.content);

  return {
    props: {
      content,
      title: matterInfo.data.title
    }
  };
};

export async function getStaticPaths() {
  const fileNames = [];
  const files = fs.readdirSync('./docs/blog');
  files.forEach(function (file) {
    fileNames.push({
      params: {
        path: file.substring(0, file.indexOf('.'))
      }
    });
  });

  return {
    paths: fileNames,
    fallback: false // can also be true or 'blocking'
  };
}
