import React from "react";
import "./scss/style.scss";
import photoshop from "./img/adobe-photoshop.svg";
import illustrator from "./img/adobe-illustrator.svg";
import after from "./img/adobe-after.svg";
import figma from "./img/figma.svg";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <p>I work in such programs as</p>
      <div className="programs">
        <img src={photoshop} className="photoshop" alt="photoshop" />
        <img src={illustrator} className="illustrator" alt="illustrator" />
        <img src={after} className="after" alt="after" />
        <img src={figma} className="figma" alt="figma" />
      </div>
    </div>
  );
};

export default Skills;
