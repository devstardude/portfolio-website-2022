import { motion } from "framer-motion";
import React from "react";
import Title from "../shared/Title";
import LatestProject from "./LatestProject/index.jsx";
import ProjectContainer from "./ProjectsContainer";

//import'./style.css';

const Projects = (props) => {
  return (
    <section id="projects" className="pt-[5rem]">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <LatestProject />
      </motion.div>
      <div className="h-full pt-[5rem]">
        <motion.div
          initial={{ x: 100, opacity: 0 ,}}
          whileInView={{ x: 0, opacity: 1,}}
          transition={{ ease: "easeOut", duration: 1 }}
          viewport={{ once: true }}
        >
          <Title title="Other Projects">
            These are some other Projects I made while Learning. (Click on
            project to know more)
          </Title>
          <ProjectContainer />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
