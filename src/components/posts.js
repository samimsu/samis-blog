import * as React from "react";
import { Link } from "gatsby";
import { postLinkContainer } from "../pages/index.module.css";

const Post = ({ file, linkText, date }) => {
  return (
    <div className={postLinkContainer}>
      <Link to={`/posts/${file}`}>{linkText}</Link>
      <span>{date}</span>
    </div>
  );
};

const Posts = ({ count }) => {
  const posts = [
    <Post file="job-hunting" linkText="Job hunting" date="Sep 15, 2021" />,
    <Post
      file="i-quit-youtube"
      linkText="I quit YouTube"
      date="Sep 14, 2021"
    />,
    <Post file="coaching" linkText="Coaching" date="Sep 13, 2021" />,
    <Post
      file="emotional-intelligence"
      linkText="Emotional Intelligence"
      date="Sep 12, 2021"
    />,
    <Post file="birthday" linkText="Birthday" date="Sep 11, 2021" />,
    <Post file="advice" linkText="Advice" date="Sep 10, 2021" />,
    <Post
      file="content-creator"
      linkText="Content Creator"
      date="Sep 9, 2021"
    />,
    <Post file="introvert" linkText="Introvert" date="Sep 8, 2021" />,
    <Post file="hi-im-sami" linkText="Hi! I'm Sami" date="Sep 7, 2021" />,
  ];
  return <div>{count ? posts.slice(0, count) : posts}</div>;
};

export default Posts;
