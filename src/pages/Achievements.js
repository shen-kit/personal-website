import Heading from '../components/Heading.js';
import classes from './Achievements.module.css';

function Achievements() {
  return (
    <div className={classes.center}>
      <Heading number='1' text='Achievements and Awards' />
      <ul className={classes.mainList}>
        <li><strong>General Exhibition</strong> (2022)</li>
        <li>Engineer's Award WA (2022)</li>
        <li><strong>Chemistry Subject Exhibition</strong> (2021)</li>
        <li>2 ICAS Science medals (2019 & 2020)</li>
        <li>Accepted to the Australian Chemistry Olympiad Summer School (29 out of over 4000)</li>
        <li>Graduated with a <strong>99.95 ATAR</strong> and final grades of:
          <ul>
            <li>100.0% for Mathematics Specialist</li>
            <li>99.3% for Chemistry</li>
            <li>97.5% for Mathematics Methods</li>
            <li>96.7% for Physics</li>
            <li>87.6% for Economics</li>
            <li>84.3% for Literature</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Achievements;

