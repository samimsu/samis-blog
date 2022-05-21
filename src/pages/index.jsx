import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Posts from '../components/posts';
import '@fontsource/roboto';
import {
  latestPostsHeading,
  viewAllLink,
  revealEmailBtn,
} from './index.module.css';

function IndexPage() {
  const [showEmail, setShowEmail] = React.useState(false);
  return (
    <Layout pageTitle="Sami">
      <p>
        I am a software developer living in the UAE. I'm working as a Web
        Developer Intern for Letswork. This is my personal blog where I write
        posts about random things. You can find my portfolio website{' '}
        <a href="https://samimsu.github.io">here</a>.
      </p>
      <p>
        You can reach out to me by email at:{' '}
        <button
          className={revealEmailBtn}
          onClick={() => setShowEmail(!showEmail)}
          onKeyDown={() => setShowEmail(!showEmail)}
        >
          <strong>
            {showEmail ? 'mohammadsamimsu@gmail.com' : 'click to reveal'}
          </strong>
        </button>
      </p>
      <div className={latestPostsHeading}>
        <h2>Latest posts</h2>
        <Link to="/posts" className={viewAllLink}>
          View All
        </Link>
      </div>
      <Posts count={5} />
    </Layout>
  );
}

export default IndexPage;
