import { motion } from "framer-motion";
import React from "react";
import LogoIcon from "../LogoIcon";
import "./style.css";

const Logo = (props) => {
  return (
    <React.Fragment>
      <div className="Logo-Main-Wrapper">
        <motion.div
          className="Logo-Wrapper"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
        >
          <LogoIcon className="Logo-Icon" />
        </motion.div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -10 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="Logo-Text-Wrapper"
        >
          <p className="Logo-Text-Main">DEVSTARDUDE</p>
          <div>
            <p className="Font-explatus text-white text-[9px] pl-[1.7px]">
              DEVELOPER AND DESIGNER
            </p>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Logo;
