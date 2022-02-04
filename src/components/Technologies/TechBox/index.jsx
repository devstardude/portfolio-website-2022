import { motion } from "framer-motion";
import React from "react";
import "./style.css";

const boxItem = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
};

const TechBox = (props) => {
  return (
    <motion.div variants={boxItem} className="decoration-transparent">
      <div className="Techbox-Icon">{props.icon}</div>
      <p className="Techbox-Title">{props.techTitle}</p>
      <p className="Techbox-desc">{props.desc}</p>
    </motion.div>
  );
};

export default TechBox;
