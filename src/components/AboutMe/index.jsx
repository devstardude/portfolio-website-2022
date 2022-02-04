import { motion } from "framer-motion";
import React from "react";
import Title from "../shared/Title";

const AboutMe = () => {
  return (
    <section id="aboutme" className="pt-[5rem]">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Title title="About me">
          I&apos;m a professional Full-stack developer & designer focused on
          crafting Great web experiences. I enjoy solving real-world problems
          through programming and learning new technology is always exciting for
          me.
          <br />
          Apart from programming, I like jogging in the park on a nice evening.
          As it refreshes my brain and brings more creative ideas
        </Title>
      </motion.div>
    </section>
  );
};

export default AboutMe;
