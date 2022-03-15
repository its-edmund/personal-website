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
          <span className="highlight" data-text="bits of good">
            bits of good
          </span>
        </a>{" "}
        and{" "}
        <a href="https://hexlabs.org/" target="_blank" rel="noreferrer">
          <span className="highlight" data-text="hexlabs.">
            hexlabs.
          </span>
        </a>
      </p>
    </div>
    <div className="orgs">
      <div className="org">
        <h5>@hackgt</h5>
        <div className="project-cards">
          <Card
            org="hackgt"
            repo="api"
            liveLink="https://users.api.hexlabs.org"
            description="Microservice API that supports all of HackGT's frontend applications."
          />
          <Card org="hackgt" repo="ballot" liveLink="https://expo.hexlabs.org" />
        </div>
      </div>
      <div className="org">
        <h5>@gtbitsofgood</h5>
        <div className="project-cards">
          <Card org="gtbitsofgood" repo="gt-scheduler" liveLink="https://gt-scheduler.org" />
          <Card org="gtbitsofgood" repo="bgc-safety" liveLink="https://expo.hexlabs.org" />
        </div>
      </div>
    </div>
  </div>
);

export default Work;
