import React from "react";
import SectionHeader from "./SectionHeader";
//${process.env.PUBLIC_URL} + "/Self.png"

const technologies = [
  "Unreal Engine 5",
  "ReactJS",
  "Godot",
  "Ruby",
  "C++",
  "Typescript",
  "Kubernetes",
  "GraphQL",
  "DataDog",
];

const AboutMe = (props) => {
  const renderTechnologyList = () => {
    return technologies.map((item, index) => {
      return (
        <li className="technology-item" key={index}>
          <span className="material-icons bullet-point">chevron_right</span>
          <span>{item}</span>
        </li>
      );
    });
  };

  return (
    <div className="about-me" id="About">
      <div className="left-container">
        <div className="about-me-text">
          <SectionHeader label="About Me" />
          <p>
            I'm a passionate game developer based in the Pacific Northwest (WA)
            with a background in software engineering. From an early age, I
            immersed myself in the world of software development, even creating
            private servers for my favorite games. Gaming has always been my
            passion, and I've nurtured a deep fascination for the industry.
          </p>
          <p>
            After pursuing a biology degree at Cal Poly, I realized that game
            development was my true calling. In 2014, I ventured into web
            development and computer science, acquiring skills through
            self-guided learning and professional experiences. I furthered my
            education by obtaining a bachelor's degree in Computer Science,
            while simultaneously working as a full-time software engineer.
          </p>
          <p>
            Alongside my professional career, I explored game development as a
            hobby. Over the years, I dabbled in various aspects like drawing, 3D
            modeling, and animation, continuously learning and expanding my
            skill set. I'm drawn to the theory of game design and seek
            inspiration from books like "The Art of Game Design" and "Level Up."
          </p>
        </div>

        <div className="technologies">
          <span className="sub-header">Technologies:</span>
          <ul className="technology-list">{renderTechnologyList()}</ul>
        </div>
      </div>

      <div className="right-container">
        <div className="image-container">
          <div className="stylized-border"></div>
          <img
            className="self-portrait"
            src={process.env.PUBLIC_URL + "/Self.png"}
            alt="A Self portrait of Austin"
          ></img>
          <div className="overlay-black"></div>
          <div className="overlay-yellow"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
