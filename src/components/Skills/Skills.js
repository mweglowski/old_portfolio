import React from "react";
import SkillsList from "./SkillsList";
import "./Skills.css";

const Skills = React.forwardRef((props, ref) => {
  return (
    <section className="skills-section" ref={ref}>
      <div className="skills-section-title">Skills</div>
      <SkillsList />
    </section>
  );
});

export default Skills;
