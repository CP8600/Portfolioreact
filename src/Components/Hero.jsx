import styles from "../CSS/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <p className={styles.hello}>my name is Christopher</p>
      <p className={styles.sub_p}>
        I am trying to pursue a new career in web development as a self-taught
        developer.
      </p>
      <p className={styles.construction}>Currently Under Construction</p>
      <p className={styles.construction}>Website created using React</p>
      <p className={styles.sub_p}>
        <a
          href="https://github.com/CP8600"
          target="_blank"
          rel="noopener noreferrer"
        >
          View it on GitHub
        </a>
      </p>
    </section>
  );
};

export default Hero;
