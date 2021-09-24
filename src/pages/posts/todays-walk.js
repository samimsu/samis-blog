import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const TodaysWalk = () => {
  return (
    <Layout pageTitle="Today's Walk">
      <h4>September 24, 2021</h4>
      <article>
        <p>
          I wasn't sure what to write about today, so I decided to write about
          my walk. I'll share a few pictures too.
        </p>
        <p>
          I did 10,000 steps today. I went to the mall and streamed on Twitch
          from there. I just wanted to try it and see how it would go.
        </p>
        <p>
          I always see Teslas on my walk. I walk around this pretty fancy area.
          It always cheers me up to see one. I've never sat in one though. Maybe
          someday. Sometimes I wish I could talk to the people that own them and
          ask about their day job. I'm not that bold yet.
        </p>
        <p>
          I liked the weather today. There was overcast, and it looked beautiful
          even though it was a bit dusty. It's better than having the scorching
          sun.
        </p>
        <p>So here are some pictures from today.</p>

        <StaticImage src="../../images/20210924/1.jpg" alt="Image 1" />
        <StaticImage src="../../images/20210924/2.jpg" alt="Image 2" />
        <StaticImage src="../../images/20210924/3.jpg" alt="Image 3" />
        <StaticImage src="../../images/20210924/4.jpg" alt="Image 4" />
        <StaticImage src="../../images/20210924/5.jpg" alt="Image 5" />
        <StaticImage src="../../images/20210924/6.jpg" alt="Image 6" />
        <StaticImage src="../../images/20210924/7.jpg" alt="Image 7" />
        <StaticImage src="../../images/20210924/8.jpg" alt="Image 8" />
        <StaticImage src="../../images/20210924/9.jpg" alt="Image 9" />
        <StaticImage src="../../images/20210924/10.jpg" alt="Image 10" />
        <StaticImage src="../../images/20210924/11.jpg" alt="Image 11" />
        <StaticImage src="../../images/20210924/12.jpg" alt="Image 12" />
      </article>
    </Layout>
  );
};

export default TodaysWalk;
