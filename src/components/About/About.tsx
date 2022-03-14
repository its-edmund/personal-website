import { faApple, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./About.scss";

const About = () => (
  <div className="about">
    <div className="about-content">
      <h3>me</h3>
      <p>school: cs @ georgia tech</p>
      <p>
        company: incoming swe intern @ <FontAwesomeIcon icon={faApple} />
      </p>
      <p>tech stack: typescript, node, express, mongodb, python, java, c++</p>
      <div className="icon-container">
        <a href="https://linkedin.com/in/edmundxin" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/its-edmund" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.instagram.com/edmund.xin/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  </div>
);

export default About;
