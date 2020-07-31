import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./scss/style.scss";

const Menu = () => {
  return (
    <menu className="type-menu">
      <li>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-20}
          duration={600}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          About me
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          Contacts
        </Link>
      </li>
    </menu>
  );
};

export default Menu;
