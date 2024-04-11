import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.center}>
      <section>
        <h2 className={classes.headingLine1}>Hey there, I'm</h2>
        <h1 className={classes.headingLine2}>Shen-Kit Hia.</h1>
        <p>I’m currently studying Software Engineering at Monash University, and am passionate about coding, productivity, and fitness.</p>
        <div className={classes.iconRow}>
          <a href='https://www.linkedin.com/in/shen-kit-hia/' className='fa fa-linkedin'></a>
          <a href='https://github.com/shen-kit' className='fa fa-github'></a>
          <a href='https://www.youtube.com/@PracticalProgramming' className='fa fa-youtube-play'></a>
          <a href='https://www.instagram.com/shenk1t' className='fa fa-instagram'></a>
        </div>
      </section>
      <img className={classes.myImg} src="https://images.thewest.com.au/publication/C-9200008/b0ffdf810ee5e0ea973c4f8fe05fb1d9a6278474-4x3-x222y0w3556h2667.jpg?imwidth=810&impolicy=wan_v3"/>
    </div>
  );
}

export default Home;
