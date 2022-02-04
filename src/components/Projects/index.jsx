import React from "react";
import Title from "../shared/Title";
import LatestProject from "./LatestProject/index.jsx";
import ProjectContainer from "./ProjectsContainer";

//import'./style.css';

const Projects = (props) => {
  return (
    <section id="projects" className="pt-[5rem]">
    <LatestProject/>
      <div className="h-full pt-[5rem]">
        <Title title="Other Projects">
          These are some other Projects I made while Learning. (Click on project
          to know more)
        </Title>
        <ProjectContainer />
      </div>
    </section>
  );
};

export default Projects;
