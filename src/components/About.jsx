import React, {useEffect, useRef} from 'react';
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import MyMap from "./MyMap.jsx";
import {styles} from "../styles";
import {services} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";
import confetti from 'canvas-confetti';

const ArtCard = ({imgSrc}) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
            className='w-full p-[1px] rounded-[20px] shadow-card overflow-hidden'
        >
            <img src={imgSrc} alt="Artwork" className='w-full h-auto object-cover'/>
        </motion.div>
    </Tilt>
);

const About = () => {

    useEffect(() => {
        // Trigger the confetti
        confetti({
            zIndex: 9999,
            particleCount: 150,
            spread: 160,
            origin: {y: 0.6}
        });
    }, []);
    const audioRef = useRef(null); // Reference to the audio element
    const playSong = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
    return (
        <>
            <div className="mt-4 flex justify-center items-center">
                <button
                    className="bg-pink-100 hover:bg-blue-700 text-white font-bold py-4 px-4 mb-14 rounded"
                    onClick={playSong}>
                    Space Song - Beach House
                </button>
                <audio ref={audioRef} src="/spacesong.mp3"/>
            </div>

            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>The one and only</p>
                <h2 className={styles.sectionHeadText}>Dear Hae Sol Kim,</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='text-white bg-gray-800 bg-opacity-80 text-secondary text-[17px] max-w-3xl leading-[30px] p-4 rounded-lg shadow-lg'
            >
                <p>In every laugh, a melody, in every smile, a light,</p>
                <p>With you, my world's a brighter place, each day and every night.</p>
                <p>You're the crimp that I climb, steady, strong, and sure,</p>
                <p className="mb-4">Scaling heights of happiness, in love that's pure.</p>

                <p>With wit as sharp as Catan's play, strategy in your mind,</p>
                <p>Every game a dance of thought, your brilliance always shined.</p>
                <p>We wander through our favorite shows, in tales of love and fate,</p>
                <p className="mb-4">In each scene, I find a piece of why you're truly great.</p>

                <p>Chippy chips in hand, we share this simple joy,</p>
                <p>In every crunch, a memory, no time could ever destroy.</p>
                <p>You're not just my love, but my best friend so dear,</p>
                <p className="mb-4">In every shared, small moment, our bond becomes more clear.</p>

                <p>On this day, your special day, I wish you all the best,</p>
                <p>May life gift you happiness, adventure, and zest.</p>
                <p>You make me so happy, in countless, untold ways,</p>
                <p className="mb-4">Here's to you, my darling, my booba, on your birthday and all days.</p>
            </motion.p>

            <motion.div variants={textVariant()} className="mt-10">
                <h2 className={styles.sectionHeadText}>In Galleries of Art, a Masterpiece Unveiled.</h2>
                <p className={styles.sectionSubText}>Through all the art I've experienced, you are the most unique and
                    beautiful I have ever seen.</p>

            </motion.div>
            <div className='mt-20 flex flex-wrap gap-10'>
                {[1, 2, 3, 4].map((num) => (
                    <ArtCard key={num} imgSrc={`/art${num}.jpeg`}/>
                ))}
            </div>
            {/*<MyMap />*/}
        </>
    );
};

export default SectionWrapper(About, "about");