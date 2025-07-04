"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import showcase1 from "../../public/svgs/showcase1.gif"
import showcase2 from "../../public/svgs/showcase2.gif"
import showcase3 from "../../public/svgs/showcase3.gif"
import showcase4 from "../../public/svgs/showcase4.gif"
import showcase5 from "../../public/svgs/showcase5.gif"
import showcase6 from "../../public/svgs/showcase6.gif"


import Slider from "react-slick"
import { useEffect, useState } from "react"
import Image from "next/image"
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import type { StaticImageData } from "next/image";

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
    title: "Growfit - Mobile app fitfitness",
    Icon: showcase1,
    comment: "A modern fitness app designed for seamless user engagement and healthy lifestyle tracking."
  },
  {
    id: 2,
    title: "Fox Illustration",
    Icon: showcase2,
    comment: "A playful and elegant vector illustration, perfect for branding and digital storytelling."
  },
  {
    id: 3,
    title: "Teaching Portfolio (Book/Portfolio Cover)",
    Icon: showcase3,
    comment: "A clean, impactful portfolio cover that highlights creative teaching methodologies."
  },
  {
    id: 4,
    title: "Teaching Portfolio (Handwritten/Chalk Style)",
    Icon: showcase4,
    comment: "A dynamic, hand-drawn portfolio design that captures the essence of creative education."
  },
  {
    id: 5,
    title: "Geometric Abstract Design",
    Icon: showcase5,
    comment: "A bold, geometric composition for a manufacturer's brand, blending color and form for maximum impact."
  },
  {
    id: 6,
    title: "Web App Illustration",
    Icon: showcase6,
    comment: "A user-friendly web application interface, crafted for intuitive navigation and engaging user experience."
  },
];

function SolutionCard({ title, Icon, comment  }: { title: string, Icon: StaticImageData, comment: string }) {
  return (
    <div
      className="relative group w-full min-h-40 rounded-b-[30px] lg:max-w-[530px] px-2 sm:px-10"
    >
      <div className="w-full h-full rounded-2xl">
        <Image src={Icon} alt={title} className="w-full h-[530px] object-cover rounded-2xl" />
        <p className="text-[#B8E43F] text-base font-Neue mt-10">{title}</p>
        <p className="text-white text-base font-Neue mt-4">{comment}</p>

      </div>

    </div>
  );
}

const Discover = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const title = "to build with a Creative Generation"

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
          className="text-white text-2px lg:text-base text-start font-normal lg:w-1/4 uppercase"
        >
          discover what it means
        </motion.div>
        <motion.div
          ref={titleRef}
          initial="hidden"

          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="z-20 py-0 lg:py-[10px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B8E43F] text-xl text-center font-extrabold uppercase mb-20"
        >
          {title.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {isSmallScreen ? (
          <div className="w-full pb-20 lg:px-[77px] cursor-pointer mx-auto">
            <Slider {...sliderSettings}>
              {solutionsData.map((item) => (
                <div key={item.id} className="flex justify-center items-center w-full">
                  <SolutionCard title={item.title} Icon={item.Icon} comment={item.comment} />
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
            className="flex flex-wrap justify-center gap-20 lg:gap-20 w-full pb-20"
          >
            {solutionsData.map((item) => (
              <SolutionCard key={item.id} title={item.title} Icon={item.Icon} comment={item.comment} />
            ))}
          </motion.div>
        )}
      </div>
    </div>

  )
}

export default Discover

