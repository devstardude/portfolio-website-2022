import React from "react";
import ModalComponent from "../../shared/ModalComponent";

import "./style.css";

const ProjectItem = (props) => {
  return (
    <ModalComponent {...props}>
      <div className="ProjectItem-Main-Wrapper">
        <div className="ProjectItem-ImageContainer">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="ProjectItem-TitleContainer">{props.name}</div>
        <div className="ProjectItem-DescContainer">{props.description}</div>
        <div className="ProjectItem-TechContainer">
          {props.tech.map((t) => (
            <div className="ProjectItem-Tech" key={t}>
              {t}
            </div>
          ))}
        </div>
      </div>
    </ModalComponent>
  );
};

export default ProjectItem;
