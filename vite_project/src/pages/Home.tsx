import headshot from "../assets/headshot.jpg"

function Home() {
  return (
    <div>
      <section>
        <h2>Hey there, I'm</h2>
        <h1>Shen-Kit Hia.</h1>
        <p>I’m currently studying Software Engineering at Monash University, and am passionate about coding, productivity, and fitness.</p>
        <div>
          <a href='https://www.linkedin.com/in/shen-kit-hia/'></a>
          <a href='https://github.com/shen-kit'></a>
          <a href='https://www.youtube.com/@PracticalProgramming'></a>
          <a href='https://www.instagram.com/shenk1t'></a>
        </div>
      </section>
      <img src={headshot} />
    </div>
  );
}

export default Home;
