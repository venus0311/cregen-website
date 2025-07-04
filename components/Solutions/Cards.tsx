import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import HomeHeaderSlick from "../Slider";
import { cardsData1 } from "./cardsData1";
import { cardsData2 } from "./cardsData2";

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
const Cards = ({
}) => {
  const isSmallScreen = useIsSmallScreen();
  return (
    !isSmallScreen ? (
      <div className="relative flex w-full justify-center items-start gap-10">
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="relative pt-32 pb-[270px] justify-center items-center gap-10 space-y-10">
          {cardsData1.map((card, idx) => (
            <ImageCard
              key={idx}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              className="bg-[#05090A] rounded-xl p-8 z-20"
            >
              {card.children}
            </ImageCard>
          ))}

        </div>
        <div className="relative pt-32 pb-[270px] justify-center items-center gap-10 space-y-10">
          {cardsData2.map((card, idx) => (
            <ImageCard
              key={idx}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              className="bg-[#05090A] rounded-xl p-8 z-20"
            >
              {card.children}
            </ImageCard>
          ))}
        </div>
      </div>
    ) : (
      <HomeHeaderSlick />
    )
  );
};

export default Cards; 