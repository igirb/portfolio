import React from "react";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
      <p>{title}</p>
  )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

          <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I am an enthusiastic junior Full-Stack Developer, DevOps Engineer and future Cybersecurity Engineer
            dedicated to crafting scalable, reliable software solutions.
            <br className='sm:block hidden'/>
            My expertise spans both frontend and backend development with a robust foundation in DevOps, I excel at
            bridging the gap between development and operations.
            <br className='sm:block hidden'/>
            Driven by an insatiable curiosity, I am committed to continuous learning, professional growth
            and I stay engaged with the latest technological trends.
            <br className='sm:block hidden'/>
            Let’s work together to create a future where technology harmonizes with our visions!
          </motion.p>

          <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </>
    )
}

export default About;