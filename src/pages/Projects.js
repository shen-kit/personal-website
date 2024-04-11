import classes from './Projects.module.css';
import Heading from '../components/Heading.js';

function Projects() {
  return (
    <div>

      <Heading number='2' text="Projects" />

      <section className={classes.section}>
        <div>
          <h2 className={classes.h2}>Hia's Up | 2023</h2>
          <p>
            Inspired by the game <a href='https://play.google.com/store/apps/details?id=com.wb.headsup&hl=en_AU&gl=US'>Head's Up!</a>,
            I created <i>Hia's Up!</i> as a game that we could play at family gatherings. The game is like celebrity heads, where the
            player has to guess what is on the screen by asking everyone else questions. If they guess it right, they tilt the phone up,
            and to skip, they tilt the phone down. It was made using Flutter and Dart (source code available on <a href='https://github.com/shen-kit/heads-up-game'>github</a>).
          </p>
        </div>
        <iframe src="https://youtube.com/embed/hdXAF2hohBY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </section>
      <section className={classes.section}>
        <iframe src="https://www.youtube.com/embed/vpSjNAjYRa4?controls=1&amp;start=39" title="Bujo App Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div>
          <h2 className={classes.h2}>Bujo App | 2021</h2>
          <p>
            This was my final project for the CS50 Introduction to Computer Science course, written in HTML, CSS and Javascript, and using
            the Electron framework. Features include a daily planner with tasks and events, a monthly calendar, and a habit tracker which
            integrates with the calendar. This project taught me web-development skills, how to use npm, how to write responsive apps, and
            the importance of creating a thorough plan before starting to code. The source code is available on <a href='https://github.com/shen-kit/bujoApp'>github</a>.
          </p>
        </div>
      </section>

      <section className={classes.section}>
        <div>
          <h2 className={classes.h2}>Life is Short | 2020</h2>
          <p>
            In 2020 I challenged myself to make and release a game to the public in only 4 weeks. This survival game was the result -  it was made
            in Unity and features a flexible weapon system and various enemies, as well as some unique mechanics. While it is far from polished, I
            was extremely happy what I accomplished in 4 weeks, and this video documents the process of making the game.
          </p>
        </div>
        <iframe src="https://www.youtube.com/embed/k9yz5tZ35-k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </section>

      <section>
        <h2 className={classes.h2}>CLI Password Manager | 2023</h2>
        <p className={classes.lastParagraph}>
          I've made several password managers over the years, the most recent one in 2023 in Python using
          the Cryptography library for security. I decided to make it to learn the basics of cryptography and to refresh my knowledge of databases
          (I used sqlite). Additionally, I enjoy working in the terminal so didn't want a GUI password manager. Functionality includes setting a
          master password which is then encrypted, adding/editing/deleting new services, listing all stored services, and resetting the database.
          While this wasn't very challenging to build, it is the project which I use the most in my daily life.
        </p>
      </section>

      <section>
        <h2 className={classes.h2}>Personal Website | 2023</h2>
        <p className={classes.lastParagraph}>
          Having never created a website before, I decided to make this one as a way to teach myself the basics of ReactJS and how to
          deploy a website online. No templates were used, and all of the code for this website was written myself. The source code
          can be found on <a href='https://github.com/shen-kit/personal-website'>github</a>.
        </p>
      </section>

    </div>
  );
}

export default Projects;
