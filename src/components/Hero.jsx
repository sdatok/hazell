import {motion} from "framer-motion";
import {useState} from 'react';
import {styles} from "../styles";

const Hero = () => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <section className={`relative w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#df68b4]'/>
                    <div className='w-1 sm:h-80 h-40 violet-gradient'/>
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Happy Birthday <span className='text-[#df68b4]'>Booba</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        let's celebrate 23 years of you <br className='sm:block hidden'/>
                        with this little website 💕
                    </p>
                    {/* Add the birthday cake image here */}
                    <div
                        className="flex items-center justify-center mt-4"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <img
                            src="/birthdaycake.png"
                            alt="Birthday Cake"
                            className="w-1/2 h-auto mx-auto mt-4"
                        />
                        {isHovering && (
                            <div className="p-4 bg-white rounded shadow-lg ml-2 text-black">
                                <p>Please enjoy this virtual Hello Kitty cake 😳</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/*<div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>*/}
            {/*    <a href='#about'>*/}
            {/*        <div*/}
            {/*            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>*/}
            {/*            <motion.div*/}
            {/*                animate={{*/}
            {/*                    y: [0, 24, 0],*/}
            {/*                }}*/}
            {/*                transition={{*/}
            {/*                    duration: 1.5,*/}
            {/*                    repeat: Infinity,*/}
            {/*                    repeatType: "loop",*/}
            {/*                }}*/}
            {/*                className='w-3 h-3 rounded-full bg-secondary mb-1'*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </a>*/}
            {/*</div>*/}
        </section>
    );
};

export default Hero;