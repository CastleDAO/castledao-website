import Link from 'next/link';
import { Divider } from '../../modules/app/components/Divider';
import MarkdownIt from 'markdown-it';
import fs from 'fs';
const matter = require('gray-matter');
import { LayoutFullWidth } from '../../modules/app/components/LayoutFullWidth';
import { GetStaticProps } from 'next';
import { Button } from '../../modules/app/components/Button';
import Head from 'next/head';
export default function Blog({ posts }) {
  return (
    <LayoutFullWidth>
      <Head>
        <title>CastleDAO | Blog</title>
      </Head>
      <div className="bg">
        <div className="content">
          <h1>Blog Posts</h1>
          <div className="blog-posts">
            {posts.map(post => {
              return (
                <div key={`post-${post.path}`} className="blog-post">
                  <Link href={`/blog/${post.path}`} title="View post">
                    <h2>{post.title}</h2>
                    <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                  </Link>
                  <Divider />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg {
          background: url(/wall_castle_dark.png);
          padding: 30px;
          min-height: 1000px;
        }

        h1 {
          padding: 30px 15px;
          background: url(/deck-builder/title.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          text-align: center;
          color: black;
          max-width: 500px;
          margin: 0 auto;
        }

        h2 {
          padding: 15px;
          background: #000000e8;
          margin-bottom: 0;
        }

        .blog-post {
          margin-bottom: 30px;
        }

        .content {
          padding: 30px 70px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .post-content {
          background: black;
          padding: 15px;
          border-left: 4px solid black;
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = [];
  const files = fs.readdirSync('./docs/blog').reverse();
  const md = MarkdownIt({
    linkify: true
  });
  files.forEach(function (file) {
    const data = fs.readFileSync(`./docs/blog/${file}`);
    const matterInfo = matter(data.toString());
    const content = md.render(matterInfo.content.substring(0, 150) + '...');
    posts.push({
      path: file.substring(0, file.indexOf('.')),
      file: file,
      title: matterInfo.data.title,
      content
    });
  });

  return {
    props: {
      posts
    }
  };
};
