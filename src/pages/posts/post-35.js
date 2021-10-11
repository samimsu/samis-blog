import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Post35 = () => {
  return (
    <Layout pageTitle="#35">
      <h4>October 11, 2021</h4>
      <article>
        <p>
          I was up before 8 am today, which is not as common an occurrence as
          I'd like it to be. I suppose that's why I feel tired right now, and
          it's not even 10 pm yet.
        </p>
        <p>
          I got my 10,000 steps today as well and spotted at least one Tesla. I
          always anticipate it.
        </p>
        <p>
          I see a few regulars on my walk now. There's the guy who sits on a
          chair outside his store. There's the other guy who sits by the window
          in his store. I suppose those people are always going to be there, but
          their exact locations are pretty consistent.
        </p>
        <p>
          There are also different groups of kids who play football. I always
          want to join in and play, but I wouldn't do that. One boy kicked it
          too far yesterday, and I was happy to get a touch and kick it back to
          them. It's been a while since I've played myself.
        </p>
        <p>
          I didn't work on{" "}
          <a href="https://simplechat-demo.netlify.app/">SimpleChat</a> today.
          In fact, I decided to try something new. I was looking through my old
          journal and found an interesting way to track a habit. I must have
          seen it from somewhere else. So it's basically 90 little boxes
          arranged to look like the number '90'. The point is to mark each box
          for each day you perform the habit. Here's what I came up with so far:
        </p>
        <StaticImage
          src="../../images/habit-tracker-ss.png"
          alt="90 day habit tracker"
        />
        <p>
          I've thought of a few different things to add, but for now, that's it.
          I wanted to track a habit, so I thought this could be a fun way to do
          it. I'll see if I use it.
        </p>
        <p>
          An old client also got in touch for some Discord bot work. They
          updated the API, so I have to figure out how to use that. Hopefully, I
          can get it done tomorrow.
        </p>
      </article>
    </Layout>
  );
};

export default Post35;
