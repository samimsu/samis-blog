import * as React from 'react';
import Layout from '../../components/layout';

function AtomicHabits() {
  return (
    <Layout pageTitle="Atomic Habits">
      <h4>September 19, 2021</h4>
      <article>
        <p>
          One of my favorite books is Atomic Habits by{' '}
          <a href="https://jamesclear.com/">James Clear</a>. I love how simple,
          straightforward and practical it is. The key to success is your
          habits. It's about the little things you do every day that builds up
          over time until you achieve remarkable results.
        </p>
        <p>The four laws for building a good habit are:</p>
        <ol>
          <li>Make it obvious</li>
          <li>Make it attractive</li>
          <li>Make it easy</li>
          <li>Make it satisfying</li>
        </ol>
        <p>You can invert these to break a bad habit:</p>
        <ol>
          <li>Make it invisible</li>
          <li>Make it unattractive</li>
          <li>Make it difficult</li>
          <li>Make it unsatisfying</li>
        </ol>
        <p>
          One way to make a habit obvious is to set up your environment to have
          triggers that help you perform the good habit. If you want to drink a
          glass of water every morning, it might help to put a jug of water next
          to your bed the night before.
        </p>
        <p>
          One way to make a habit attractive is to have a motivation ritual. You
          can do something easy or something you enjoy right before a difficult
          habit. Athletes are known to have rituals before games to help them
          get into the right mental state.
        </p>
        <p>
          One way to make a habit easy is to use the 2-minute rule. When you
          want to start a new habit, it should only take 2 minutes to do. You
          can break down difficult goals into multiple steps and make the first
          step as easy as possible so that step can be done in 2 minutes. If you
          want to run a marathon, start with just tying your shoes.
        </p>
        <p>
          One way to make a habit satisfying is to use a habit tracker. Once you
          perform a particular habit like running on a given day, you can mark
          that off in your tracker. Merely marking it can be a satisfying
          feeling.
        </p>
        <p>
          Those were four ways to use the laws. The book goes into a lot more
          detail about different stories and techniques that you can use. I
          highly recommend checking it out.
        </p>
        <p>
          I used a habit tracker for a few weeks to pay attention to my current
          habits and to add new habits to my routine. I tracked things like
          coding, reading, praying, journaling, applying for jobs, etc. Another
          technique the book mentions is habit stacking, which is to perform
          habits one after another to make them more automatic. I've started
          walking recently, and I stack that habit with a particular prayer.
          After I pray, I prepare for my walk.
        </p>
        <p>
          I may reread the book someday to further drill the concepts into my
          brain. It's easy to slack off as time goes on, and I sort of have
          been, but at the same time, I'm making progress on other fronts.
        </p>
      </article>
    </Layout>
  );
}

export default AtomicHabits;
