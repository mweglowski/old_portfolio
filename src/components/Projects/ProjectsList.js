import ProjectCard from "./ProjectCard";
import classes from "./ProjectsList.module.css";

const ProjectsList = (props) => {
  return (
    <ul className={classes.projectsList}>
      {props.projectsList.map((project) => (
        <ProjectCard projectData={project} key={project.id} />
      ))}
    </ul>
  );
};

export default ProjectsList;
