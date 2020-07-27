import React from "react";
import "./scss/style.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="border-line"></div>
      <section className="anceta">
        <div className="user-name">
          Denis
          <br /> Novik
        </div>
        <div className="user-information">
          UX | UI designer <br /> 24 years old, Minsk
        </div>
        <div className="language">RU | ENG </div>
      </section>
    </div>
  );
};

export default Home;
