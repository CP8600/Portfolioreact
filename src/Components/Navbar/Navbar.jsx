import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [navClassName, setNavClassName] = useState("navbar-top");

  const handleNavChange = () => {
    setNavClassName((prevClass) =>
      prevClass === "navbar-top" ? "navbar-left" : "navbar-top"
    );
    console.log("changed");
    console.log(navClassName);
  };

  return (
    <nav className={`navbar ${navClassName}`}>
      <button className="navbar-switch-btn" onClick={handleNavChange}>
        <h3>Change Nav</h3>
      </button>
      <ul className="navbar-ul">
        <li className="navbar-li">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="navbar-li">
          <Link to={`/PageRouter`}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
