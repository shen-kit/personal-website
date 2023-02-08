import Heading from '../components/Heading.js';
import classes from './Achievements.module.css';

function Achievements() {
  return (
    <div className={classes.center}>
      <Heading number='1' text='Achievements and Awards' />
      <h2>WACE/ATAR</h2>
      <ul className={classes.mainList}>
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
        <li><strong>Chemistry Subject Exhibition</strong> (top student in the state)</li>
        <li><strong>General Exhibition</strong> (14th in the state)</li>
      </ul>

      <h2>School Awards</h2>
      <ul className={classes.mainList}>
        <li>Academic Excellence Award</li>
        <li>Top 3 in Chemistry, Mathematics Methods, Mathematics Specialist, and Physics</li>
        <li>Platinum House Award (achieved in Year 10)</li>
      </ul>

      <h2>Co-Curricular Activities</h2>
      <ul>
        <li>Played in the Honours Division for interschool volleyball (2022)</li>
        <li>Formed a barbershop quartet with 3 friends, we performed at primary schools and eventually at our own graduation ceremony</li>
        <li>Won 2 ICAS Science medals in 2019 & 2021 (top in the state)</li>
        <li>State finalist in the Microsoft AI For Good Challenge (2020)</li>
      </ul>

      <h2>University Scholarship Offers</h2>
      <ul className={classes.mainList, classes.lastList}>
        <li><strong>UNSW</strong>: Scientia Scholarship</li>
        <li><strong>University of Melbourne</strong>: Chancellor's Scholarship</li>
        <li><strong>Monash</strong>: Sir John Monash Scholarship for Distinction</li>
        <li><strong>UWA</strong>: Lawrence Scholarship</li>
        <li><strong>Curtin</strong>: Top Excellence Scholarship</li>
      </ul> 
    </div>
  )
}

export default Achievements;

