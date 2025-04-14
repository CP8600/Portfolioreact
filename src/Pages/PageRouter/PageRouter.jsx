import styles from "../PageRouter/PageRouter.module.css";

import { Link } from "react-router-dom";
const PageRouter = () => {
  return (
    <div className={styles.router_container}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to={`/bubbles`}>Bubbles</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/todo"}>Todo List</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/music"}>Spotify Clone</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/dragonball"}>Dragonball</Link>
        </li>
        {/* <li className={styles.li}>
          <Link to={"/bookfinder"}>Book Finder</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default PageRouter;
