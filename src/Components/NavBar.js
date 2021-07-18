import React from "react";

const NavBar = (props) => {
  const renderListItems = () => {
    if (!props.items) return;
    return props.items.map((item, index) => {
      return (
        <li key={index} className="nav-bar-item">
          <a href={`/#${item}`}>{item}</a>
        </li>
      );
    });
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        <ul className="nav-bar-item-list">{renderListItems()}</ul>
        <a
          className="secondary-btn"
          href="Resume_v2_FullStack_Austin_Vieth.pdf"
          download="Austin Vieth Resume"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default NavBar;
