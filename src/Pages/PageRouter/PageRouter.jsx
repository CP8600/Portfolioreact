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
          <Link to={"/Todo"}>Todo List</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/Music"}>Spotify Clone</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/Dragonball"}>Dragonball</Link>
        </li>
      </ul>
    </div>
  );
};

export default PageRouter;
