import classes from './Projects.module.css';
import Heading from '../components/Heading.js';
import pwdManagerImg1 from '../assets/pwd-manager-1.png';

function Projects() {
  return (
    <div>
      <Heading number='2' text="Projects" />
      <h2>Bujo App (2021)</h2>
      <p>I made a digital bullet journal in 2021 as my final project for the CS50 Introduction to Computer Science course. It was made with HTML, CSS and Javascript, using the Electron framework to make it run natively on Windows and Linux. I was inspired to make this as I had been using a physical bullet journal for some time but felt that there were some limitations to writing with pen on paper. Features of this app include a daily planner with a task manager and events which sync with the calendar, a calendar where you can see details about the whole month, and a habit tracker which integrates with the calendar. This project taught me web-development skills, how to use npm as a package manager, how to write responsive apps, and the importance of creating a thorough plan before starting to write any code.</p>
      <center>
        <iframe width="480" height="270" src="https://www.youtube.com/embed/vpSjNAjYRa4?controls=1&amp;start=39" title="Bujo App Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </center>
       
      <h2>Life is Short (2020)</h2>
      <p>From 2017-2020 I started making a ton of mini games but only finished a handful, so I challenged myself to make and release a game to the public in only 4 weeks (while school was on too). It was made in Unity and includes a flexible weapon system and various enemies which were made using finite state machines. While it is far from polished, I was extremely happy with the progress that I made in 4 weeks, and below is a video that I made documenting the process of making the game. I learnt a ton about planning, thinking abstractly, and the process of making a product ready to be realeased to the public.</p>
      <center>
        <iframe width="480" height="270" src="https://www.youtube.com/embed/k9yz5tZ35-k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </center>

      <h2>CLI Password Manager (2023)</h2>
      <img className={classes.horizontal} src={pwdManagerImg1} alt='password manager screenshot' />
      <p className={classes.horizontal}>I've made several password managers over the years, the most recent one in 2023 in Python using the Cryptography library for security. I decided to make it to learn a the basics of cryptography and to refresh my knowledge of databases (I used sqlite3). Additionally, I enjoy working in the terminal so didn't want a GUI password manager. Functionality includes setting a master password which is then encrypted, adding/editing/deleting new services, listing all stored services, and resetting the database. While this wasn't very challenging to build, it is the project which I use the most in my daily life.</p>
    </div>
  );
}

export default Projects;
