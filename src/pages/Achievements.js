import Heading from '../components/Heading.js';
import classes from './Achievements.module.css';

function Achievements() {
  return (
    <div className={classes.center}>
      <Heading number='1' text='Achievements and Awards' />

      <h2>University</h2>
      <ul className={classes.mainList}>
        <li><strong>1st place</strong> in the Monash Association of Coding UI/UX Design Hackathon (2024)</li>
        <li>Currently maintaining a perfect GPA and 93 WAM</li>
      </ul>

      <h2>WACE / ATAR</h2>
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
        <li>Platinum House Award (achieved in 2020)</li>
      </ul>

      <h2>Co-Curricular</h2>
      <ul>
        <li>Played in the Honours division for interschool volleyball (2022)</li>
        <li><strong>Started a barbershop quartet</strong> with 3 friends, we performed at primary schools and eventually at our own graduation ceremony (2022)</li>
        <li>Won <strong>2 ICAS Science medals</strong> in 2019 & 2021 (top in the state)</li>
        <li>State finalist in the Microsoft AI For Good Challenge (2020)</li>
        <li>Completed over <strong>110 hours of community service</strong> during senior highschool (2020-2022)</li>
        <li>Section leader in the Symphony Orchestra and Senior Wind Orchestra (2022)</li>
        <li>Member of the Symphony Orchestra, Senior Wind Orchestra, Boys Chamber Choir, Mixed Chamber Choir, and Chorale (varied from 2019-2022)</li>
      </ul>

      <h2>University Scholarship Offers</h2>
      <ul className={classes.mainList + " " + classes.lastList}>
        <li><strong>UNSW</strong>: Scientia Scholarship</li>
        <li><strong>University of Melbourne</strong>: Chancellor's Scholarship</li>
        <li><strong>Monash University</strong>: Sir John Monash Scholarship for Distinction</li>
        <li><strong>UWA</strong>: Lawrence Scholarship</li>
        <li><strong>Curtin University</strong>: Top Excellence Scholarship</li>
      </ul> 

    </div>
  )
}

export default Achievements;

