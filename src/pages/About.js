import classes from './About.module.css';
import Heading from '../components/Heading.js';

import image from '../assets/oahs.jpg';

function About() {
  return (
    <div className={classes.center}>
      <section>
        <Heading number='0' text='About Me' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor iaculis sapien, quis fringilla ex euismod vitae. Etiam sit amet blandit erat. Proin id quam quis sapien accumsan facilisis eu nec velit.</p>
        <br/>
        <p>Proin dui turpis, elementum sed dignissim et, euismod ac massa.</p>
      </section>
      <div>
        <img className={classes.myImg} src={image} alt='image of me doing a handstand' />
      </div>
    </div>
  );
}

export default About;
