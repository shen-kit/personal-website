import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.center}>
      <section>
        <h2>Hey there, I'm</h2>
        <h1>Shen-Kit Hia.</h1>
        <p>I’m currently studying Electrical Engineering and Computer Science, and am passionate about coding, productivity, and fitness.</p>
        <div className={classes.iconRow}>
          <a href='https://www.instagram.com/shenk1t' className='fa fa-instagram'></a>
          <a href='https://www.youtube.com/@PracticalProgramming' className='fa fa-youtube-play'></a>
          <a href='https://github.com/shen-kit' className='fa fa-github'></a>
        </div>
      </section>
      <img src="https://images.thewest.com.au/publication/C-9200008/b0ffdf810ee5e0ea973c4f8fe05fb1d9a6278474-4x3-x222y0w3556h2667.jpg?imwidth=810&impolicy=wan_v3"/>
    </div>
  );
}

export default Home;
