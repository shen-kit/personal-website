import classes from "./Projects.module.css";
import Heading from "../components/Heading.js";

function Projects() {
  return (
    <div>
      <Heading number="2" text="Projects" />

      <section className={classes.section}>
        <iframe
          src="https://www.youtube.com/embed/k_4rm1xgY7Y?si=4ikpg4Zwik5Wk0Fn"
          title="yt video player finance tracker"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <div>
          <h2 className={classes.h2}>TUI Finance Tracker | 2025</h2>
          <p>
            This finance tracker is unique as it runs in the terminal with a
            terminal user interface (TUI). It was made using{" "}
            <strong>Golang</strong> and the{" "}
            <a href="https://github.com/rivo/tview/">tview</a> package, with a{" "}
            <strong>sqlite database</strong> backend. Features include recording
            income, expenditure and investments, custom categories, displaying
            investment returns with data from Yahoo Finance, and dashboard
            summaries. All CRUD database operations are supported, and it is
            navigable using Vim keybindings. <br></br>
            <br></br>
            This project originated from me not wanting to open Google Sheets to
            track my finances, alongside wanting the power of SQL to investigate
            where my money is going. Apparently others have had the same wish as{" "}
            <strong>
              the project gained several stars on{" "}
              <a href="https://github.com/shen-kit/finance-tracker-tui">
                GitHub
              </a>
            </strong>
            , with users requesting features such as custom scripting
            capabilities and configuration files. Although the project is still
            in its early days, I hope to turn it into a community project in the
            future.
          </p>
        </div>
      </section>

      <section className={classes.section}>
        <div>
          <h2 className={classes.h2}>KitKat Language | 2024</h2>
          <p>
            I created my own high-level, statically and strongly typed, compiled
            programming language using <strong>Haskell</strong>. It compiles to{" "}
            <strong>LLVM IR</strong> (a processor-independent intermediate
            representation), then uses <tt>llc</tt> and <tt>gcc</tt> to link to
            the standard C libraries and generate machine code. Functionality
            includes integers/strings/booleans, conditionals (if/else if/else,
            while loops), boolean logic and integer arithmetic, print
            statements, and variables for all data types.
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/Wib5VxiJf9Y?si=bPnEf_tJ4oiLJxiQ"
          title="yt video player kitkat language"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </section>

      <section className={classes.section}>
        <iframe
          src="https://www.youtube.com/embed/8KbLRf_oH9I?si=rSikTsuopVh9cWog"
          title="yt video player waypoint"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <div>
          <h2 className={classes.h2}>Waypoint | 2024</h2>
          <p>
            Waypoint is a project management tool for teams following the Scrum
            methodology, created with <strong>ReactTS</strong> and{" "}
            <strong>MongoDB</strong>, and containerised with{" "}
            <strong>Docker</strong>. Features include admin and developer
            accounts with JTW authentication, the ability to manage users, the
            product backlog, and multiple sprints, as well as a kanban and list
            view for each sprint the current developer is assigned to.
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
            the phone down. It was made using <strong>Flutter and Dart</strong>{" "}
            (source code available on{" "}
            <a href="https://github.com/shen-kit/heads-up-game">github</a>).
          </p>
        </div>
        <iframe
          src="https://youtube.com/embed/hdXAF2hohBY"
          title="yt video player hia's up"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </section>

      <section className={classes.section}>
        <iframe
          src="https://www.youtube.com/embed/vpSjNAjYRa4?controls=1&amp;start=39"
          title="yt video player bujo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
        <div>
          <h2 className={classes.h2}>Bujo App | 2021</h2>
          <p>
            This was my final project for the CS50 Introduction to Computer
            Science course, written in <strong>HTML, CSS and Javascript</strong>
            , and using the <strong>Electron</strong> framework. Features
            include a daily planner with tasks and events, a monthly calendar,
            and a habit tracker which integrates with the calendar. This project
            taught me web-development skills, how to use npm, how to write
            responsive apps, and the importance of creating a thorough plan
            before starting to code. The source code is available on{" "}
            <a href="https://github.com/shen-kit/bujoApp">github</a>.
          </p>
        </div>
      </section>

      <section>
        <h2 className={classes.h2}>CLI Password Manager | 2023</h2>
        <p className={classes.lastParagraph}>
          I've made several password managers over the years, the most recent
          one in 2023 in <strong>Python</strong> using the Cryptography library
          for security. I decided to make it to learn the{" "}
          <strong>basics of cryptography</strong> and to refresh my knowledge of
          databases (I used <strong>sqlite</strong>). Additionally, I enjoy
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
          way to teach myself the basics of <strong>ReactJS</strong> and how to
          deploy a website online. No templates were used, and all of the code
          for this website was written myself. The source code can be found on{" "}
          <a href="https://github.com/shen-kit/personal-website">github</a>.
        </p>
      </section>

      <section className={classes.section}>
        <div>
          <h2 className={classes.h2}>Life is Short | 2020</h2>
          <p>
            In 2020 I challenged myself to make and release a game to the public
            in only 4 weeks. This survival game was the result — it was made in{" "}
            <strong>Unity3D using C#</strong> and features a flexible weapon
            system and various enemies, as well as some unique mechanics. While
            it is far from polished, I was extremely happy what I accomplished
            in 4 weeks, and this video documents the process of making the game.
            It has over 150 downloads, and can be found{" "}
            <a href="https://sk-studios.itch.io/life-is-short">here</a>.
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/k9yz5tZ35-k"
          title="yt video player life is short"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </section>

      <section className={classes.section}>
        <iframe
          frameborder="0"
          title="yt video player stealth"
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
            over 3000 plays online (across multiple websites) and 100+
            downloads. It was made in <strong>Unity3D using C#</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Projects;
