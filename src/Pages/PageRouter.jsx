import styles from "../CSS/PageRouter.module.css"; // imports CSS styles
import { Link } from "react-router-dom";
const PageRouter = () => {
  return (
    <div className={styles.router_container}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to={"/music"}>Spotify</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/dragonball"}>Dragonball</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/pokemon"}>Pokemon</Link>
        </li>
        <li className={styles.li}></li>
        {/* <li className={styles.li}>
          <Link to={"/bookfinder"}>Book Finder</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default PageRouter;
