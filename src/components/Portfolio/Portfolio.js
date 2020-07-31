import React from "react";
import "./scss/style.scss";
import woman from "./img/woman.svg";
import reebok from "./img/reebok.svg";
import braun from "./img/braun.svg";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 id="portfolio">Portfolio</h1>
      <div className="portfolio-info">
        <img src={woman} className="woman" alt="woman" />
        <p>Online fashion store - Homepage</p>
        <img src={reebok} className="reebok" alt="reebok" />
        <p>Reebok Store - Concept</p>
        <img src={braun} className="braun" alt="braun" />
        <p>Braun Landing Page - Concept</p>
      </div>
    </div>
  );
};

export default Portfolio;
