import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
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
  );
};

export default About;
