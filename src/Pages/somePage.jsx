import styles from "../CSS/somepage.module.css";
import SomeLinks from "../Components/someLinks";

const Somewebsite = () => {
  return (
    <div className={styles.page}>
      <h1>hello</h1>

      <div className={styles.linkContainer}>
        <SomeLinks
          text="soasdfnk"
          link={"https://example.com"}
          className={styles.secondLink}
        />
        <SomeLinks
          text="soasdfnk"
          link={"https://example.com"}
          className={styles.thirdLink}
        />{" "}
        <SomeLinks
          text="soasdfnk"
          link={"https://example.com"}
          className={styles.firstLink}
        />{" "}
      </div>
    </div>
  );
};

export default Somewebsite;
