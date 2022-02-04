import React, { useState } from "react";
import ProjectItem from "../ProjectItem";
import { motion } from "framer-motion";
import {
  RiEmotionLaughFill,
  RiEmotionFill,
  RiEmotionHappyFill,
} from "react-icons/ri";
import projects from "./ProjectsList";
import "./style.css";
const tabVariant = {
  active: {
    width: "50%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
  inactive: {
    width: "15%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};

const tabTextVariant = {
  active: {
    opacity: 1,
    x: 0,
    display: "block",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
    },
  },
  inactive: {
    opacity: 0,
    x: -30,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.1,
    },
    transitionEnd: { display: "none" },
  },
};

const tabs = [
  {
    title: "Awesome",
    id: "Awesome",
    icon: <RiEmotionLaughFill fontSize={24} />,
    color: "rgb(65, 145, 249)",
    cardColor: "rgb(65, 145, 249,0.2)",
  },
  {
    title: "Intermediate",
    id: "Intermediate",
    icon: <RiEmotionFill fontSize={24} />,
    color: "rgba(0, 164, 137)",
    cardColor: "rgba(0, 164, 137, 0.2)",
  },
  {
    title: "Beginner",
    id: "Beginner",
    icon: <RiEmotionHappyFill fontSize={24} />,
    color: "rgb(93, 93, 255)",
    cardColor: "rgb(93, 93, 255,0.2)",
  },
];

const ProjectContainer = (props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeProjects, setActiveProjects] = useState(0);
  const onTabClick = (index) => {
    setActiveTabIndex(index);
    if (index === 0) {
      setActiveProjects(0);
    } else if (index === 1) {
      setActiveProjects(2);
    } else {
      setActiveProjects(4);
    }
  };
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--active-color",
      tabs[activeTabIndex].color
    );
    document.documentElement.style.setProperty(
      "--active-cardColor",
      tabs[activeTabIndex].cardColor
    );
  }, [activeTabIndex, tabs]);
  return (
    <React.Fragment>
      <div className="bg-[#0F1624] pt-0 sm:pt-6 md:pt-10">
        <div className="">
          <ul className="noselect Tab-List" role="tablist">
            {tabs.map((tab, index) => (
              <motion.li
                key={tab.id}
                className={`noselect Tab-Item ${
                  activeTabIndex === index && "active"
                }`}
                role="presentation"
                variants={tabVariant}
                animate={activeTabIndex === index ? "active" : "inactive"}
              >
                <div
                  className="Tab-Text cursor-pointer"
                  onClick={() => onTabClick(index)}
                >
                  {tab.icon}
                  <motion.span variants={tabTextVariant}>
                    {tab.title}
                  </motion.span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="ProjectContainer-Project-Item">
          {projects.slice(activeProjects, activeProjects + 2).map((project) => (
            <motion.div
              key={project.name}
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectItem
                key={project.name}
                name={project.name}
                description={project.description}
                image={project.image}
                tech={project.tech}
                youtubeLink={project.youtubeLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectContainer;
