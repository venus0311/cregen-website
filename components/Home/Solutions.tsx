"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import AIDevelopment from "../SvgFiles/AIDevelopment"
import Blockchain from "../SvgFiles/Blockchain"
import AIBlockchain from "../SvgFiles/AIBlockchain"
import WhiteLabel from "../SvgFiles/whiteLabel"
import MobileApp from "../SvgFiles/mobileApp"
import Consulting from "../SvgFiles/consulting"
import Slider from "react-slick"
import { useEffect, useState } from "react"
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Custom hook to detect if screen is small (sm: 640px or less)
function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsSmall(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return isSmall;
}

const solutionsData = [
  {
    id: 1,
    title: "AI Development Services",
    Icon: AIDevelopment,
  },
  {
    id: 2,
    title: "Blockchain Development",
    Icon: Blockchain,
  },
  {
    id: 3,
    title: "AI & Blockchain Hybrid Solutions",
    Icon: AIBlockchain,
  },
  {
    id: 4,
    title: "White Label Systems",
    Icon: WhiteLabel,
  },
  {
    id: 5,
    title: "Mobile App Development",
    Icon: MobileApp,
  },
  {
    id: 6,
    title: "Consulting Services",
    Icon: Consulting,
  },
];

function SolutionCard({ title, Icon }: { title: string, Icon: React.FC }) {
  return (
    <div
      className="relative group w-full min-h-40 rounded-b-[30px] rounded-tr-[30px] border-2 border-transparent bg-[#FFFFFF1A] px-6 py-[26px] backdrop-blur-[2px] text-white group-hover:border-2 hover:border-[#B8E43F] transition-colors duration-300 gap-4 mt-10"
    >
      <h3 className="text-lg font-normal w-1/2">{title}</h3>
      <Icon />
    </div>
  );
}

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

  const isSmallScreen = useIsSmallScreen();

  const sliderSettings = {
    className: "center",
    centerMode: false,
    infinite: true,
    dots: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-full" >
      <div data-aos="fade-down"
        className={`" w-full h-full px-5 lg:px-[77px] pt-5 flex flex-col items-start justify-end`}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white text-2px lg:text-[26px] text-start font-normal lg:w-1/4"
        >
          Our core
        </motion.div>
        <motion.div
          ref={titleRef}
          initial="hidden"

          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="z-20 py-0 lg:py-[10px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B8E43F] text-6xl lg:text-[132px] text-center font-extrabold"
        >
          {title.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {isSmallScreen ? (
          <div className="w-full pb-20 px-5 lg:px-[77px]">
            <Slider {...sliderSettings}>
              {solutionsData.map((item) => (
                <div key={item.id} className="px-2">
                  <SolutionCard title={item.title} Icon={item.Icon} />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 w-full pb-20"
          >
            {solutionsData.map((item) => (
              <SolutionCard key={item.id} title={item.title} Icon={item.Icon} />
            ))}
          </motion.div>
        )}
      </div>
    </div>

  )
}

export default Solutions

