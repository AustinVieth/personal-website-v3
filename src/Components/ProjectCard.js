import React from "react";

const ProjectCard = (props) => {
  const renderTechnologies = () => {
    return props.technologies.map((item) => {
      return <span className="technology-item">{item}</span>;
    });
  };
  return (
    <div className="project-card">
      {props.github ? (
        <a
          target="_blank"
          rel="noreferrer"
          className="git-link"
          href={props.github}
        >
          <i class="fab fa-github "></i>
        </a>
      ) : null}

      <span className="project-card-name">{props.name}</span>
      <span className="project-card-description">{props.description}</span>
      <div className="technologies">{renderTechnologies()}</div>
    </div>
  );
};

export default ProjectCard;
