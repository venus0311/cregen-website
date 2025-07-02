import React from "react";

const DiamondCard = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-40">
      {/* Top Text */}
      <p className="max-w-2xl text-center text-white text-sm md:text-base font-Neue mb-10 mt-8">
        AI and blockchain development, offering cutting-edge solutions across industries.
        This plan outlines the strategic vision, services, revenue streams, and operational
        structure for sustained growth
      </p>

      {/* Card */}
      <div className="flex flex-col items-center px-6 py-12 max-w-xl w-full">
        {/* Video */}
        <div className="absolute left-1/2 top-[430px] -translate-x-1/2 sm:w-[652px] sm:h-[520px] w-[360px] h-[440px] bg-black rounded-[30px]  z-10" />
        <div className="flex justify-center mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-[414px] sm:h-[414px] w-[260px] h-[260px] z-20 object-cover [mix-blend-mode:lighten]"
          >
            <source src="/videos/dimond.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Bottom Text */}
        <p className="text-white text-center text-sm md:text-base font-Neue z-10 sm:w-full w-[340px]">
          At the heart of Cregen lies a commitment to revolutionizing industries through the synergy of AI and blockchain. Our solutions go beyond conventional technologies, enabling businesses to harness data-driven insights, automate complex processes, and enhance security like never before.
        </p>
      </div>
      <div className="circle"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
    </div>
  );
};

export default DiamondCard;