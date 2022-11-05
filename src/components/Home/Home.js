import React from "react";
import "./Home.css";

const Home = React.forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <div className="title">
        <div className="title-welcome"></div>
        <div className="title-name">
          <span>Martin</span>
        </div>
        <div className="title-profession"></div>
        <button className="home-button">Contact</button>
      </div>
    </div>
  );
});

export default Home;
