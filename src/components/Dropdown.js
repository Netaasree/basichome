import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        <li className="dropdown-item">Option 1</li>
        <li className="dropdown-item">Option 2</li>
        <li className="dropdown-item">Option 3</li>
        <li className="dropdown-item">Option 4</li>
      </ul>
    </div>
  );
};

export default Dropdown;
