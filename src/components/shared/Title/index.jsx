import React from "react";

import "./style.css";

const Title = (props) => {
  return (
    <React.Fragment>
      <div className="Title-Main-Wrapper">
        <div className="Title-Red-Bar"></div>
      </div>
      <div className="flex">
        <p className="TitleText Title-Main-Title">{props.title}</p>
      </div>
      <div className="pt-[0.5rem]">
        <p className="Title-Main-desc">{props.children}</p>
      </div>
    </React.Fragment>
  );
};

export default Title;
