import uniqid from "uniqid";
import { skills } from "../../portfolio";
import "./Skills.css";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={uniqid()} className="btn btn-plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;