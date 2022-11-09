import { useInView } from "react-intersection-observer";
import "./Skill.css";

const Skill = (props) => {
  const { ref: skillLiquidRef, inView: isSkillLiquidRefVisible } = useInView();
  const { skillData } = props;

  return (
    <div className="skill">
      <div className="skill-name">{skillData.name}</div>
      <div className="skill-chart-box">
        <div className="skill-boiler">
          <div
            className={`skill-liquid ${
              isSkillLiquidRefVisible && "fill-boiler"
            }`}
            style={{ width: `${skillData.percentage}%` }}
            ref={skillLiquidRef}
          >
            <span
              className={`${isSkillLiquidRefVisible && "show-percentage"}`}
            >{`${skillData.percentage}%`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
