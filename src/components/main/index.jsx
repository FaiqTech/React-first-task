// Main.js

import React from "react";
import "./style.css";
import Welcome from "../../assets /img/welcome.jpeg";
import MainImg from "../../assets /img/main.jpeg";

const Main = () => {
  return (
    <main className="main-content">
      <section className="section">
        <img className="section-element" src={Welcome} alt="welcome.jpeg" />
      </section>
      <section className="section">
        <img className="section-element" src={MainImg} alt="welcome.jpeg" />
      </section>
    </main>
  );
};

export default Main;
