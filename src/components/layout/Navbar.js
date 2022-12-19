import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar() {
  return (
    <header>
      <Link className={classes.logo} to='/'>SK</Link>
      <ul>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to='/achievements'>Achievements</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li className={classes.resume}>Resume</li>
      </ul>
    </header>
  );
}

export default Navbar;
