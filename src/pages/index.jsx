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
      <p>I am a software developer based in the UAE.</p>
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
