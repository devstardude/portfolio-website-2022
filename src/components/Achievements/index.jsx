import { motion } from 'framer-motion';
import React from 'react';
import Title from '../shared/Title';
import Boxes from './Boxes';

const Achievements = ()=>{
    return (
      <section id="achievements" className="pt-[5rem]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          viewport={{ once: true }}
        >
          <Title title="Personal Achievements" />
          <Boxes />
        </motion.div>
      </section>
    );
};

export default Achievements ;