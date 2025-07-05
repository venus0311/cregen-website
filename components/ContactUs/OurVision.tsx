import React from "react";
import GetInTouch from "../GetInTouch";

export default function OurVision() {
    return (
        <div className="relative pb-20 lg:pb-[270px]">
            <div className="relative flex flex-col items-start justify-center text-white font-Neue sm:pt-40 pl-10 sm:pl-[100px] gap-6 sm:gap-10 pr-10">
                <p className="text-[40px] lg:text-[112px] font-Neue leading-none uppercase tracking-[0%]">Your vision</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">Our code.</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">One Powerful</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">Collaboration.</p>
                <div className="max-w-[600px] space-y-10">
                    <p className="text-base leading-none animate-fadein [animation-delay:.5s]">Great ideas don&apos;t wait. Neither do we.</p>
                    <p className="text-base leading-none animate-fadein [animation-delay:.5s]">Let&apos;s bring yours to life</p>
                </div>
                <div className="circle"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
            </div>
        </div>
    );
}
