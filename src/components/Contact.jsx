import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <h2 className={styles.sectionHeadText}>I love you.</h2>
                <p className={styles.sectionSubText}>
                    In the boundless expanse of our universe, among the countless stars and infinite particles, our paths crossed – a cosmic coincidence that I cherish every day. As this globe spins, mirroring the ceaseless dance of celestial bodies, I'm reminded of the astronomical odds that brought us together. In a universe filled with billions of galaxies, each teeming with trillions of stars, it's you who lights up my world. Our meeting was less likely than finding a single star in the night sky, yet here we are, a testament to the beautiful unpredictability of the cosmos.
                </p>
                <div className="mt-4">
                <p className={styles.sectionSubText}>
                    Forever and always,
                </p>
                </div>
                <p className={styles.sectionSubText}>
                    Sonam
                </p>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
