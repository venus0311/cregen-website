"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import AIDevelopment from "./SvgFiles/AIDevelopment"
import Blockchain from "./SvgFiles/Blockchain"
import AIBlockchain from "./SvgFiles/AIBlockchain"
import WhiteLabel from "./SvgFiles/whiteLabel"
import MobileApp from "./SvgFiles/mobileApp"
import Consulting from "./SvgFiles/consulting"
import CanvasAnimation from "@/hooks/CanvasAnimation"

const Solutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const title = "Solutions"

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
    <div className="w-full h-full" >
      <CanvasAnimation />
      <div data-aos="fade-down"
        className={`" w-full h-full px-5 lg:px-[77px] pt-5 flex flex-col items-center justify-end`}>
        <motion.div
          ref={titleRef}
          initial="hidden"

          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="z-20 py-0 lg:py-[10px] mt-24 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B8E43F] text-6xl lg:text-[132px] text-center font-extrabold"
        >
          {title.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white text-2px lg:text-[26px] text-center font-normal lg:w-1/4 mb-14"
        >
          Every service we provide we do with passion
        </motion.div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 w-full pb-20"
        >

          <div
            className="relative group w-full min-h-40 rounded-b-[30px] rounded-tr-[30px] border-2 border-transparent bg-[#FFFFFF1A] px-6 py-[26px] backdrop-blur-[2px] text-white group-hover:border-2 hover:border-[#B8E43F] transition-colors duration-300"
          >
            <h3 className="text-lg font-normal w-1/2">AI Development Services</h3>
            <AIDevelopment />
          </div>
          <div
            className=" relative group w-full min-h-40 rounded-b-[30px] rounded-tr-[30px] border-2 border-transparent bg-[#FFFFFF1A] px-6 py-[26px] backdrop-blur-[2px] text-white group-hover:border-2 hover:border-[#B8E43F] transition-colors duration-300"
          >
            <h3 className="text-lg font-normal w-1/2">Blockchain Development</h3>
            <Blockchain />
          </div>
          <div
            className=" relative group w-full min-h-40 rounded-b-[30px] rounded-tr-[30px] border-2 border-transparent bg-[#FFFFFF1A] px-6 py-[26px] backdrop-blur-[2px] text-white group-hover:border-2 hover:border-[#B8E43F] transition-colors duration-300"
          >
            <h3 className="text-lg font-normal w-1/2">AI & Blockchain Hybrid Solutions</h3>
            <AIBlockchain />
          </div>
          <div
            className=" relative group w-full min-h-40 rounded-b-[30px] rounded-tr-[30px] border-2 border-transparent bg-[#FFFFFF1A] px-6 py-[26px] backdrop-blur-[2px] text-white group-hover:border-2 hover:border-[#B8E43F] transition-colors duration-300"
          >
            <h3 className="text-lg font-normal w-1/2">White Label Systems</h3>
            <WhiteLabel />
          </div>
          <div
            className=" relative group w-full min-h-40 rounded-b-[30px] rounded-tr-[30px] border-2 border-transparent bg-[#FFFFFF1A] px-6 py-[26px] backdrop-blur-[2px] text-white group-hover:border-2 hover:border-[#B8E43F] transition-colors duration-300"
          >
            <h3 className="text-lg font-normal w-1/2">Mobile App Development</h3>
            <MobileApp />
          </div>
          <div
            className=" relative group w-full min-h-40 rounded-b-[30px] rounded-tr-[30px] border-2 border-transparent bg-[#FFFFFF1A] px-6 py-[26px] backdrop-blur-[2px] text-white group-hover:border-2 hover:border-[#B8E43F] transition-colors duration-300"
          >
            <h3 className="text-lg font-normal w-1/2">Consulting Services</h3>
            <Consulting />
          </div>
        </motion.div>
        <div
          className={`text-white text-2px text-center font-normal w-full md:w-1/2 z-20 mt-2 transition-all duration-1000 ease-out`}
        >
          we help businesses scale efficiently, improve transparency, and create new revenue opportunities.
        </div>
      </div>
    </div>

  )
}

export default Solutions

