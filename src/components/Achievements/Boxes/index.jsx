import React from "react";

import "./style.css";

const Boxes = (props) => {
  return (
    <React.Fragment>
      <div className="Boxes-Main-wrapper">
        {allInfo.map((info, index) => (
          <Box key={index} number={info.number} desc={info.desc} />
        ))}
      </div>
    </React.Fragment>
  );
};
const Box = (props) => {
  return (
    <div>
      <div className="Boxes-Box-Wrapper">
        <p className="Boxes-Box-Number ">{props.number}</p>
        <p className="Boxes-Box-Text">{props.desc}</p>
      </div>
    </div>
  );
};

const allInfo = [
  { number: "100+", desc: "Member club's Joint secreatary" },
  {
    number: "500+",
    desc: "Attendandees in a virtual session about web dev kickstart",
  },
  { number: "10+", desc: "Participation in Hackathons" },
];

export default Boxes;
