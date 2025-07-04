import Image from "next/image";
import UI from "../SvgFiles/solutions/UI";
import AiDevelop from "../SvgFiles/solutions/AiDevelop";

export const cardsData1 = [
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