import React, { useRef, useState } from "react";

const WhatDriveUs = () => {
    return (
        <div data-aos="fade-down" className="w-full">
            <div className="min-h-screen flex lg:items-start items-center justify-center lg:gap-10 lg:flex-row flex-col px-4 py-40">
                {/* Top Text */}

                {/* Card */}
                <div className="flex flex-col items-center max-w-xl w-full">
                    {/* Video */}
                    <div className="w-full flex flex-col items-start">
                        <p className="text-white text-[60px] sm:text-[102px] font-Neue uppercase text-start leading-none">What</p>
                        <p className="text-white text-[60px] sm:text-[102px] font-Neue uppercase leading-none">Drives us</p>
                    </div>
                    <div className="flex justify-center">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="sm:w-[700px] sm:h-[700px] w-[300px] h-[300px] z-20 object-cover [mix-blend-mode:lighten]"
                        >
                            <source src="/videos/header.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start lg:pt-56">

                    <p className="max-w-lg text-start text-white text-base font-Neue ">
                        We’re not just building projects.
                    </p>
                    <p className="max-w-lg text-start text-white text-base font-Neue ">
                        We’re designing what’s next.
                    </p>
                    <p className="max-w-lg text-start text-white text-base font-Neue mt-10">
                        Our mission is to empower brands, businesses, and ideas through:
                    </p>
                    <ul className="max-w-lg text-start text-white text-base font-Neue mt-10 list-disc list-inside">
                        <li>Creative Media that captivates.</li>
                        <li>Blockchain and Web3 Development that disrupts.</li>
                        <li>AI Solutions that adapt and learn.</li>
                        <li>UI/UX Experiences that connect.</li>
                        <li>White Label Systems that scale.</li>
                        <li>Mobile & Web Applications that perform.</li>
                    </ul>
                    <p className="max-w-lg text-start text-white text-base font-Neue mt-10">
                        Cregen’s creative DNA runs through everything we do—because we believe in technology that feels alive, design that tells stories, and platforms that move people.
                    </p>
                </div>
                <div className="circle3"></div>
            </div>
        </div>
    );
};

export default WhatDriveUs;