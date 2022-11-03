import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import portrait from "./images/portrait.jpg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <img src={portrait} className="about-section-image" alt="portrait" />
    </div>
  );
}

export default App;
