import React from "react";
import Title from "../shared/Title";
import TechBox from "./TechBox";
import { SiReact, SiDiscord } from "react-icons/si";
import { GoDatabase, GoDeviceDesktop } from "react-icons/go";
import {
  AiFillDatabase,
  AiFillCloud,
  AiOutlineCode,
  AiOutlineProject,
} from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";

import'./style.css';

const Technologies = (props) => {
  return (
    <section id="technologies" className="Tech-Main-Wrapper">
      <Title
        title="Technologies"
      >
        I&apos;ve worked with a range a technologies in the programming world. Be it
        Full Stack web application, Designing, Project management or Bot
        creation.
      </Title>
      <div className="Tech-Techbox-Wrapper">
        <div className="Tech-Techbox-Grid">
          {techs.map((tech) => (
            <TechBox
              key={tech.title}
              techTitle={tech.title}
              desc={tech.desc}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
const techs = [
  {
    title: "Front-End",
    desc: "React and Redux",
    icon: <SiReact color="white" fontSize={35} />,
  },
  {
    title: "Back-End",
    desc: "Node, Express, REST, GraphQL",
    icon: <AiFillDatabase color="white" fontSize={35} />,
  },
  {
    title: "Database",
    desc: "MongoDB, Firestore, DynamoDB ",
    icon: <GoDatabase color="white" fontSize={35} />,
  },
  {
    title: "UI/UX",
    desc: "Tailwind CSS, Material UI, Framer motion",
    icon: <GoDeviceDesktop color="white" fontSize={35} />,
  },
  {
    title: "Cloud Services",
    desc: "Firebase, AWS",
    icon: <AiFillCloud color="white" fontSize={35} />,
  },
  {
    title: "Version Tracking",
    desc: "Git, Github",
    icon: <FaGitAlt color="white" fontSize={35} />,
  },
  {
    title: "Languages",
    desc: "Python, JavaScript, C++",
    icon: <AiOutlineCode color="white" fontSize={35} />,
  },
  {
    title: "Discord Bot",
    desc: "Fully Functional Bot in Discord.js",
    icon: <SiDiscord color="white" fontSize={35} />,
  },
  {
    title: "Project Management",
    desc: "Notion, Asana, Trello, Slack",
    icon: <AiOutlineProject color="white" fontSize={35} />,
  },
];

export default Technologies;
