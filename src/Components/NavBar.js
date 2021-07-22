import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const NavBar = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  const [navOpen, setNavOpen] = useState(false);

  const renderListItems = (items) => {
    if (!items) return;
    return items.map((item, index) => {
      return (
        <li
          key={index}
          className="nav-bar-item"
          style={{ "--animationOrder": index + 1 }}
        >
          <a
            href={`/#${item}`}
            onClick={() => {
              isMobile && setNavOpen(false);
            }}
          >
            {item}
          </a>
        </li>
      );
    });
  };

  const renderMobileMenu = () => {
    if (!navOpen) return <></>;
    let items = props.items;
    if (items[0] !== "Home") items.unshift("Home");

    return (
      <div className="mobile-menu">
        <ul className="nav-bar-item-list">{renderListItems(items)}</ul>
        <a
          className="secondary-btn"
          href="Resume_v2_FullStack_Austin_Vieth.pdf"
          download="Austin Vieth Resume"
        >
          Resume
        </a>
      </div>
    );
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        {isMobile && (
          <span
            className="material-icons menu-icon"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? "close" : "menu"}
          </span>
        )}

        {isMobile && renderMobileMenu()}

        {!isMobile && (
          <>
            <ul className="nav-bar-item-list">
              {renderListItems(props.items)}
            </ul>
            <a
              className="secondary-btn resume-btn"
              href="Resume_v2_FullStack_Austin_Vieth.pdf"
              download="Austin Vieth Resume"
            >
              Resume
            </a>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
