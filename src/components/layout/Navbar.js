import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import resume from "../../assets/resume.pdf";

function Navbar() {
  return (
    <header>
      <Link className={classes.logo} to="/personal-website">
        SK
      </Link>
      <ul>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/achievements">Achievements</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
