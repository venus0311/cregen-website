import React from "react";
import TheStory from "../SvgFiles/home/TheStory";
import Link from "next/link";
import Image from "next/image";
import GetInTouch from "../GetInTouch";
export default function OurShowCase() {
    return (
        <div className="relative pt-32 pb-[270px]">

            <div className="relative flex flex-col items-start justify-center text-white font-Neue sm:pt-40 pl-10 sm:pl-[100px] gap-6 sm:gap-10 pr-10">
                <p className="text-[40px] lg:text-[112px] font-Neue leading-none uppercase tracking-[0%]">Our Creative</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">ShowCase</p>
                <div className="max-w-[600px] space-y-10">
                    <p className="text-base leading-none animate-fadein [animation-delay:.5s]">At Cregen, every project is more than just a delivery—it’s a crafted experience. Our showcases represent the blend of bold creativity and powerful technology, tailored to push boundaries and spark impact.</p>
                    <p className="text-base  animate-fadein [animation-delay:.5s]">From immersive brand identities to cutting-edge blockchain platforms, our portfolio reflects who we are: a Creative Generation building the digital future.</p>
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
