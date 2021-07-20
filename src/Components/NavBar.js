import React from "react";
import { useMediaQuery } from "react-responsive";

const NavBar = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

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
        {isMobile && <span class="material-icons menu-icon">menu</span>}
        {!isMobile && (
          <>
            <ul className="nav-bar-item-list">{renderListItems()}</ul>
            <a
              className="secondary-btn"
              href="Resume_v2_FullStack_Austin_Vieth.pdf"
              download="Austin Vieth Resume"
            >
              Resume
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
