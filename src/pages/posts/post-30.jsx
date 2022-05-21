import * as React from 'react';
import Layout from '../../components/layout';

function Post30() {
  return (
    <Layout pageTitle="#30">
      <h4>October 6, 2021</h4>
      <article>
        <p>
          Can we say it's been a month of daily posts? I didn't start out with
          that plan, but it sort of happened, and now I want to keep it going as
          long as I can.
        </p>
        <p>
          Today I worked on{' '}
          <a href="https://simplechat-demo.netlify.app/">SimpleChat</a> for the
          most part. I made a few tweaks, including adding a favicon, adjusting
          the app height so you don't have to scroll, adding a send button,
          improving the UI so it doesn't show the username for every message,
          and auto-scrolling to the latest message.
        </p>
        <p>
          I want to get to a point where it's good enough to be usable by users
          without any issues and with good enough features. I don't want it to
          be feature-rich. I want it to have the bare minimum to make it
          enjoyable to use.
        </p>
        <p>
          I got in my 10k steps walk today. I was sweating more than usual.
          Perhaps I was walking at a faster pace because I started the walk
          late. I saw a Tesla as I normally do. I still gaze in awe whenever I
          see one.
        </p>
        <p>
          I haven't been applying for jobs lately. I guess I'm holding out hope
          for the two interviews I had, but I've also been a little busy with
          SimpleChat. I don't know if this will be my project for the month.
          It's been taking up more time than I expected, but I've been enjoying
          it.
        </p>
        <p>
          I still haven't been reading much. I know I need to get that in if I
          want to finish two books this month. It may be hard to do, but we'll
          see.
        </p>
        <p>
          My mood has been good today, I would say. I feel optimism and
          excitement. Building SimpleChat has been enjoyable. I should add it to
          my portfolio website soon so that potential employers can check it
          out.
        </p>
      </article>
    </Layout>
  );
}

export default Post30;
