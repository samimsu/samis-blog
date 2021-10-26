import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";

const Post50 = () => {
  return (
    <Layout pageTitle="#50 - 50 daily posts">
      <h4>October 26, 2021</h4>
      <article>
        <p>
          50 daily posts. That's a nice milestone. I didn't start out with this
          goal in mind. I didn't even plan to write daily. A friend suggested
          it, so I gave it a go. It's a good time to reflect on what has
          happened in the past 50 days.
        </p>
        <p>
          The first post, <Link to="../hi-im-sami">'Hi! I'm Sami'</Link> was
          published on September 7. My birthday was on September 11. I started{" "}
          <Link to="../walking">walking</Link>. It's nice reading that post
          back. At that point, I hadn't walked 10,000 steps yet, and that seemed
          insane to me, and now it's something I do daily. I built{" "}
          <a href="https://simplechat-demo.netlify.app/">SimpleChat</a> and
          finished two books in September. I started two more books in October,
          and kept working on SimpleChat. I had a few interviews that were nice
          experiences for me. I added SimpleChat to my{" "}
          <a href="https://samimsu.github.io/">portfolio website</a>, and
          changed the color scheme as well. One of my favorite accomplishments
          was walking <Link to="../post-43">20,000 steps</Link> on October 19. I
          didn't know I could do it.
        </p>
        <p>
          There were some ups and downs throughout these past 50 days, but I
          decided to highlight the positives. I want to be a more optimistic
          person, but I'm also trying to work on my weaknesses because I believe
          positive change is possible. I can be better than I am now. One of
          these days I'm going to find a job. Seven months is a long time, but
          it's no reason to quit. It could be a good chapter in my life story.
        </p>
        <p>
          I'm trying to look at the negatives differently. I'm trying to
          appreciate struggle more, thanks to David Goggins. Overcoming our
          difficulties is what defines who we are. The tests are good for us. I
          want to face life head-on and overcome the challenges. The more
          hurdles we overcome, the more impressive the achievement. It's about
          showing yourself what you're capable of doing.
        </p>
      </article>
    </Layout>
  );
};

export default Post50;
