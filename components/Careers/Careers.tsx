import React from "react";
import TheStory from "../SvgFiles/home/TheStory";
import Link from "next/link";
import Image from "next/image";
import GetInTouch from "../GetInTouch";
export default function Careers() {
    return (
        <div className="relative pt-32 pb-20 lg:pb-[270px]">

            <div className="relative flex flex-col items-start justify-center text-white font-Neue sm:pt-40 pl-10 sm:pl-[100px] gap-6 sm:gap-10 pr-10">
                <p className="text-[40px] lg:text-[112px] font-Neue leading-none uppercase tracking-[0%]">Careers</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">At cregen</p>
                <div className="max-w-[600px] space-y-10">
                    <p className="text-base leading-none animate-fadein [animation-delay:.5s]">We’re not just building products — we’re building a movement. At Cregen, creativity fuels everything we do. From AI to design, Web3 to media, our team is made of innovators, dreamers, and doers who challenge the ordinary and design what’s next.</p>
                    <p className="text-base  animate-fadein [animation-delay:.5s]">If you’re hungry to create meaningful impact and work on projects that shape the future of digital, we’d love to meet you.</p>
                </div>
                <GetInTouch />
            </div>
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
        </div>
    );
}
