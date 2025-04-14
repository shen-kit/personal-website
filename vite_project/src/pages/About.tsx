import handstand from "../assets/oahs.jpg"

function About() {
  return (
    <div>
      <section>
        <p>
          Shen-Kit graduated from Perth Modern School in 2022 with an ATAR of
          99.95, and is currently studying Software Engineering at Monash
          University. Throughout highschool he took part in many extracurricular
          activities including music, basketball, volleyball, community service
          soup kitchens, and academic competitions. He loves researching and
          experimenting with productivity in the hopes of achieving as much as
          he possibly can. This has allowed him to excel academically while
          simultaneously playing in 6 ensembles, teaching himself to code,
          starting a YouTube channel (with 500K views), regularly making time
          for social activities, and working out to improve his fitness and
          health.
        </p>
      </section>
      <div>
        <img src={handstand} alt="me doing a handstand" />
      </div>
    </div>
  );
}

export default About;

