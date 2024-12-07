import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dropdown from "./components/Dropdown";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <Dropdown />
      </div>
    </div>
  );
};

export default App;
