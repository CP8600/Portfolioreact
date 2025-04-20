import { Link } from "react-router-dom";
import styles from "../CSS/Navbar.module.css"; //imports css styles

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_ul}>
        <li className={styles.navbar_li}>
          <Link to={`/`} className={styles.a}>
            Home
          </Link>
        </li>
        <li className={styles.navbar_li}>
          <Link to={`/PageRouter`} className={styles.a}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
