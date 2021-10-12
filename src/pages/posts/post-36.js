import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Post36 = () => {
  return (
    <Layout pageTitle="#36">
      <h4>October 12, 2021</h4>
      <article>
        <p>
          Today hasn't been a productive day. I woke up later than I would have
          liked, but I didn't let my whole day go to waste. I still managed over
          13k steps.
        </p>
        <p>
          It's interesting how I couldn't believe people could walk 10k steps
          every day, and now I've become that person. Eventually, I'll probably
          try for 10 mile runs every day. I'm not quite sure how far that is and
          how I'll feel, but it's something to look forward to.
        </p>
        <p>
          I didn't work on any coding projects today. I guess I didn't find the
          time. This post may technically count as coding because I'll create a
          JavaScript file and use React to create the post. Then I'll upload it
          to my Github{" "}
          <a href="https://github.com/samimsu/samis-blog">repository</a>.
        </p>
        <p>
          Github has a lovely graphic that shows your contributions in the past
          year. Because of the daily blog posts, I'm technically making
          contributions every day. Here's what mine looks like:
        </p>
        <StaticImage
          src="../../images/github-contributions.png"
          alt="Github Contributions"
        />
        <p>
          I watched a few chess streamers on Twitch today. Twitch has been my
          substitute for YouTube, TV shows, and movies.
        </p>
        <p>
          I was using a particular website for movies and TV shows, and I told
          myself I wouldn't go on it anymore. The loophole I can use is to
          download torrents. I've been hearing a lot about Squid Game, and I
          really want to check it out. I might do that.
        </p>
        <p>
          Tomorrow is the second and final interview for this Frontend Developer
          position I applied for. I'm a bit nervous. I really want this one and
          feel like I'm good enough. I'll be okay if I don't get it. The
          experience is still good.
        </p>
        <p>
          I got to drive again today to pick up my brother. I enjoyed it. I
          guess I'm building up confidence. There will always be that little bit
          of anxiety, but the practice is good.
        </p>
        <p>I hope tomorrow goes well.</p>
      </article>
    </Layout>
  );
};

export default Post36;
