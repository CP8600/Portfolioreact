import React from "react";
import './CSS/Sidebar.css'
const sidebar = () => {
  const items = [
    { routerLink: "", icon: "fal fa-home", label: "Dashboard" },
    { routerLink: "", icon: "fal fa-home", label: "Dashboard" },
    { routerLink: "", icon: "fal fa-home", label: "Dashboard" },
    { routerLink: "", iicon: "fal fa-home", label: "Dashboard" },
  ];

  return (
    <div className="sidenav">
      <div className="logo-container">
        <button className="logon"></button>
        <div className="logo-text">App</div>
        <button className="btn-close"></button>
        <i className="fal fa-times close-icon"></i>
      </div>
    </div>
  );
};

export default sidebar;
