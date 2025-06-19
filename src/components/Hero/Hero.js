import TypeWriter from "../TypeWriter/TypeWriter";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.welcome}>Welcome to My Portfolio</h1>
          <p className={styles.subtitle}>
            Hi! I'm <span>Anmar Sammour</span>,<br />
            <TypeWriter
              texts={[
                "Frontend Developer",
                "Mobile App Developer",
                "Web Developer",
              ]}
              speed={200}
              deleteSpeed={100}
              delay={1000}
            />
          </p>
          <p className={styles.description}>
            Hello Everyone! I have experience in web development and love
            creating modern, responsive websites.
          </p>
          <a href="#contact" className={styles.connectBtn}>
            <span>Let's Connect</span>
            <div className={styles.arrowCircle}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
