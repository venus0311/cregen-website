import React from "react";
import TheStory from "../SvgFiles/home/TheStory";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-40">
      {/* Polygon/Crystal Video */}
      <div className="relative flex items-center justify-center w-[350px] h-[350px]">
        <video
          src="/videos/footerb.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] z-20 object-cover [mix-blend-mode:lighten]"
        />
        {/* Glowing Text Overlay */}
        <span className="absolute inset-0 flex items-center justify-center text-[2.5rem] md:text-[3.5rem] font-bold text-[#eaffd0] font-Neue"
          style={{
            textShadow: "0 0 24px #eaffd0, 0 0 48px #b8e43f, 0 0 8px #fff"
          }}>
          cregen
        </span>
      </div>
    </div>
  );
}
