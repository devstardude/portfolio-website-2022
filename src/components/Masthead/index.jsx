import { motion } from "framer-motion";
import React from "react";
import Heading from "./Heading";
import KnowMore from "./KnowMore";

import'./style.css';

const Masthead = (props) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 2,delay:1 }}
      className="Masthead-Wrapper"
    >
      <Heading />
      <KnowMore />
    </motion.div>
  );
};

export default Masthead;
