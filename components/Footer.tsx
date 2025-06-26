import * as React from "react";
import { useAnimationControls } from "framer-motion";
import { RotatingText } from "./RotatingText";
import ArrowRight1 from "./SvgFiles/ArrowRight1";
import Bot from "./SvgFiles/bot";
import Facebook from "./SvgFiles/Facebook";
import Instagram from "./SvgFiles/Instagram";
import Linkdin from "./SvgFiles/Linkdin";
import Logo from "./SvgFiles/Logo";
import AnimatedButton from "./Button";

const sentences = [
  "Ready to revolutionize your",
  "business with AI and",
  "blockchain? Contact us today",
  "and let's build the future",
  "together",
];

const footerLinks = [
  {
    items: [
      "Home",
      "About Us",
      "Solutions"
    ],
  },
  {
    items: [
      "Showcases",
      "Carrers",
      "Contact US",
    ],
  },
  {
    items: [
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];

const Footer = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const controlsArray = sentences.map(() => useAnimationControls());
  React.useEffect(() => {
    const animateSentences = async () => {
      while (true) {
        for (let i = 0; i < sentences.length; i++) {
          await controlsArray[i].start("rotate");
        }
      }
    };

    animateSentences();
  }, [controlsArray]);

  return (
    <div data-aos="fade-up" className={`relative w-full px-5 lg:px-[50px] h-full flex flex-col gap-32 lg:gap-64 mb-[122px] `}>
      <div className="flex flex-col gap-1">
        {sentences.map((text, index) => (
          <RotatingText
            key={index}
            text={text}
            stagger={0.1}
            timing={0.5}
            className="text-white text-2xl lg:text-[42px] text-left font-extrabold w-full leading-[50px]"
            animate={controlsArray[index]}
          />
        ))}
        <AnimatedButton className="flex items-center border-solid border-[1.5px] border-transparent animated-gradient-border cursor-pointer rounded-full p-4 max-w-[178px] text-gray-200 justify-center gap-3 mt-10">
          <p className="text-base text-center ">Get in Touch</p>
          <ArrowRight1 />
        </AnimatedButton>
      </div>

      <div className="w-full z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {footerLinks.map((column, colIdx) => (
            <div className="space-y-4" key={colIdx}>
              <ul className="space-y-2 text-base text-white">
                {column.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-yellow-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-10 items-start lg:items-end">
            <AnimatedButton className="flex items-center border-solid border-[1.5px] border-transparent animated-gradient-border cursor-pointer rounded-full p-4 text-gray-200 justify-center gap-10">
              <p className="text-base text-center ">AI support</p>
              <Bot />
            </AnimatedButton>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex gap-4">
                <Instagram />
                <Facebook />
                <Linkdin />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 flex flex-col items-center justify-between gap-4">
          <Logo />
          <p className="text-sm text-gray-400">© 2025 Cregen. All Rights Reserved.</p>
        </div>
      </div>

      <div className="circle8"></div>
      <div className="circle9"></div>
    </div>
  );
};

export default Footer;
