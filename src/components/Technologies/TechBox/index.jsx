import React from "react";
import'./style.css';

const TechBox = (props) => {
  return (
    <div>
      <div className="Techbox-Icon">{props.icon}</div>
      <p className="Techbox-Title">{props.techTitle}</p>
      <p className="Techbox-desc">{props.desc}</p>
    </div>
  );
};

export default TechBox;
