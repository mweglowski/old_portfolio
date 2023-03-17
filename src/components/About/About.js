import React from "react";
import classes from "./About.module.css";

const About = React.forwardRef((props, ref) => {
  return (
    <section className={classes.section} ref={ref}>
      <div className={classes.sectionTitle}>About</div>
      <article className={classes.personalDescription}>
      Hello and welcome! My name is Martin and I'm a high school student with a passion for coding and programming, particularly in the fields of data science, <span className={classes.technology}>AI</span>, and front-end development. I specialize in building web applications using <span className={classes.technology}>React</span>, but I'm also exploring <span className={classes.technology}>Flutter</span>. In addition to my front-end expertise, I have a keen interest in machine learning and am currently focused on this exciting field.
      </article>
      <article className={classes.personalDescription}>
      I have been proactively seeking out new knowledge from various sources. Specifically, I have been expanding my understanding of JavaScript-related technologies such as <span className={classes.technology}>Node.js</span>, <span className={classes.technology}>Express</span>, <span className={classes.technology}>React</span>, and <span className={classes.technology}>React Native</span>. Additionally, I possess experience in <span className={classes.technology}>Python</span> ranging from web development using frameworks like <span className={classes.technology}>Django</span> and <span className={classes.technology}>Flask</span>, to advanced concepts in AI such as <span className={classes.technology}>Machine Learning</span> and <span className={classes.technology}>Deep Learning</span>. As a result, I am well-versed in popular Python libraries including numpy, pandas, and matplotlib, as well as tools like <span className={classes.technology}>Tensorflow</span>.
      </article>

      <div className={classes.websites}>
        <div className={classes.websitesHeader}>
          <div className={classes.websitesHeaderTitle}>Profile Links</div>
          <p className={classes.websitesHeaderDescription}>
            Here are some links to my profiles from websites that I was visting
            frequently
          </p>
        </div>
        <ul className={classes.websiteList}>
          <li className={classes.websiteItem}>
            <a
              href="https://app.datacamp.com/profile/flaren"
              target="_blank"
              className={classes.websiteItemLink}
            >
              DataCamp
            </a>
          </li>
          <li className={classes.websiteItem}>
            <a
              href="https://teamtreehouse.com/profiles/mweglowski"
              target="_blank"
              className={classes.websiteItemLink}
            >
              Treehouse
            </a>
          </li>
          <li className={classes.websiteItem}>
            <a
              href="https://www.freecodecamp.org/mweglowski"
              target="_blank"
              className={classes.websiteItemLink}
            >
              FreeCodeCamp
            </a>
          </li>
          <li className={classes.websiteItem}>
            <a
              href="https://www.codewars.com/users/Mweglowski"
              target="_blank"
              className={classes.websiteItemLink}
            >
              CodeWars
            </a>
          </li>
          <li className={classes.websiteItem}>
            <a
              href="https://www.hackerrank.com/marcin_weglowsk1"
              target="_blank"
              className={classes.websiteItemLink}
            >
              Hackerrank
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
});

export default About;
