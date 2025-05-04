import { Link } from "react-router-dom";
import styles from "../CSS/Navbar.module.css"; //imports css styles

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to={`/`}>Home</Link>
        </li>
        <li className={styles.li}>
          <Link to={`/PageRouter`}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
