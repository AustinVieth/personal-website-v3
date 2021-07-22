import React from "react";
import SectionHeader from "./SectionHeader";
//${process.env.PUBLIC_URL} + "/Self.png"

const technologies = [
  "ReactJS",
  "JavaScript",
  "NodeJS",
  "CSS",
  "C++",
  "Unreal Engine 4",
  "MongoDB",
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
            Hello, I'm a 26 year old software engineer living in central coast
            California. I became interested in software in 2014 when I dabbled
            in game development and after a long hiatus I dove deep in 2018 with
            Javascript and creating apps. Once I experienced good UX it became
            my passion, creating experiences that people enjoy is something that
            matters to me, because even if you have the best idea in the world
            if someone doesn't know how to use it, it's all for naught.
          </p>
          <p>
            While I make games in my freetime, creating web apps from front to
            back is what I do today. I enjoy the entire process from creating
            the user interface to setting up a database and creating an API to
            manipulate that data. I typically use Javascript for the backend but
            C++ is my favorite language. I'm most experienced in Javascript but
            the power that comes from memory management and the flexibility of
            C++ is undeniably Great.
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
