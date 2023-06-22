import React from "react";

const Hero = (props) => {
  return (
    <div
      className="hero"
      id="Home"
      style={{
        background: ` rgba(0,0,0,.75) url(${
          process.env.PUBLIC_URL + "/TechSpace.jpg"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        width: "100vw",
      }}
    >
      <div className="name-and-title">
        <span className="name">Austin.</span>
        <span className="title">Software Engineer</span>
      </div>

      <div className="info-container">
        <p className="hero-info">
          I'm a Washington-based software engineer who specializes in
          <span className="highlight"> game development</span> with a passion
          for performance. I'm currently an engineer at Zendesk focusing on
          creating simplified experiences.
        </p>
        <div className="contact-me-container">
          <a className="secondary-btn" href="mailto:ozwaldvieth@gmail.com">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
