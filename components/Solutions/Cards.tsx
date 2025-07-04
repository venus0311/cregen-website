import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import AiDevelop from "../SvgFiles/solutions/AiDevelop";
import Blockchain from "../SvgFiles/solutions/Blockchain";
import UI from "../SvgFiles/solutions/UI";
import CreativeMedia from "../SvgFiles/solutions/CreativeMedia";
import Image from "next/image";
import HomeHeaderSlick from "../Slider";
const cardsData1 = [
  {
    title: "Creative Media",
    description: `We craft content that captivates, converts, and connects.
From motion graphics to branded visuals, we bring stories to life.
Our media team blends art with impact.
Your brand becomes unforgettable.`,
    Icon: AiDevelop,
    children: <video src="/videos/CREGEN.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-2xl" />
  },
  {
    title: "White Label Systems",
    description: `Launch-ready platforms built for your brand.
From SaaS to fintech, fully customizable solutions.
You get speed, security, and flexibility.
Your product. Our technology. Zero compromise.`,
    children: (
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>White Label NFT Marketplace</li>
        <li>White Label Crypto Wallet</li>
        <li>White Label DeFi Platform</li>
        <li>White Label E-commerce Store</li>
        <li>White Label Learning Management System (LMS)</li>
        <li>White Label Booking System</li>
        <li>White Label Mobile App Builder</li>
        <li>White Label AI Chatbot Platform</li>
        <li>White Label Web3 Membership Platform</li>
        <li>White Label SaaS Dashboard (Analytics, CRM, etc.)</li>
      </ul>
    )
  },
  {
    title: "UI/UX Design",
    description: `We design interfaces that feel natural and intuitive.
  Every pixel is placed with purpose and precision.
  Users stay longer and connect deeper.
  Because great design isn’t seen—it’s felt.`,
    Icon: UI,
    children: (
      <Image
        src="/svgs/slide2.gif"
        alt="slider"
        className="overflow-hidden rounded-tr-3xl rounded-b-3xl cursor-grab w-full h-full object-cover"
        width={500}
        height={500}
      />
    )
  },
];
const cardsData2 = [
  {
    title: "AI Development",
    description: `We build intelligent systems that think ahead.
Custom AI models, automation, and smart solutions.
Designed to learn, adapt, and solve in real time.
Let your business move faster and smarter.`,
    Icon: Blockchain,
  },
  {
    title: "Blockchain & Web3",
    description: `We develop decentralized apps and secure smart contracts.
From DeFi platforms to NFTs and token systems.
We make blockchain simple, scalable, and powerful.
Step confidently into the Web3 world.`,
    Icon: CreativeMedia,
    children: (
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>NFT Marketplaces</li>
        <li>DeFi Platforms</li>
        <li>Tokenized Loyalty & Reward Systems</li>
        <li>Web3 Wallets</li>
        <li>DAO Platforms</li>
        <li>Blockchain-Based Identity Systems</li>
        <li>Supply Chain & Provenance Tracking</li>
        <li>Play-to-Earn & GameFi Platforms</li>
        <li>Real Estate Tokenization Platforms</li>
        <li>Cross-Chain Bridges & Oracles</li>
      </ul>
    )
  },
  {
    title: "Social media management",
    description: `We manage your social media presence.
From content creation to engagement.
We keep your brand visible and active.
Your audience stays connected.`,
  },
  {
    title: "App & Web Development",
    description: `We build apps and websites that work seamlessly.
From mobile to desktop, we deliver fast, reliable, and scalable solutions.
Your users get a smooth, intuitive experience.
Your business grows with every click.`,
    children: (
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>Custom E-commerce Platforms</li>
        <li>On-Demand Service Apps (e.g., delivery, booking)</li>
        <li>Social Networking Platforms</li>
        <li>Real-Time Chat & Messaging Apps</li>
        <li>Marketplace Platforms (multi-vendor)</li>
        <li>Content Management Systems (CMS)</li>
        <li>Learning & Course Platforms (LMS)</li>
        <li>Fintech & Banking Apps</li>
        <li>Business Dashboards & Admin Panels</li>
        <li>Event & Ticketing Platforms</li>
      </ul>
    )
  },
];
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