import * as React from 'react';
import Layout from '../../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

function SimpleChat() {
  return (
    <Layout pageTitle="SimpleChat">
      <h4>September 26, 2021</h4>
      <article>
        <p>
          I've started yet another project. I hope I finish this one. I've
          always wanted to create a chat application, and this time I'm giving
          it a real go. Here's what the frontend looks like for now.
        </p>
        <StaticImage
          src="../../images/simplechat-ss.png"
          alt="SimpleChat frontend"
        />
        <p>
          I'm trying to use Firebase for the cloud messaging stuff. I still
          haven't figured it out. I had a goal to finish a project this month,
          and instead of continuing a previous one, I've decided to start a new
          one.
        </p>
        <p>
          I want to use as few libraries and tools as possible. Maybe I could
          create a tutorial to help others replicate it.
        </p>
        <p>
          The other project was a football match scoreboard app. It would have
          just been for Manchester United's games. I wanted the scoreboard to
          match the one inside Old Trafford and update live.
        </p>
        <StaticImage
          src="../../images/scoreboard-old-trafford.jpg"
          alt="Old Trafford Scoreboard"
        />
        <StaticImage
          src="../../images/scoreboard-ss.png"
          alt="Scoreboard App"
        />
        <p>
          I stopped because I didn't have the energy to figure out the API. I
          found a good one, but I didn't quite test it out for live matches. I
          could probably still go back to this project. Perhaps after
          SimpleChat.
        </p>
        <p>
          P.S. I walked 10,000+ steps again today. I think it's a thing now.
        </p>
      </article>
    </Layout>
  );
}

export default SimpleChat;
