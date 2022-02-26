import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SectionHeader from "./SectionHeader";

class ExperienceItem {
  constructor(id, name, title, datesWorked, bulletPoints, shortName = name) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.datesWorked = datesWorked;
    this.bulletPoints = bulletPoints;
    this.shortName = shortName;
  }
}

let experienceItemsDefault = [
  new ExperienceItem(
    4,
    "Zendesk",
    "Senior Software Engineer",
    "Oct. 2021 - Present",
    [
      "Completed a React migration project and improved overall code quality through various refactors",
      "Created and executed on design documents for multiple projects including visual and business logic changes to increase visual fidelity or business logic execution speed.",
      "Designed and implemented Datadog metrics to track product quality and troubleshoot issues before they became apparent to the customer",
    ]
  ),
  new ExperienceItem(
    3,
    "Etna Interactive",
    "Web Developer",
    "Aug. 2021 - Oct. 2021",
    [
      "Worked with multiple technologies including HTML, CSS, JS, ColdFusion, and Vue to create web experiences for Aesthetic Surgeons",
      "Created custom features that mimic a SPA using only vanilla javascript",
    ]
  ),
  new ExperienceItem(
    0,
    "Payality",
    "Software Engineer",
    "Nov. 2019 - Aug. 2021",
    [
      "Using a MERN Stack (MongoDB, Express, React, Node) created 2 web apps that changed the way the company receives and manipulates data",
      "Implemented and maintained a 3rd party API that allowed users to enter in information in our system and automatically have it populate the information in other systems.",
      "Created a custom quote engine for the sales team using Node.js that allowed for quick and accurate quotes for the end user",
    ]
  ),
  new ExperienceItem(
    1,
    "University Of Illinois, Springfield",
    "Student",
    "August 2020 - March 2022",
    ["Received Bachelor's of Computer Science", "4.0 GPA"],
    "Univ. Illinois, Springfield"
  ),
  new ExperienceItem(
    2,
    "California Polytechnic University, SLO",
    "Student",
    "September 2013 - March 2018",
    ["Studied Biology", "Minor in Law."],
    "CalPoly, SLO"
  ),
];

const Work = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  //I'm never needing to set experience items so I don't include the set function
  const [experienceItems] = useState(experienceItemsDefault);
  const [selected, setSelected] = useState(experienceItems[0]);

  const handleSelection = (e) => {
    setSelected(experienceItems[e.currentTarget.value]);
  };

  const renderExperienceList = () => {
    return experienceItems.map((item, index) => {
      return (
        <li
          onClick={handleSelection}
          key={item.id}
          value={index}
          className={`work-selector-item ${
            selected.id === item.id ? "selected" : ""
          }`}
        >
          {isMobile ? item.shortName : item.name}
        </li>
      );
    });
  };

  const renderExperienceBulletPoints = () => {
    return selected.bulletPoints.map((item, index) => {
      return (
        <li className="experience-item" key={index}>
          <span className="material-icons bullet-point">chevron_right</span>
          <span>{item}</span>
        </li>
      );
    });
  };

  const renderExperienceInformation = () => {
    return (
      <div className="selected-information">
        {/* Labels */}
        <span className="job-title">
          {selected.title}, <span className="company">{selected.name}</span>
        </span>
        <span className="dates-worked">{selected.datesWorked}</span>

        {/* Information && Bullet Points */}
        <ul className="experience-list">{renderExperienceBulletPoints()}</ul>
      </div>
    );
  };

  return (
    <div className="work" id="Work">
      <SectionHeader label="Work && Education" />
      <div className="work-container">
        <div className="work-selector">
          <ul className="work-selector-list">{renderExperienceList()}</ul>
        </div>

        {renderExperienceInformation()}
      </div>
    </div>
  );
};

//notes for setting up layout as an example DELETE
<div className="selected-information">
  {/* Labels */}
  <span className="job-title">
    Software Engineer, <span className="company">Payality</span>
  </span>
  <span className="dates-worked">Nov 2019 - Present</span>

  {/* Information && Bullet Points */}
  <ul className="experience-list">
    <li className="experience-item">
      <span className="material-icons bullet-point">chevron_right</span>
      <span>
        Using a MERN Stack (MongoDB, Express, React, Node) created 2 web apps
        that changed the way the company receives and manipulates data
      </span>
    </li>
    <li className="experience-item">
      <span className="material-icons bullet-point">chevron_right</span>
      <span>
        Implemented and maintained a 3rd party API that allowed users to enter
        in information in our system and automatically have it populate the
        information in other systems.
      </span>
    </li>
    <li className="experience-item">
      <span className="material-icons bullet-point">chevron_right</span>
      <span>
        Created a custom quote engine for the sales team using Node.js that
        allowed for quick and accurate quotes for the end user
      </span>
    </li>
  </ul>
</div>;

export default Work;
