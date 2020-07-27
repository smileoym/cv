import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu/Menu";
import BorderLine from "./components/BorderLine/BorderLine";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Menu />
      <BorderLine />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
