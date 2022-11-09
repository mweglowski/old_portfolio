import Skill from "./Skill";
import "./SkillsList.css";

const SkillsList = () => {
  const skills = [
    { name: "ReactJS", percentage: 77 },
    { name: "Redux", percentage: 45 },
    { name: "SQL", percentage: 68 },
    { name: "Python", percentage: 65 },
    { name: "CSS", percentage: 88 },
    { name: "HTML", percentage: 85 },
    { name: "Dart/Flutter", percentage: 30 },
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
