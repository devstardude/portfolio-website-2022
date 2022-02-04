import React from "react";
import { AiOutlineLaptop, AiOutlineGithub } from "react-icons/ai";
import "./style.css";

export const Links = (props) => {
  return (
    <div className="Scrollable-Div">
      <div className="ProjectLayout-VideoContainer ">
        <iframe
          title={props.name}
          className="ProjectLayout-youtube"
          src={props.youtubeLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ProjectLayout-ButtonWrapper">
        <a
          target="_blank"
          rel="noreferrer"
          href={props.projectLink}
          className="ProjectLayout-Button"
        >
          <AiOutlineLaptop className="mr-2" fontSize={24} />
          SEE WEBSITE
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={props.githubLink}
          className="ProjectLayout-Button"
        >
          <AiOutlineGithub className="mr-2" fontSize={24} />
          SEE CODE
        </a>
      </div>
    </div>
  );
};
export const Features = (props) => {
  return (
    <React.Fragment>
      <div className="Scrollable-Div">
        <p className="ProjectInfoTab-Title">
          Here are the Features that this app includes.
        </p>
        <div className="ProjectInfoTab-desc">{props.features}</div>
      </div>
    </React.Fragment>
  );
};
export const Stack = (props) => {
  return (
    <React.Fragment>
      <div className="Scrollable-Div">
        <p className="ProjectInfoTab-Title">
          Here's the stack that is used to build this app.
        </p>
        <div className="ProjectInfoTab-desc">{props.stack}</div>
      </div>
    </React.Fragment>
  );
};
