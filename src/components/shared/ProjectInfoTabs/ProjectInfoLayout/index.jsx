import React from "react";
import { AiOutlineLaptop, AiOutlineGithub } from "react-icons/ai";
import "./style.css";

export const Links = (props) => {
  return (
    <div className="">
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
          <div className="ProjectLayout-Button">
            <AiOutlineLaptop className="mr-2" fontSize={24} />
            SEE WEBSITE
          </div>
          <div className="ProjectLayout-Button">
            <AiOutlineGithub className="mr-2" fontSize={24} />
            SEE CODE
          </div>
        </div>
      </div>
    </div>
  );
};
export const Features = (props) => {
  return (
    <React.Fragment>
      <div>Features</div>
    </React.Fragment>
  );
};
export const Stack = (props) => {
  return (
    <React.Fragment>
      <div>Stack</div>
    </React.Fragment>
  );
};
