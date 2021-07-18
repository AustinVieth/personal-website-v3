import React from "react";

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      {props.centered ? (
        <div className="horizontal-rule">
          <hr></hr>
        </div>
      ) : null}
      <span>{props.label}</span>
      <div className="horizontal-rule">
        <hr></hr>
      </div>
    </div>
  );
};

export default SectionHeader;
