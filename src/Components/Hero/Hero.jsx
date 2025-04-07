import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <span className={styles.hero_text}>
        <h1 className={styles.hero_text_h1}> Hello my name is Christopher</h1>
        <p className={styles.sub_p}>
          I am trying to pursue a new career in web development as a self-taught
          developer.
        </p>
        <span className={styles.sub_p}>Website created using React</span>
      </span>
    </div>
  );
};

export default Hero;
