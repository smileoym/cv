import React from "react";
import "./scss/style.scss";
import logo from "./img/valentin-salja.svg";

const Home = () => {
  return (
    <div className="home">
      <div id="home" className="user-name">
        Denis
        <br /> Novik
      </div>
      <div className="user-information">
        UX | UI designer <br /> 24 years old, Minsk
      </div>
      <div className="language">RU | ENG </div>
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};

export default Home;
