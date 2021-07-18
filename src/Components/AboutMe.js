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
    return technologies.map((item) => {
      return (
        <li className="technology-item">
          <span class="material-icons bullet-point">chevron_right</span>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            integer eget aliquet nibh praesent tristique magna. In nisl nisi
            scelerisque eu ultrices vitae auctor eu augue. Sit amet massa vitae
            tortor. Faucibus in ornare quam viverra orci sagittis. Aliquet
            sagittis id consectetur purus ut faucibus pulvinar. Diam vulputate
            ut pharetra sit amet aliquam id diam maecenas. Sed egestas egestas
            fringilla phasellus faucibus. Iaculis eu non diam phasellus
            vestibulum lorem. In ante metus dictum at tempor commodo
            ullamcorper.
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
