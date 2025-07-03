import React from "react";
import GetInTouch from "../GetInTouch";
const TheVision = () => {
    return (
        <div data-aos="fade-down" className="w-full">
            <div className="min-h-screen flex lg:items-center items-center justify-center lg:gap-10 lg:flex-row flex-col px-4 py-40">
                <div className="flex flex-col items-start justify-start lg:pt-56 max-w-xl">
                    <p className="text-white text-[60px] sm:text-[102px] font-Neue uppercase text-start leading-none">The Cregen</p>
                    <p className="text-white text-[60px] sm:text-[102px] font-Neue uppercase text-start leading-none">Vision</p>
                    <p className="max-w-lg text-start text-white text-base font-Neue ">
                        We envision a world where innovation is intuitive, and creativity is the currency of change. Every pixel we place, every line of code we write, and every strategy we develop is meant to bridge imagination with execution.
                    </p>
                    <p className="text-white text-[60px] sm:text-[102px] font-Neue uppercase text-start leading-none mt-44">Built to Think Global.</p>
                    <p className="text-white text-[60px] sm:text-[102px] font-Neue uppercase text-start leading-none">Designed to feel local.</p>
                    <p className="max-w-lg text-start text-white text-base font-Neue ">
                        Though proudly rooted in the UAE, our reach knows no borders. We work with global clients, bringing an Emirati sense of ambition, elegance, and excellence to every project—no matter where in the world it lives.
                    </p>
                </div>
                <div className="flex justify-between flex-col">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="sm:w-[700px] sm:h-[700px] w-[300px] h-[300px] z-20 object-cover [mix-blend-mode:lighten]"
                    >
                        <source src="/videos/footerb.mp4" type="video/mp4" />
                    </video>
                    <GetInTouch />
                </div>
                {/* Circles */}
                <div className="circle6"></div>
                <div className="circle7"></div>
                <div className="circle8"></div>
                <div className="circle9"></div>
            </div>
        </div>
    );
};

export default TheVision;