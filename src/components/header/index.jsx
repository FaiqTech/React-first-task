// Header.js

import React from "react";
import "./style.css";
import logo from "../../assets /icon/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-element" src={logo} alt="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
