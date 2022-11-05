import React from "react";
import "./About.css";

const About = React.forwardRef((props, ref) => {
  return (
    <section className="about-section" ref={ref}>
      <div className="about-section-title">About</div>
      <article className="about-section-description">Welcome! I am Martin and I am highschool student passionated in coding, programming, data science, AI and as you know especially in Front-End and building web applications mostly using React, but I also trying some Flutter.</article>
      <article className="about-section-description">I was actively learning new things from different sources. From things connected to JavaScript I was learning Node.js, Express, React, REST API. I also have a bit experience in some Python libraries like Pandas, Matplotlib and Seaborn, because of my slight interest in Data Engineering, Analysis and also Machine Learning.</article>
    </section>
  );
});

export default About;
