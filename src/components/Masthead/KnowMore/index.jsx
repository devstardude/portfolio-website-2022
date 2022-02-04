import React from "react";
import { Link } from "react-scroll";
import "./style.css";

const KnowMore = () => {
  return (
    <React.Fragment>
      <div className="Know-Main-Wrapper noselect">
        <Link
          activeClass="active "
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <button className="Know-Project-Button Know-Red-Button">
            <p className="">See Projects</p>
          </button>
        </Link>
        <Link
          activeClass="active "
          to="technologies"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <div className="Know-Project-Button Know-Dull-Button">Skills</div>
        </Link>
        <Link
          activeClass="active "
          to="aboutme"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <div className="Know-Project-Button Know-Dull-Button">About</div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default KnowMore;
