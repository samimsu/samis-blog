import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

const Post55 = () => {
  return (
    <Layout pageTitle="#55 - October Goals">
      <h4>October 31, 2021</h4>
      <article>
        <p>My goals for October were the same as my goals for September.</p>
        <ol>
          <li>Get a job</li>
          <li>Read 2 books</li>
          <li>Create 1 project</li>
        </ol>
        <p>Here's how I did.</p>
        <h2>1. Get a job</h2>
        <p>
          I failed on that one. I do not have a job yet. I didn't try hard
          enough. I pinned my hopes on the two positions I interviewed for, so I
          stopped applying as much because of that. I got rejected for one, and
          I'm still waiting to find out about the second one. I sent a couple of
          emails following up, but I didn't get a response from them. I decided
          to message someone at the company a few days ago on LinkedIn, and I
          heard back today. I was told they still haven't filled the role, and I
          should expect to hear back soon.
        </p>
        <p>2. Read 2 books</p>
        <StaticImage
          src="../../images/no-rules-rules-cover.png"
          alt="No Rules Rules Cover"
          height={400}
        />
        <StaticImage
          src="../../images/can't-hurt-me-cover.png"
          alt="Can't Hurt Me Cover"
          height={400}
        />
        <p>
          I accomplished this one. I read/listened to two books this month,
          namely No Rules Rules: Netflix and the Culture of Reinvention by Erin
          Meyer and Reed Hastings and Can't Hurt Me: Master Your Mind and Defy
          the Odds by David Goggins.
        </p>
        <p>
          The Netflix company culture sounds amazing. It's so radical and
          different from other companies and goes against conventional wisdom. I
          believe that's why they've achieved extraordinary success. As the
          title suggests, Netflix is about having as few rules and regulations
          as possible, because that allows employees to feel more free and
          responsible for the work they do. I highly recommend this book for
          anyone but especially entrepreneurs who run their own companies or
          would like to someday.
        </p>
        <p>
          I listened to the Can't Hurt Me audiobook. Most of my listening was on
          my walk, which was a convenient way to get it done. It was hard to
          focus all the time, but my goal was no matter what that I should
          finish it. The audiobook was just under 14 hours long. It's a book
          about Goggins's life and how he was able to overcome the hurdles and
          achieve seemingly impossible goals. He lays out ten challenges for the
          reader to help them realize their potential. Here's the warning order
          from the beginning of the book. I assume it's a military thing, but
          it's pretty self-explanatory.
        </p>
        <StaticImage
          src="../../images/chm-warning-order.png"
          alt="Can't Hurt Me Warning Order"
        />
        <p>The warning order pretty much summarizes the point of the book. </p>
        <p>"This is the origin story of a hero. The hero is you."</p>
        <p>
          I'll share a picture of the first challenge, and you can decide if
          it's a book you're interested in. I believe I was first hooked to
          David Goggins through his interviews. I love his Joe Rogan appearances
          and other interviews too.
        </p>
        <StaticImage
          src="../../images/chm-challenge1.png"
          alt="Can't Hurt Me Challenge 1"
        />
        <p>
          I liked the book a lot. The scary thing is if I don't utilize the
          book, and let my life slip away as it feels like it has been the past
          couple of days. Life is full of ups and downs, and you can always
          fight back and improve, and I hope to do that. This post will also
          serve as a reminder to myself to help me stay on track.
        </p>
        <p>3. Create 1 project</p>
        <p>
          I technically didn't do this because I didn't create something new.
          Instead, I continued working on{" "}
          <a href="https://simplechat-demo.netlify.app/">SimpleChat</a>, so I'll
          consider that as my project for the month. I believe the features
          added this month included:
        </p>
        <ul>
          <li>deleting your own messages</li>
          <li>setting your username</li>
          <li>send button</li>
        </ul>

        <p>
          There were also some styling changes and little things here and there.
        </p>
        <StaticImage
          src="../../images/simplechat-ss2.png"
          alt="SimpleChat screenshot"
        />
        <p>
          So that's my update for the month. I hope next month goes well and I
          make progress on the job front.
        </p>
      </article>
    </Layout>
  );
};

export default Post55;
