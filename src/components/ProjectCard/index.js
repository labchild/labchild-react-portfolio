import React from "react";
import "./index.css";

const ProjectCard = () => {
  return (
    <article className="project-card card">
      <div className="card-img">image</div>
      <div className="card-text">
        <div className="card-head">title</div>
        <div className="card-body">stuff</div>
      </div>
    </article>
  );
};

export default ProjectCard;
