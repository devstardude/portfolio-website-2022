import { motion } from "framer-motion";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
//import'./style.css';

const SocialLinks = (props) => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <React.Fragment>
      <div className="">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
          className="flex w-[220px] justify-between"
        >
          <motion.li variants={item}>
            <AiFillGithub
              size="30px"
              color="white"
              className="transform transition duration-500 hover:scale-[1.3] cursor-pointer"
            />
          </motion.li>
          <motion.li variants={item}>
            <AiFillInstagram
              size="30px"
              color="white"
              className="transform transition duration-500 hover:scale-[1.3] cursor-pointer"
            />
          </motion.li>
          <motion.li variants={item}>
            <AiFillLinkedin
              size="30px"
              color="white"
              className="transform transition duration-500 hover:scale-[1.3] cursor-pointer"
            />
          </motion.li>
          <motion.li variants={item}>
            <AiFillYoutube
              size="30px"
              color="white"
              className="transform transition duration-500 hover:scale-[1.3] cursor-pointer"
            />
          </motion.li>
        </motion.ul>
      </div>
    </React.Fragment>
  );
};

export default SocialLinks;
