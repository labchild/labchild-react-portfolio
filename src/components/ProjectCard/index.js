import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./index.css";

const ProjectCard = (props) => {
  const { name, hosted, url, github, description } = props;
//   const imgSrc = require(`../../assets/images/${img_path}`);
  return (
    <article className="project-card card">
      <div className="card-img">
        {/* <img src={require(`../../assets/images/previews/${img_path}`)} /> */}
      </div>
      <div className="card-text">
        {hosted === "false" ? (
          <div className="card-head">{name}</div>
        ) : (
          <div className="card-head">
            <a href={url} target="_blank" rel="noopener noreferrer" className="link subtitle">
              {name}
            </a>
          </div>
        )}
        <div className="card-body">
            <p>{description}</p>
            <a href={github} target="_blank" rel="noopener noreferrer" className="link">
                <FontAwesomeIcon icon="fa-brands fa-github" /> {name} on Github
            </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
