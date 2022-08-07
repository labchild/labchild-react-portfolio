import React from "react";
import ProjectCard from "../ProjectCard";
import projects from "../../assets/documents/work.json";

// const previewImgs = projects.map(project => require(`../../assets/images/previews/${project.img_path}`) );

const ProjectList = () => {
  // pass image, project name, deployed url and gh repo url as props
  // .map the array of data
  return (
    <section className="content">
      <h1 className="title">projects</h1>
      <div className="details">
        {projects.length > 0 ? (
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
        )}
      </div>
    </section>
  );
};

export default ProjectList;
