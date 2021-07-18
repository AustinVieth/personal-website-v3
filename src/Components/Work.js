import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

class ExperienceItem {
  constructor(id, name, title, datesWorked, bulletPoints) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.datesWorked = datesWorked;
    this.bulletPoints = bulletPoints;
  }
}

let experienceItemsDefault = [
  new ExperienceItem(0, "Payality", "Software Engineer", "Nov 2019 - Present", [
    "Using a MERN Stack (MongoDB, Express, React, Node) created 2 web apps that changed the way the company receives and manipulates data",
    "Implemented and maintained a 3rd party API that allowed users to enter in information in our system and automatically have it populate the information in other systems.",
    "Created a custom quote engine for the sales team using Node.js that allowed for quick and accurate quotes for the end user",
  ]),
  new ExperienceItem(
    1,
    "University Of Illinois, Springfield",
    "Student",
    "August 2020 - March 2022",
    ["Received Bachelor's of Computer Science", "4.0 GPA"]
  ),
  new ExperienceItem(
    2,
    "California Polytechnic University, SLO",
    "Student",
    "September 2013 - March 2018",
    ["Studied Biology", "Minor in Law."]
  ),
];

const Work = (props) => {
  //I'm never needing to set experience items so I don't include the set function
  const [experienceItems] = useState(experienceItemsDefault);
  const [selected, setSelected] = useState(experienceItems[0]);

  const handleSelection = (e) => {
    setSelected(experienceItems[e.currentTarget.value]);
  };

  const renderExperienceList = () => {
    return experienceItems.map((item) => {
      return (
        <li
          onClick={handleSelection}
          key={item.id}
          value={item.id}
          className={`work-selector-item ${
            selected.id === item.id ? "selected" : ""
          }`}
        >
          {item.name}
        </li>
      );
    });
  };

  const renderExperienceBulletPoints = () => {
    return selected.bulletPoints.map((item, index) => {
      return (
        <li className="experience-item" key={index}>
          <span class="material-icons bullet-point">chevron_right</span>
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
          <ul>{renderExperienceList()}</ul>
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
      <span class="material-icons bullet-point">chevron_right</span>
      <span>
        Using a MERN Stack (MongoDB, Express, React, Node) created 2 web apps
        that changed the way the company receives and manipulates data
      </span>
    </li>
    <li className="experience-item">
      <span class="material-icons bullet-point">chevron_right</span>
      <span>
        Implemented and maintained a 3rd party API that allowed users to enter
        in information in our system and automatically have it populate the
        information in other systems.
      </span>
    </li>
    <li className="experience-item">
      <span class="material-icons bullet-point">chevron_right</span>
      <span>
        Created a custom quote engine for the sales team using Node.js that
        allowed for quick and accurate quotes for the end user
      </span>
    </li>
  </ul>
</div>;

export default Work;
