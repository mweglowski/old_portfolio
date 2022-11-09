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
    </div>
  );
};

export default ProjectCard;
