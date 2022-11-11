import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import portrait from "./images/portrait.jpg";
import "./App.css";

function App() {
  const [isNavLinksShown, setIsNavLinksShown] = useState(false);

  const toggleNavLinksDisplayHandler = () => {
    setIsNavLinksShown((prevDisplay) => !prevDisplay);
  };

  const homeSectionRef = useRef();
  const aboutSectionRef = useRef();
  const skillsSectionRef = useRef();
  const projectsSectionRef = useRef();
  const contactSectionRef = useRef();

  const navigationRefs = {
    homeSectionRef: homeSectionRef,
    aboutSectionRef: aboutSectionRef,
    skillsSectionRef: skillsSectionRef,
    projectsSectionRef: projectsSectionRef,
    contactSectionRef: contactSectionRef,
  };

  return (
    <div className="app">
      <Navbar
        navigationRefs={navigationRefs}
        toggleNavLinksDisplay={toggleNavLinksDisplayHandler}
        isNavLinksShown={isNavLinksShown}
      />
      <Home ref={homeSectionRef} contactSectionRef={contactSectionRef} />
      <About ref={aboutSectionRef} />
      <Skills ref={skillsSectionRef} />
      <Projects ref={projectsSectionRef} />
      <Contact ref={contactSectionRef} />
      <img src={portrait} className="about-section-image" alt="portrait" />
    </div>
  );
}

export default App;
