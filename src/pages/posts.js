import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { postLink } from "./index.module.css";

const tools = () => {
  return (
    <Layout pageTitle="Posts">
      <div className={postLink}>
        <Link to="/posts/content-creator">Content Creator</Link>
        <span>Sep 9, 2021</span>
      </div>
      <div className={postLink}>
        <Link to="/posts/introvert">Introvert</Link>
        <span>Sep 8, 2021</span>
      </div>
      <div className={postLink}>
        <Link to="/posts/hi-im-sami">Hi! I'm Sami</Link>
        <span>Sep 7, 2021</span>
      </div>
    </Layout>
  );
};

export default tools;
