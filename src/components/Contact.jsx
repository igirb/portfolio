import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    return (
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <div className="mt-10 flex flex-col gap-4">
                    <div className="flex flex-col">
                        <span className="text-white font-medium mb-4">Join forces with me and create something extraordinary together! 🌟</span>
                        <a
                            href="https://www.linkedin.com/in/igirb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-tertiary py-3 px-6 rounded-lg text-white font-medium text-center shadow-md shadow-primary hover:bg-primary transition-colors mt-4"
                        >
                            LinkedIn
                        </a>
                        <span className="text-white font-medium mt-8">Or catch me on: </span>
                        <a
                            href="https://www.facebook.com/brigijasz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-tertiary py-3 px-6 rounded-lg text-white font-medium text-center shadow-md shadow-primary hover:bg-primary transition-colors mt-4"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.instagram.com/iigirb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-tertiary py-3 px-6 rounded-lg text-white font-medium text-center shadow-md shadow-primary hover:bg-primary transition-colors mt-4"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas/>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
