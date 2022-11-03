import SkillsList from "./SkillsList";
import "./Skills.css";

const Skills = (props) => {
  return (
    <section className="skills-section">
      <div className="skills-section-title">Skills</div>
      <SkillsList />
    </section>
  );
};

export default Skills;
