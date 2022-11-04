import Skill from "./Skill";
import "./SkillsList.css";

const SkillsList = () => {
  const skills = [
    { name: "ReactJS", level: 77 },
    { name: "Redux", level: 45 },
    { name: "SQL", level: 68},
    { name: "Python", level: 65 },
    { name: "CSS", level: 88 },
    { name: "HTML", level: 85 },
  ];

  return (
    <div className="skills-list">
      {skills.map((skillItem) => (
        <Skill skillData={skillItem} key={skillItem.name} />
      ))}
    </div>
  );
};

export default SkillsList;
