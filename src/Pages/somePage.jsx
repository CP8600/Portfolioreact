import styles from "../CSS/somepage.module.css";
import SomeLinks from "../Components/someLinks";
import Background_AdobeDrive from "../Components/Background";
const Somewebsite = () => {
  return (
    <div className={styles.page}>
      <Background_AdobeDrive />
      <section className={styles.mainContainer}>
        <h2 className={styles.h2Drive}>Drive your dream today</h2>
      </section>
      <div className={styles.linkContainer}>
        <SomeLinks
          text="Home"
          link={"https://example.com"}
          className={styles.secondLink}
        />
        <SomeLinks
          text="About"
          link={"https://example.com"}
          className={styles.thirdLink}
        />{" "}
        <SomeLinks
          text="Contact"
          link={"https://example.com"}
          className={styles.firstLink}
        />{" "}
      </div>
    </div>
  );
};

export default Somewebsite;
