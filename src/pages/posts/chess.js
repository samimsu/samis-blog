import * as React from "react";
import Layout from "../../components/layout";
import stats from "../../assets/chess.com stats.png";

const Chess = () => {
  return (
    <Layout pageTitle="Chess">
      <h4>September 18, 2021</h4>
      <article>
        <p>
          I played a bit of chess growing up but never regularly. Until a few
          years ago, I had no idea about chess theory and didn't know about the{" "}
          <a href="https://en.wikipedia.org/wiki/En_passant">en passant</a>{" "}
          rule.
        </p>
        <p>
          I became obsessed with chess and started consuming a lot of chess
          content, mainly through YouTube videos. I'd watch lectures and other
          content, and gradually my level started increasing. Some of the
          content I've consumed has been from the St Louis chess channel, Ben
          Finegold, Eric Rosen, Hikaru, Magnus, Levy Rozman, and chessbrah.
        </p>
        <p>
          I started playing on both <a href="https://lichess.org/">Lichess</a>{" "}
          and <a href="https://www.chess.com/">chess.com</a>, but now, I've
          mostly switched to chess.com. Here are my stats on{" "}
          <a href="https://www.chess.com/member/sami7em">chess.com</a> as of
          now:
        </p>
        <img src={stats} alt="my chess.com stats" />
        <p>
          That's 6500+ games. My puzzle rush rating isn't there, but my best is
          45 for puzzle rush survival mode. I've mostly played rapid, blitz, and
          bullet chess. My highest rapid rating is 1644, so I've dropped off
          quite a bit there. I shouldn't play bullet because I think I lose
          extra time even on premoves due to my internet connection.{" "}
        </p>
        <p>
          I wanted to become a grandmaster. I believe the chances of that are
          little to none now because of the amount of work required.
          Nonetheless, I have that little ray of hope. That may be naive of me.
          Sometimes it's good to be a little delusional.
        </p>
        <p>
          I've read parts of a few books, studied some games, and tried to
          memorize some of them but can only recall the{" "}
          <a href="https://en.wikipedia.org/wiki/Opera_Game">opera game</a>{" "}
          right now.
        </p>
        <p>
          Since I've quit YouTube, most of my chess consumption has been through
          Twitch streams, and even that is very low. I've reduced a lot of it
          because I'm trying to get my priorities straight. Once I have a steady
          income, I hope I can commit to chess improvement.
        </p>
        <p>
          I know it may seem like I'm trying to do too many things at once, but
          I believe I should try everything that excites me. Then perhaps I can
          narrow my focus and try to achieve mastery in one or a few things.
        </p>
      </article>
    </Layout>
  );
};

export default Chess;
