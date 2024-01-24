import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FaRegStar } from "react-icons/fa"; // Example icon import


const hardcodedExperiences = [
    {
        date: "December 24, 2021",
        title: "Covid Christmas 🎅🧑‍🎄",
        description: "The Christmas we spent together, and you got us awesome matching Santa outfits :) I loved that entire winter break that I got to wake up next to you almost everyday. I miss it now more than ever."
    },
    {
        date: "July 7, 2022",
        title: "New Hobbies 🧗",
        description: "When you felt unfulfilled and wanted something new and fun to be passionate about so you suggested we go climbing at basecamp and the rest is history. Now look at you doing pull-ups and sending higher v's than I can."
    },
    {
        date: "November 6, 2022",
        title: "Spontaneous Trip to Barrie 🍒",
        description: "The day you said hey, I want to go somewhere and have a relaxing time! And so we had a spa and climb trip in the quiet peaceful town of Barrie. And did shenanigans at the hotel hehe. 😳"
    },
    {
        date: "June 15, 2023",
        title: "Graduating UofT 📝 🎓",
        description: "Academic weapon. You conquered one of the most prestigious schools in the world with outstanding grades and still kept your sanity. Truly a demon performance I am so proud of you."
    },
    // Add more experiences as needed
];

// ... Rest of the Experience component


const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    This timeline is a tribute to a few instances you've wowed me...
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    A Timeline of Awe
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {hardcodedExperiences.map((exp, index) => (
                        <VerticalTimelineElement
                            // ...
                            date={exp.date}
                            dateClassName="text-black"
                            iconStyle={{ background: "black", color: "#df68b4" }}
                            icon={<FaRegStar />}
                        >
                            <h3 className='text-black text-[24px] font-bold'>{exp.title}</h3>
                            <p className='text-black text-[16px] font-semibold'>
                                {exp.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
