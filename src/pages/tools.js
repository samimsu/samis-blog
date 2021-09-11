import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { postLinkContainer } from "./index.module.css";

const tools = () => {
  return (
    <Layout pageTitle="Tools">
      <p>Tools and scripts that I've created</p>
      <div className={postLinkContainer}>
        <Link to="/tools/paragraphs-to-html">Paragraphs to HTML</Link>
      </div>
    </Layout>
  );
};

export default tools;
