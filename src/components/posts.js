import * as React from "react";
import { Link } from "gatsby";
import { postLink, postLinkContainer } from "../pages/index.module.css";

const Posts = () => {
  return (
    <div>
      <div className={postLinkContainer}>
        <Link to="/posts/advice" className={postLink}>
          Advice
        </Link>
        <span>Sep 10, 2021</span>
      </div>
      <div className={postLinkContainer}>
        <Link to="/posts/content-creator" className={postLink}>
          Content Creator
        </Link>
        <span>Sep 9, 2021</span>
      </div>
      <div className={postLinkContainer}>
        <Link to="/posts/introvert" className={postLink}>
          Introvert
        </Link>
        <span>Sep 8, 2021</span>
      </div>
      <div className={postLinkContainer}>
        <Link to="/posts/hi-im-sami" className={postLink}>
          Hi! I'm Sami
        </Link>
        <span>Sep 7, 2021</span>
      </div>
    </div>
  );
};

export default Posts;
