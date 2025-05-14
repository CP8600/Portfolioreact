// import Hero from "../Components/Hero";
import styles from "../CSS/Home.module.css";
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {" "}
      <section className={styles.hero}>
        <h2 className={styles.h2}>My name is Christopher</h2>

        <p className={styles.p}>
          I am trying to pursue a new career in web development as a self-taught
          developer.
          <br /> <br />
          I am currently working on this portfolio website to showcase my skills
          and projects. <br /> <br />
          Website created using React
        </p>
        {/* <p className={styles.construction}>Currently Under Construction</p> */}
        {/* <p className={styles.construction}>Website created using React</p> */}
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
      <section className={styles.middlehero}>
        {" "}
        <p className={styles.p}>
          I currently have been working as a forklift driver for Heartland
          Coca-Cola. I have always had a passion for website building and
          programming.
        </p>
      </section>
      <section className={styles.bottomhero}>
        {" "}
        <p className={styles.p}>
          I hope to find a new career path to take me to new career heights as
          well as adding to my progamming and website building talent.
        </p>
      </section>
    </div>
  );
};

export default Home;
