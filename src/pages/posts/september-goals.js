import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const SeptemberGoals = () => {
  return (
    <Layout pageTitle="September Goals">
      <h4>September 30, 2021</h4>
      <article>
        <p>
          I had three goals for September, and I managed to accomplish 2/3. I
          looked back at my notes and forgot about one of them, which was
          getting a job. Here are the goals:
        </p>
        <ol>
          <li>Finish 2 books</li>
          <li>Create 1 application</li>
          <li>Get a job</li>
        </ol>
        <p>
          So I accomplished the first two. I had already started the two books
          that I ended up finishing. The books were: Emotional Intelligence: Why
          It Can Matter More Than IQ by Daniel Goleman and Ten Arguments for
          Deleting Your Social Media Accounts Right Now by Jaron Lanier.
        </p>
        <p>
          For someone who is a bit lacking in emotional intelligence, and has a
          decent level of IQ, this book really resonated with me. Being on the
          job hunt I've been able to observe what it actually takes to get a
          job, and IQ is probably low on the requirements. It's about resilience
          and confidence, in essence. This book has allowed me to see more value
          in emotional intelligence. I had already deduced from the experiences
          of people around me, that it serves them well, and helps them land
          jobs. This book gave me a clearer idea of the characteristics it takes
          to be successful in various areas like work and relationships.
        </p>
        <p>
          Jaron Lanier's book also had some really good points. I think I was
          introduced to him around the time I watched The Social Dilemma. I
          deleted Facebook after that film, and I'm wondering if Twitter should
          be the next to go. The thing is, I'm also using it to look for jobs. I
          love <a href="http://www.minimizedistraction.com/">this</a>{" "}
          presentation by Tristan Harris, who urged Google while he was there (I
          don't know if he still is) to minimize distracting users.
        </p>
        <p>
          So I finally have a little{" "}
          <a href="https://simplechat-demo.netlify.app/">demo</a> to share for
          SimpleChat. At the time of writing this post, it isn't perfect, but
          I'm really glad that I've been able to create a chat application that
          updates real-time across all user devices. For the longest time, I
          thought it was a really tough project to take on, but I managed to
          push my way through and create a little demo. For now, anyone can send
          messages anonymously and delete anyone else's messages.
        </p>
        <StaticImage
          src="../../images/simplechat-demo.png"
          alt="SimpleChat App"
        />

        <p>
          Unfortunately, I couldn't accomplish my third goal of getting a job
          for the month. That will be one of my goals for October. Let's hope I
          make some progress on that front.
        </p>
      </article>
    </Layout>
  );
};

export default SeptemberGoals;
