import React from "react";
import SectionHeader from "./SectionHeader";

const ContactMe = (props) => {
  return (
    <div className="contact-me" id="Contact">
      <SectionHeader label="Contact Me" centered />
      <div className="contact-me-message">
        <span>
          I'm currently open to opportunities, please reach out via email or get
          in touch with me via linked in. If you have any questions, or you need
          help with a project don't hesitate to ask!
        </span>
      </div>

      <a className="secondary-btn" href="mailto:ozwaldvieth@gmail.com">
        Message Me
      </a>
      <div className="information-container">
        <ul className="information-list">
          <li className="information-item">
            <a href="mailto:ozwaldvieth@gmail.com">
              <i class="far fa-envelope"></i>
            </a>
            <span>ozwaldvieth@gmail.com</span>
          </li>
          <li className="information-item">
            <a
              href="https://www.linkedin.com/in/austin-vieth-602759171/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <span>/austin-vieth-602759171/</span>
          </li>
          <li className="information-item">
            <a
              href="https://github.com/AustinVieth"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
            <span>/AustinVieth</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
