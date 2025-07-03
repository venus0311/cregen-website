import React from "react";
import GetInTouch from "../GetInTouch";
const OurStory = () => {
    return (
        <div data-aos="fade-down" className="relative min-h-screen flex items-center justify-center lg:flex-row flex-col px-4 py-40">
            {/* Top Text */}
            <div className="flex flex-col items-start justify-center ">
                <p className="max-w-2xl text-center text-white text-[80px] sm:text-[112px] font-Neue uppercase leading-none">
                    Our
                </p>
                <p className="max-w-2xl text-start text-white text-[80px] sm:text-[112px] font-Neue uppercase leading-none">
                    Story
                </p>
                <p className="max-w-2xl text-start text-white text-base font-Neue">
                    Born in the UAE. Built for the world.
                </p>
                <p className="max-w-2xl text-start text-white text-base font-Neue ">
                    Cregen is more than a company—it’s a movement shaped by a Creative Generation. Rooted in the innovative spirit of the UAE and powered by a global vision, we are a team of boundary-pushers: developers, designers, strategists, and storytellers united by one mission—to build the future.
                </p>
                <p className="max-w-2xl text-start text-white text-base font-Neue">
                    We didn’t come to follow trends.We came to shape them.
                </p>
            </div>
            {/* Card */}
            <div className="flex flex-col items-center px-6 py-12 max-w-xl w-full">
                {/* Video */}
                <div className="flex justify-center mb-8">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] z-20 object-cover [mix-blend-mode:lighten]"
                    >
                        <source src="/videos/dimond.mp4" type="video/mp4" />
                    </video>
                </div>
                <GetInTouch />
            </div>

            {/* Circles */}
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
        </div>
    );
};

export default OurStory;