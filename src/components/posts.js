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
    <Post file="post-32" linkText="#32" date="Oct 8, 2021" />,
    <Post file="post-31" linkText="#31" date="Oct 7, 2021" />,
    <Post file="post-30" linkText="#30" date="Oct 6, 2021" />,
    <Post file="post-29" linkText="#29" date="Oct 5, 2021" />,
    <Post
      file="post-28"
      linkText="#28 - 2 interviews, 12,000+ steps walk"
      date="Oct 4, 2021"
    />,
    <Post file="post-27" linkText="#27" date="Oct 3, 2021" />,
    <Post file="post-26" linkText="#26" date="Oct 2, 2021" />,
    <Post file="twitch" linkText="Twitch" date="Oct 1, 2021" />,
    <Post
      file="september-goals"
      linkText="September Goals"
      date="Sep 30, 2021"
    />,
    <Post
      file="manchester-united"
      linkText="Manchester United"
      date="Sep 29, 2021"
    />,
    <Post file="sick" linkText="Sick" date="Sep 28, 2021" />,
    <Post file="david-goggins" linkText="David Goggins" date="Sep 27, 2021" />,
    <Post file="simplechat" linkText="SimpleChat" date="Sep 26, 2021" />,
    <Post
      file="procrastination"
      linkText="Procrastination"
      date="Sep 25, 2021"
    />,
    <Post file="todays-walk" linkText="Today's Walk" date="Sep 24, 2021" />,
    <Post file="streak" linkText="Streak" date="Sep 23, 2021" />,
    <Post
      file="primary-school"
      linkText="Primary School"
      date="Sep 22, 2021"
    />,
    <Post file="regrets" linkText="Regrets" date="Sep 21, 2021" />,
    <Post
      file="ten-thousand-steps"
      linkText="10,000 Steps"
      date="Sep 20, 2021"
    />,
    <Post file="atomic-habits" linkText="Atomic Habits" date="Sep 19, 2021" />,
    <Post file="chess" linkText="Chess" date="Sep 18, 2021" />,
    <Post file="walking" linkText="Walking" date="Sep 17, 2021" />,
    <Post
      file="fullstackopen-course"
      linkText="Full Stack Open Course"
      date="Sep 16, 2021"
    />,
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
