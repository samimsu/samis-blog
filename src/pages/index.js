import * as React from "react";
import Layout from "../components/layout";
import "@fontsource/roboto";
import { Link } from "gatsby";
import { postLink } from "./index.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Sami">
      <p>
        I am a software developer living in the UAE. I'm currently looking for a
        job in tech. This is my personal blog where I write posts about random
        things. I have a{" "}
        <a href="https://samimsu.github.io">portfolio website</a> and{" "}
        <a href="https://codingforcasuals.com">coding blog</a> too.
      </p>
      <h2>Latest posts</h2>
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

export default IndexPage;
