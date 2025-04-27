import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div              //tilt options
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' //cards formating
      >
        <img           //icons
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Personal Values: I love science and engineering. <span style={{ fontWeight: "bold" }}>A lifelong journey of learning and adventure is my goal.</span>
      <br />
      Present: Currently, I found something really interesting to work on, and that is controls systems and robotics for nuclear industry at <span style={{ fontWeight: "bold" }}>Westinghouse Electric Company</span>. I am surprised every day of how much I can learn.
      <br />
      Education: I am currently studying Mechatronics Engineering. I found the nuclear energy industry really interesting it is evolving and has a great number of really powerful applications.
      <br />
      Self Learning: I was able to learn deeply about <span style={{ fontWeight: "bold" }}>perception for autonomous vehicles</span>, as well as <span style={{ fontWeight: "bold" }}>battery cell characterization for electric vehicles at University Technical teams.</span> Furthermore, I believe these two are the most important and impactful components of a next-generation vehicle, and I am very grateful to continue learning about it.
      <br />
      I hope to keep growing and learning, so <span style={{ fontWeight: "bold" }}>feel free to message me</span> if an opportunity hits.
    </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");
 