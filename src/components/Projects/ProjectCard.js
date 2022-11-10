import React from "react";
import { ReactComponent as JavaScriptIcon } from "../../images/js.svg";
import { ReactComponent as ReactIcon } from "../../images/js.svg";
import CSSIcon from "../../images/css.png";
import { ReactComponent as HTMLIcon } from "../../images/js.svg";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const { projectData } = props;

  return (
    <div className={classes.projectCard}>
      <div className={classes.title}>{projectData.title}</div>
      <div className={classes.description}>{projectData.description}</div>
      <div className={classes.projectButton}>
        <img
          className={classes.projectImage}
          src={projectData.image}
          alt={projectData.description}
        />
        <div className={classes.buttonBlur} />
      </div>
      <div className={classes.technologies}>
        {projectData.technologies.map((tech) => {
          if (tech === "JavaScript") {
            return (
              <span
                className={classes.tech}
                style={{ color: "yellow", width: "fit-content" }}
                key={tech}
              >
                JS
              </span>
            );
          } else if (tech === "CSS") {
            return (
              <span
                className={classes.tech}
                style={{ color: "#0099ff", width: "fit-content" }}
                key={tech}
              >
                CSS
              </span>
            );
          } else if (tech === "SCSS") {
            return (
              <span
                className={classes.tech}
                style={{ color: "#f9627b", width: "fit-content" }}
                key={tech}
              >
                SCSS
              </span>
            );
          } else if (tech === "HTML") {
            return (
              <span
                className={classes.tech}
                style={{ color: "#e04327", width: "fit-content" }}
                key={tech}
              >
                HTML
              </span>
            );
          } else if (tech === "React") {
            return (
              <div
                className={classes.tech}
                style={{ color: "cyan", width: "fit-content" }}
                key={tech}
              >
                REACT
              </div>
            );
          } else return;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
