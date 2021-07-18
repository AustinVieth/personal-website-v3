import React from "react";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

class ProjectItem {
  constructor(id, name, description, technologies, github = null) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.technologies = technologies;
    this.github = github;
  }
}

const projectList = [
  new ProjectItem(
    0,
    "Chat App",
    "An app that allows users to open a chat room and communicate using socket.io",
    ["Javascript", "Socket.io"],
    "https://github.com/AustinVieth/Chat-App-Public"
  ),
  new ProjectItem(
    1,
    "Partner Portal",
    "A React app that allows B2B communications, client tracking and a quote engine.",
    ["ReactJS", "NodeJS", "MongoDB"]
  ),
  new ProjectItem(
    2,
    "PayalityEZ",
    "A React app that uses a private API to submit payroll, employees and track communications.",
    ["ReactJS", "NodeJS"]
  ),
  new ProjectItem(
    3,
    "Pomodoro App",
    "A React app that is a Pomodoro timer for learning new skills, also allows you to keep lists of your skills and categorize them.",
    ["ReactJS", "NodeJS"],
    "https://github.com/AustinVieth/Pomodoro-V2/tree/master/pomodoro-v2"
  ),
];

const Projects = (props) => {
  const renderProjectCards = () => {
    return projectList.map((item) => {
      return (
        <ProjectCard
          key={item.id}
          name={item.name}
          description={item.description}
          technologies={item.technologies}
          github={item.github}
        />
      );
    });
  };

  return (
    <div className="projects" id="Projects">
      <div className="header-container">
        <SectionHeader label="Projects" />
      </div>

      <div className="project-list">{renderProjectCards()}</div>
    </div>
  );
};

export default Projects;
