import Blockchain from "../SvgFiles/solutions/Blockchain";
import CreativeMedia from "../SvgFiles/solutions/CreativeMedia";

export const cardsData2 = [
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