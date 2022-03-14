import React, { useEffect, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import "./Card.scss";
import Tag from "./Tag";

const Card = ({
  org,
  repo,
  description,
  repoLink,
  liveLink,
  tags,
}: {
  org: string;
  repo: string;
  description?: string;
  repoLink?: string;
  liveLink?: string;
  tags?: string[];
}) => {
  const [repoData, setRepoData] = useState<any>(null);
  const [languages, setLanguages] = useState<any>(null);
  useEffect(() => {
    const fetchRepoData = async () => {
      const response = await axios.get(`https://api.github.com/repos/${org}/${repo}`);
      const languagesRes = await axios.get(`https://api.github.com/repos/${org}/${repo}/languages`);
      console.log(response.data.full_name);
      setRepoData(response.data);
      setLanguages(languagesRes.data);
    };
    fetchRepoData();
  }, [org, repo]);

  return (
    <div className="card">
      {repoData ? (
        <>
          <div>
            <h5 className="card-title">{`@${repoData.full_name.toLowerCase()}`}</h5>
            <em className="card-description">{description || repoData.description}</em>
          </div>
          <div className="info-container">
            <div className="tag-container">
              {languages
                ? Object.keys(languages).map(language => <Tag>{language}</Tag>)
                : tags?.map(tag => <Tag>{tag}</Tag>)}
            </div>
            <a href={repoData.html_url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
            </a>
            <a href={liveLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faWindowMaximize} size="2x" className="browser-icon" />
            </a>
          </div>
        </>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Card;
