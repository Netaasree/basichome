import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-toggle">
        <span className="menu-icon"></span>
      </button>
      <ul className="sidebar-menu">
        <li className="sidebar-item active">
          <i className="icon home-icon"></i> Home
        </li>
        <li className="sidebar-item">
          <i className="icon dashboard-icon"></i> Dashboards
        </li>
        <li className="sidebar-item">
          <i className="icon segment-icon"></i> Segments
        </li>
        <li className="sidebar-item">
          <i className="icon account-icon"></i> Account
        </li>
        <li className="sidebar-item">
          <i className="icon settings-icon"></i> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
