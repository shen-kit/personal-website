import classes from './About.module.css';
import Heading from '../components/Heading.js';

import image from '../assets/oahs.jpg';

function About() {
  return (
    <div className={classes.center}>
      <section>
        <Heading number='0' text='About Me' />
        <p className={classes.p}>
             Shen-Kit graduated from Perth Modern School in 2022 with an ATAR of 99.95. Throughout highschool
             he took part in many extracurricular activities, including music, basketball, volleyball, community
             service soup kitchens, and academic competitions. He loves researching and experimenting with
             productivity in the hopes of achieving as much as he possibly can. This has allowed him to excel
             academically while simultaneously spending 10 hours each week at music rehearsals, teaching himself
             how to code, starting a YouTube channel, regularly making time for social activities, and working
             out to improve his fitness and health.
        </p>
      </section>
      <div>
        <img className={classes.myImg} src={image} alt='me doing a handstand' />
      </div>
    </div>
  );
}

export default About;
