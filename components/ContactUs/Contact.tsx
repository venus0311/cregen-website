import React from "react";
import GetInTouch from "../GetInTouch";
const Contact = () => {
    return (
        <div data-aos="fade-down" className="relative flex flex-col items-start justify-center text-white font-Neue sm:pt-40 pl-4 sm:pl-[100px] gap-6 sm:gap-10 pr-4 min-h-screen">
            {/* Top Text */}
            <div className="flex flex-col items-start justify-center ">
                <p className="max-w-2xl text-center text-white text-[40px] sm:text-[112px] font-Neue uppercase leading-none">
                    Contact
                </p>
                <p className="max-w-2xl text-start text-white text-[40px] sm:text-[112px] font-Neue uppercase leading-none">
                    Us
                </p>
                <p className="max-w-2xl text-start text-white text-base font-Neue">
                We believe the best projects start with a spark — a message, an idea, a “what if?”At Cregen, we build partnerships that go beyond deliverables. We co-create, innovate, and scale visions into global digital experiences.
                </p>
                <p className="max-w-2xl text-start text-white text-base font-Neue ">
                Whether you are ready to launch a Web3 platform, craft a visual brand, or just want to explore possibilities — you’re in the right place.
                </p>
            </div>
            {/* Card */}

            {/* Circles */}
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
        </div>
    );
};

export default Contact;