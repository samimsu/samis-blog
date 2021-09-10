import * as React from "react";
import Layout from "../components/layout";
import Posts from "../components/posts";
import "@fontsource/roboto";

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
      <Posts />
    </Layout>
  );
};

export default IndexPage;
