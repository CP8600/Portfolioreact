// import Hero from "../Components/Hero";
import styles from "../CSS/Home.module.css";
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {" "}
      <section className={styles.hero}>
        <h2 className={styles.h2}>my name is Christopher</h2>
        <p className={styles.hello}>
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
      <section className={styles.middlehero}>
        {" "}
        <h1>something else goes here</h1>
      </section>
      <section className={styles.bottomhero}>
        {" "}
        <h1>something else goes here</h1>
      </section>
    </div>
  );
};

export default Home;
