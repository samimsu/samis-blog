import * as React from 'react';
import Layout from '../../components/layout';

function Post33() {
  return (
    <Layout pageTitle="#33">
      <h4>October 9, 2021</h4>
      <article>
        <p>
          Time flies. How have I done 33 of these already? When will I run out
          of things to talk about? I wonder if Shay Carl ever thought about that
          - if he'd ever run out of things to vlog.
        </p>
        <p>
          I watched Billu today (an Indian film), and it made me think about the
          human obsession with celebrities. I think it's perhaps most intense in
          our teenage years. I know that I had a few like Shahrukh Khan, Miley
          Cyrus, Lea Michele, and Shay Carl, to name a few.
        </p>
        <p>
          Shahrukh Khan plays a famous actor in the film, and he visits a
          village where his childhood friend lives, whom he hasn't seen since he
          left. The villagers had heard a rumor that Billu - now a barber - was
          a good friend of the actor when they were kids.
        </p>
        <p>
          The villagers try to bribe Billu to get him to help them meet the
          actor. Billu tries to refuse because he hadn't kept in touch with the
          actor since he left, and Billu wasn't sure if he would even remember
          him.
        </p>
        <p>
          What I found fascinating was the realistic take on the obsession of
          people with celebrities. We put them on a pedestal which I imagine is
          perhaps quite uncomfortable for them. Surely they don't see themselves
          in that way.
        </p>
        <p>
          I suppose there's a lot to explore about this topic, but I'll leave it
          there for now. I could go into my obsessions and the craving for
          attention, and the slight responses I've gotten.
        </p>
        <p>
          I did some work on{' '}
          <a href="https://simplechat-demo.netlify.app/">SimpleChat</a> as well.
          I first refactored the code to make it more readable and make it
          easier to add features to. I also fixed an issue that allowed a user
          to send an empty message, and I made the app title clickable so that
          the page refreshes once you click it.
        </p>
        <p>
          Currently, I'm working on making usernames persist when the page
          refreshes or when you revisit the website. For that, I need to add new
          users to the database with their usernames. I also have to update the
          database whenever the username changes.
        </p>
        <p>
          I also went on my walk today. I walked at least 10,000 steps, as I
          usually try to do. It's pretty much a daily thing now. I didn't walk
          yesterday because I was visiting a cousin.
        </p>
        <p>
          I had a lovely time at my cousin's place yesterday. I was off my phone
          for most of the time and trying to make conversation. I was slightly
          impressed with how well I did. My social anxiety was at a minimum. We
          went to the beach for a bit which was nice.
        </p>
        <p>
          In a bit, I'm going to pick my brother up from work. He'll take the
          metro and meet me nearby, so I don't have to go all the way to his
          office. I'm thinking about listening to some Goggins in the car. I
          haven't listened to him in a while.
        </p>
        <p>
          I hope I get to read some of No Rules Rules before bed. I've been
          enjoying it. In fact, I might try to read it after I get this post up.
          There's no time like the present.
        </p>
      </article>
    </Layout>
  );
}

export default Post33;
