import React,{ useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Masthead from "./components/Masthead";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <div className="Font-explatus">
        <Navbar />
        <Masthead />
      </div>
      <div className="Font-mulish App-Secondary-Components">
        <Projects />
        <Technologies />
        <AboutMe />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
