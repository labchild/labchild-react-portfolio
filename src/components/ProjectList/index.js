import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import ProjectCard from "../ProjectCard";
import projects from "../../assets/documents/work.json";
import "./index.css";

// const previewImgs = projects.map(project => require(`../../assets/images/previews/${project.img_path}`) );

const ProjectList = () => {
  // pass image, project name, deployed url and gh repo url as props
  // .map the array of data
  return (
    <section className="content">
      <h1 className="title">projects</h1>
      <div className="details">
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <article
              className="project-card card"
              key={project.name}
              data-id={project.id}
            >
              <div className="card-img">
                <img src={project.img_path} alt={project.alt} />
              </div>
              <div className="card-text">
                {!project.hosted ? (
                  <h3 className="card-head">{project.name}</h3>
                ) : (
                  <h3 className="card-head">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="title-link"
                    >
                      {project.name}
                    </a>
                  </h3>
                )}
                <div className="card-body">
                  <p>{project.description}</p>
                  {project.has_repo ? (
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-github" />{" "}
                    {project.name} on Github
                  </a>
                  ) : (
                    ""
                  )}
                  
                </div>
              </div>
            </article>
          ))
        ) : (
          <p>under construction</p>
        )}
        {/* {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              hosted={project.hosted}
              url={project.url}
              img_path={project.img_path}
              img_alt={project.img_alt}
              github={project.github}
              description={project.description}
              key={projects.indexOf(project)}
            />
          ))
        ) : (
          <p>under construction until July 5 2022</p>
        )} */}
      </div>
    </section>
  );
};

export default ProjectList;
