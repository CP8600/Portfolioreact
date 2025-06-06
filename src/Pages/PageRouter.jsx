import styles from "../CSS/PageRouter.module.css"; // imports CSS styles
import { Link } from "react-router-dom";
import ScrollingInfo from "../Components/scrollingInfo";
const PageRouter = () => {
  return (
    <div className={styles.router_container}>
      <h4>Site Under Construction</h4>
      <div className={styles.scrollContainer}>
        <ScrollingInfo color="yellow" />
        <ScrollingInfo color="green" />
        <ScrollingInfo color="indigo" />
        <ScrollingInfo color="orange" />
        <ScrollingInfo color="yellow" />
        <ScrollingInfo color="pink" />
        <ScrollingInfo color="purple" />
        <ScrollingInfo color="green" />
      </div>

      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to={"/bubbles"}>Bubbles</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/todo"}>Todo</Link>
        </li>
        {/* <li className={styles.li}>
          <Link to={"/music"}>Spotify</Link>
        </li> */}
        <li className={styles.li}>
          <Link to={"/dragonball"}>Dragonball</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/pokemon"}>Pokemon</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/somepage"}>Car Dealership</Link>
        </li>
      </ul>
    </div>
  );
};

export default PageRouter;
