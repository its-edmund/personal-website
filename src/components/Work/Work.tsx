import React from "react";

import Card from "./Card";

import "./Work.scss";

const Work = () => (
  <div className="projects">
    <div className="project-content">
      <h2>my work</h2>
      <p>
        i love software development but more importantly, i love finding ways to use my skills
        towards a cause that benefit people. my most notable work has been contributed to projects
        in{" "}
        <a href="https://bitsofgood.org/" target="_blank" rel="noreferrer">
          <span className="glitch hover-p" data-text="bits of good">
            bits of good
          </span>
        </a>{" "}
        and{" "}
        <a href="https://hexlabs.org/" target="_blank" rel="noreferrer">
          <span className="glitch hover-p" data-text="hexlabs.">
            hexlabs.
          </span>
        </a>
      </p>
      <div className="project-cards">
        <Card />
      </div>
    </div>
  </div>
);

export default Work;
