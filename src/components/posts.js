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
    <Post key={61} file="post-61" linkText="#61" date="Nov 6, 2021" />,
    <Post key={60} file="post-60" linkText="#60" date="Nov 5, 2021" />,
    <Post key={59} file="post-59" linkText="#59" date="Nov 4, 2021" />,
    <Post key={58} file="post-58" linkText="#58" date="Nov 3, 2021" />,
    <Post
      key={57}
      file="post-57"
      linkText="#57 - 30,000 steps"
      date="Nov 2, 2021"
    />,
    <Post key={56} file="post-56" linkText="#56" date="Nov 1, 2021" />,
    <Post
      key={55}
      file="post-55"
      linkText="#55 - October Goals"
      date="Oct 31, 2021"
    />,
    <Post key={54} file="post-54" linkText="#54" date="Oct 30, 2021" />,
    <Post key={53} file="post-53" linkText="#53" date="Oct 29, 2021" />,
    <Post key={52} file="post-52" linkText="#52" date="Oct 28, 2021" />,
    <Post key={51} file="post-51" linkText="#51" date="Oct 27, 2021" />,
    <Post
      key={50}
      file="post-50"
      linkText="#50 - 50 daily posts"
      date="Oct 26, 2021"
    />,
    <Post key={49} file="post-49" linkText="#49" date="Oct 25, 2021" />,
    <Post key={48} file="post-48" linkText="#48" date="Oct 24, 2021" />,
    <Post key={47} file="post-47" linkText="#47" date="Oct 23, 2021" />,
    <Post key={46} file="post-46" linkText="#46" date="Oct 22, 2021" />,
    <Post key={45} file="post-45" linkText="#45" date="Oct 21, 2021" />,
    <Post key={44} file="post-44" linkText="#44" date="Oct 20, 2021" />,
    <Post
      key={43}
      file="post-43"
      linkText="#43 - 20,000 steps"
      date="Oct 19, 2021"
    />,
    <Post key={42} file="post-42" linkText="#42" date="Oct 18, 2021" />,
    <Post key={41} file="post-41" linkText="#41" date="Oct 17, 2021" />,
    <Post key={40} file="post-40" linkText="#40" date="Oct 16, 2021" />,
    <Post key={39} file="post-39" linkText="#39" date="Oct 15, 2021" />,
    <Post key={38} file="post-38" linkText="#38" date="Oct 14, 2021" />,
    <Post key={37} file="post-37" linkText="#37" date="Oct 13, 2021" />,
    <Post key={36} file="post-36" linkText="#36" date="Oct 12, 2021" />,
    <Post key={35} file="post-35" linkText="#35" date="Oct 11, 2021" />,
    <Post key={34} file="post-34" linkText="#34" date="Oct 10, 2021" />,
    <Post key={33} file="post-33" linkText="#33" date="Oct 9, 2021" />,
    <Post key={32} file="post-32" linkText="#32" date="Oct 8, 2021" />,
    <Post key={31} file="post-31" linkText="#31" date="Oct 7, 2021" />,
    <Post key={30} file="post-30" linkText="#30" date="Oct 6, 2021" />,
    <Post key={29} file="post-29" linkText="#29" date="Oct 5, 2021" />,
    <Post
      key={28}
      file="post-28"
      linkText="#28 - 2 interviews, 12,000+ steps walk"
      date="Oct 4, 2021"
    />,
    <Post key={27} file="post-27" linkText="#27" date="Oct 3, 2021" />,
    <Post key={26} file="post-26" linkText="#26" date="Oct 2, 2021" />,
    <Post key={25} file="twitch" linkText="Twitch" date="Oct 1, 2021" />,
    <Post
      key={24}
      file="september-goals"
      linkText="September Goals"
      date="Sep 30, 2021"
    />,
    <Post
      key={23}
      file="manchester-united"
      linkText="Manchester United"
      date="Sep 29, 2021"
    />,
    <Post key={22} file="sick" linkText="Sick" date="Sep 28, 2021" />,
    <Post
      key={21}
      file="david-goggins"
      linkText="David Goggins"
      date="Sep 27, 2021"
    />,
    <Post
      key={20}
      file="simplechat"
      linkText="SimpleChat"
      date="Sep 26, 2021"
    />,
    <Post
      key={19}
      file="procrastination"
      linkText="Procrastination"
      date="Sep 25, 2021"
    />,
    <Post
      key={18}
      file="todays-walk"
      linkText="Today's Walk"
      date="Sep 24, 2021"
    />,
    <Post key={17} file="streak" linkText="Streak" date="Sep 23, 2021" />,
    <Post
      key={16}
      file="primary-school"
      linkText="Primary School"
      date="Sep 22, 2021"
    />,
    <Post key={15} file="regrets" linkText="Regrets" date="Sep 21, 2021" />,
    <Post
      key={14}
      file="ten-thousand-steps"
      linkText="10,000 Steps"
      date="Sep 20, 2021"
    />,
    <Post
      key={13}
      file="atomic-habits"
      linkText="Atomic Habits"
      date="Sep 19, 2021"
    />,
    <Post key={12} file="chess" linkText="Chess" date="Sep 18, 2021" />,
    <Post key={11} file="walking" linkText="Walking" date="Sep 17, 2021" />,
    <Post
      key={10}
      file="fullstackopen-course"
      linkText="Full Stack Open Course"
      date="Sep 16, 2021"
    />,
    <Post
      key={9}
      file="job-hunting"
      linkText="Job hunting"
      date="Sep 15, 2021"
    />,
    <Post
      key={8}
      file="i-quit-youtube"
      linkText="I quit YouTube"
      date="Sep 14, 2021"
    />,
    <Post key={7} file="coaching" linkText="Coaching" date="Sep 13, 2021" />,
    <Post
      key={6}
      file="emotional-intelligence"
      linkText="Emotional Intelligence"
      date="Sep 12, 2021"
    />,
    <Post key={5} file="birthday" linkText="Birthday" date="Sep 11, 2021" />,
    <Post key={4} file="advice" linkText="Advice" date="Sep 10, 2021" />,
    <Post
      key={3}
      file="content-creator"
      linkText="Content Creator"
      date="Sep 9, 2021"
    />,
    <Post key={2} file="introvert" linkText="Introvert" date="Sep 8, 2021" />,
    <Post
      key={1}
      file="hi-im-sami"
      linkText="Hi! I'm Sami"
      date="Sep 7, 2021"
    />,
  ];
  return <div>{count ? posts.slice(0, count) : posts}</div>;
};

export default Posts;
