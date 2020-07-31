import React from "react";
import "./scss/style.scss";
import linkedin from "./img/linkedin.svg";
import instagram from "./img/instagram.svg";
import behance from "./img/behance.svg";
import dribble from "./img/dribble.svg";

const Contacts = () => {
  return (
    <div className="contacts">
      <h1 id="contacts">Contacts</h1>
      <p>
        Want to know more or just chat? <br />
        You are welcome!
      </p>
      <input type="button" value="Send message" />
      <div className="social">
        <img src={linkedin} className="linkedin" alt="linkedIn" />
        <img src={instagram} className="instagram" alt="instagram" />
        <img src={behance} className="behance" alt="behance" />
        <img src={dribble} className="dribble" alt="dribble" />
      </div>
      <p>
        Like me on <br />
        LinkedIn, Instagram, Behance, Dribble
      </p>
    </div>
  );
};

export default Contacts;
