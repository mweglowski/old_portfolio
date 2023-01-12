import React from "react";
import classes from "./About.module.css";

const About = React.forwardRef((props, ref) => {
  return (
    <section className={classes.section} ref={ref}>
      <div className={classes.sectionTitle}>About</div>
      <article className={classes.personalDescription}>
        Welcome! I am Martin and I am highschool student passionated in coding,
        programming, data science, AI and as you know especially in Front-End
        and building web applications mostly using React, but I am also trying
        some Flutter.
      </article>
      <article className={classes.personalDescription}>
        I was actively learning new things from different sources. From things
        connected to JavaScript I was getting knowledge about Node.js, Express
        and React. I also have a bit experience in some Python libraries like
        Pandas, Matplotlib, Seaborn and Sklearn, because of my slight interest
        in Data Engineering, Analysis and Machine Learning.
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
