import * as React from "react";
import Layout from "../components/layout";
import "@fontsource/roboto";
import { Link } from "gatsby";
import { postLink } from "./index.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Sami">
      <h2>Posts</h2>
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

export default IndexPage;
