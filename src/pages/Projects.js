import classes from "./Projects.module.css";
import Heading from "../components/Heading.js";

function Projects() {
  return (
    <div>
      <Heading number="2" text="Projects" />

      <section className={classes.section}>
        <iframe
          src="https://www.youtube.com/embed/Wib5VxiJf9Y?si=bPnEf_tJ4oiLJxiQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div>
          <h2 className={classes.h2}>KitKat Language | 2024</h2>
          <p>
            I created my own high-level, statically and strongly typed, compiled
            programming language using Haskell. It compiles to LLVM IR (a
            processor-independent intermediate representation), then uses{" "}
            <tt>llc</tt> and <tt>gcc</tt> to link to the standard C libraries
            and generate machine code. Functionality includes
            integers/strings/booleans, conditionals (if/else if/else, while
            loops), boolean logic and integer arithmetic, print statements, and
            variables for all data types.
          </p>
        </div>
      </section>
      <section className={classes.section}>
        <div>
          <h2 className={classes.h2}>Hia's Up | 2023</h2>
          <p>
            Inspired by the game{" "}
            <a href="https://play.google.com/store/apps/details?id=com.wb.headsup&hl=en_AU&gl=US">
              Head's Up!
            </a>
            , I created <i>Hia's Up!</i> as a game that we could play at family
            gatherings. The game is like celebrity heads, where the player has
            to guess what is on the screen by asking everyone else questions. If
            they guess it right, they tilt the phone up, and to skip, they tilt
            the phone down. It was made using Flutter and Dart (source code
            available on{" "}
            <a href="https://github.com/shen-kit/heads-up-game">github</a>).
          </p>
        </div>
        <iframe
          src="https://youtube.com/embed/hdXAF2hohBY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
      <section className={classes.section}>
        <iframe
          src="https://www.youtube.com/embed/vpSjNAjYRa4?controls=1&amp;start=39"
          title="Bujo App Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <h2 className={classes.h2}>Bujo App | 2021</h2>
          <p>
            This was my final project for the CS50 Introduction to Computer
            Science course, written in HTML, CSS and Javascript, and using the
            Electron framework. Features include a daily planner with tasks and
            events, a monthly calendar, and a habit tracker which integrates
            with the calendar. This project taught me web-development skills,
            how to use npm, how to write responsive apps, and the importance of
            creating a thorough plan before starting to code. The source code is
            available on{" "}
            <a href="https://github.com/shen-kit/bujoApp">github</a>.
          </p>
        </div>
      </section>

      <section className={classes.section}>
        <div>
          <h2 className={classes.h2}>Life is Short | 2020</h2>
          <p>
            In 2020 I challenged myself to make and release a game to the public
            in only 4 weeks. This survival game was the result - it was made in
            Unity and features a flexible weapon system and various enemies, as
            well as some unique mechanics. While it is far from polished, I was
            extremely happy what I accomplished in 4 weeks, and this video
            documents the process of making the game. It is free to download{" "}
            <a href="https://sk-studios.itch.io/life-is-short">here</a>.
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/k9yz5tZ35-k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>

      <section className={classes.section}>
        <iframe
          frameborder="0"
          src="https://itch.io/embed/600889?bg_color=252525&amp;fg_color=ffffff&amp;border_color=111111"
          width="552"
          height="167"
        >
          <a href="https://sk-studios.itch.io/stealth">Stealth by SK Studios</a>
        </iframe>
        <div>
          <h2 className={classes.h2}>Stealth | 2020</h2>
          <p>
            From 2017-2020, I made many games. This game is relatively simple
            compared to Life is Short (above), but is my most popular one, with
            over 3000 plays online (across multiple websites) and 100 downloads.
            It was made in Unity3D using C#.
          </p>
        </div>
      </section>

      <section>
        <h2 className={classes.h2}>CLI Password Manager | 2023</h2>
        <p className={classes.lastParagraph}>
          I've made several password managers over the years, the most recent
          one in 2023 in Python using the Cryptography library for security. I
          decided to make it to learn the basics of cryptography and to refresh
          my knowledge of databases (I used sqlite). Additionally, I enjoy
          working in the terminal so didn't want a GUI password manager.
          Functionality includes setting a master password which is then
          encrypted, adding/editing/deleting new services, listing all stored
          services, and resetting the database. While this wasn't very
          challenging to build, it is the project which I use the most in my
          daily life.
        </p>
      </section>

      <section>
        <h2 className={classes.h2}>Personal Website | 2023</h2>
        <p className={classes.lastParagraph}>
          Having never created a website before, I decided to make this one as a
          way to teach myself the basics of ReactJS and how to deploy a website
          online. No templates were used, and all of the code for this website
          was written myself. The source code can be found on{" "}
          <a href="https://github.com/shen-kit/personal-website">github</a>.
        </p>
      </section>
    </div>
  );
}

export default Projects;
