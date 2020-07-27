import React from "react";
import "./scss/style.scss";

const Menu = () => {
  return (
    <menu className="type-menu">
      <li className="active">Home</li>
      <li className="active">About me</li>
      <li className="active">Skills</li>
      <li className="active">Portfolio</li>
      <li className="active">Contacts</li>
    </menu>
  );
};

export default Menu;
