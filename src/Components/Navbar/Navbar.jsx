import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const [navClassName, setNavClassName] = useState(styles.navbar_top);

  // Handle class name change when the button is clicked
  const handleNavChange = () => {
    setNavClassName((prevClass) =>
      prevClass === styles.nabar_top ? styles.navbar_left : styles.navbar_top
    );
    console.log("Nav class changed");
  };

  // Log the navClassName after it has been updated
  useEffect(() => {}, [navClassName]);

  return (
    <nav className={`${styles.navbar} ${navClassName}`}>
      <button className={styles.navbar_switch_btn} onClick={handleNavChange}>
        <h3 className={styles.h3}>Change Nav</h3>
      </button>
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
