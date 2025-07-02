"use client";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import HomeHeaderSlick from "../Slider";

const Projects = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const title = "Showcase"
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }
  return (
    <div className="relative w-full h-full my-[300px] flex flex-col items-center justify-between" data-aos="fade-up">
      <div className={`flex flex-col items-start gap-5 w-full z-20 transition-all duration-1000 ease-out`}>
        <div className="text-white text-[20px] lg:text-[26px] text-start font-normal  px-5 lg:px-[77px]">
          Our creative
        </div>
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-transparent  px-5 lg:px-[77px] bg-clip-text bg-gradient-to-r from-white to-[#398085] text-6xl lg:text-[132px] text-center font-extrabold mb-16 "
        >
          {title.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <HomeHeaderSlick />
      </div>

      <div className="circle6"></div>
      <div className="circle7"></div>
    </div>
  );
};

export default Projects;
