import GitHubIcon from "@material-ui/icons/GitHub";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, social } = about;

  return (
    <section id="about" className="about section">
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about-name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about-role">A {role}.</h2>}
      <p className="about-desc">{description && description}</p>

      <div className="about-contact center">
        <>
          {social.github && (
            <a
              href={social.github}
              aria-label="github"
              className="link link-icon"
            >
              <GitHubIcon />
            </a>
          )}
        </>
      </div>
    </div>
    </section>
  );
};

export default About;
