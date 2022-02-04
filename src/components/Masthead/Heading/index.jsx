import { motion } from "framer-motion";
import React from "react";
import "./style.css";

const Heading = (props) => {
  return (
    <div className="Heading-Main-Wrapper">
      <div className="Heading-Wrapper">
        <p className="Heading-One">Who me ?</p>
        <p className="Heading-Two">Just a guy who&apos;s a</p>
        <p className="Heading-Three">
          DEVELOPER <span className="text-[#AC050B]">/</span> DESIGNER
        </p>
        <p className="Heading-Four">
          For the fun of it ?{" "}
          <motion.p
            animate={{ x: 3, opacity: 1 }}
            initial={{ x: -3, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 2, delay: 2 }}
            className="Heading-Five"
          >
            coz I ❤️ it
          </motion.p>
        </p>
      </div>
    </div>
  );
};

export default Heading;
