import classes from './Projects.module.css';
import Heading from '../components/Heading.js';

function Projects() {
  return (
    <div>

      <Heading number='2' text="Projects" />

      <section className={classes.section}>
        <div>
          <h2 className={classes.h2}>Hia's Up (2023)</h2>
          <p>
            Inspired by the game <a href='https://play.google.com/store/apps/details?id=com.wb.headsup&hl=en_AU&gl=US'>Head's Up!</a>, and to avoid paying to access more game modes,
            I created <i>Hia's Up!</i> as a game that we could play at family gatherings. The game is like celebrity heads, where the player has to guess what is on the screen by
            asking everyone else questions. If they guess it right, they tilt the phone up, and to skip, they tilt the phone down. It was made using Flutter and Dart.
          </p>
        </div>
        <iframe src="https://youtube.com/embed/hdXAF2hohBY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </section>
      <section className={classes.section}>
        <iframe src="https://www.youtube.com/embed/vpSjNAjYRa4?controls=1&amp;start=39" title="Bujo App Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div>
          <h2 className={classes.h2}>Bujo App (2021)</h2>
          <p>This was my final project for the CS50 Introduction to Computer Science course, written in HTML, CSS and Javascript, and using the Electron framework. Features include a daily planner with tasks and events, a monthly calendar, and a habit tracker which integrates with the calendar. This project taught me web-development skills, how to use npm, how to write responsive apps, and the importance of creating a thorough plan before starting to write any code.</p>
        </div>
      </section>

      <section className={classes.section}>
        <div>
          <h2 className={classes.h2}>Life is Short (2020)</h2>
          <p>In 2020 I challenged myself to make and release a game to the public in only 4 weeks (while school was on). This survival game was the result -  it was made in Unity and features a flexible weapon system and various enemies, as well as some unique mechanics. While it is far from polished, I was extremely happy what I accomplished in 4 weeks, and this video documents the process of making the game.</p>
        </div>
        <iframe src="https://www.youtube.com/embed/k9yz5tZ35-k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </section>


      <section>
        <h2 className={classes.h2}>CLI Password Manager (2023)</h2>
        <p className={classes.lastParagraph}>
          I've made several password managers over the years, the most recent one in 2023 in Python using
          the Cryptography library for security. I decided to make it to learn the basics of cryptography and to refresh my knowledge of databases
          (I used sqlite3). Additionally, I enjoy working in the terminal so didn't want a GUI password manager. Functionality includes setting a
          master password which is then encrypted, adding/editing/deleting new services, listing all stored services, and resetting the database.
          While this wasn't very challenging to build, it is the project which I use the most in my daily life.
        </p>
      </section>

    </div>
  );
}

export default Projects;
