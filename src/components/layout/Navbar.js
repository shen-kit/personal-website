import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar() {
  return (
    <header>
      <Link className={classes.logo} to='/personal-website'>SK</Link>
      <ul>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to='/achievements'>Achievements</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
      </ul>
    </header>
  );
}

export default Navbar;
