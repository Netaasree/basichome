import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item active">Home</li>
        <li className="navbar-item">Dashboards</li>
        <li className="navbar-item">Segments</li>
        <li className="navbar-item">Account</li>
        <li className="navbar-item">Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;
