import * as React from "react";
import { useAnimationControls } from "framer-motion";
import { RotatingText } from "./RotatingText";
import ArrowRight1 from "./SvgFiles/ArrowRight1";
import AnimatedButton from "./Button";
import { useEffect } from "react";
import Link from "next/link";

const sentences = [
  "Ready to revolutionize your",
  "business with AI and",
  "blockchain? Contact us today",
  "and let's build the future",
  "together",
];

const Footer = () => {
  // Use individual hooks for each sentence
  const control0 = useAnimationControls();
  const control1 = useAnimationControls();
  const control2 = useAnimationControls();
  const control3 = useAnimationControls();
  const control4 = useAnimationControls();
  const controlsArray = [control0, control1, control2, control3, control4];

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let isMounted = true;
    const animateSentences = async () => {
      while (isMounted) {
        for (let i = 0; i < sentences.length; i++) {
          await controlsArray[i].start("rotate");
        }
      }
    };
    animateSentences();
    return () => { isMounted = false; };
  }, [mounted]);

  return (
    <div data-aos="fade-up" className={`relative w-full px-5 lg:px-[77px] h-full flex flex-col gap-32 lg:gap-64 mb-[122px] `}>
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
          <Link href="/contactUs" className="text-base text-center ">Get in Touch</Link>
          <ArrowRight1 />
        </AnimatedButton>
      </div>
      <div className="circle8"></div>
      <div className="circle9"></div>
    </div>
  );
};

export default Footer;
