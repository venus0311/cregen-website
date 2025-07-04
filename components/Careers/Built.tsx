import React from "react";
import GetInTouch from "../GetInTouch";
export default function Built() {
    return (
        <div className="relative pb-20 lg:pb-[270px]">

            <div className="relative flex flex-col items-start justify-center text-white font-Neue sm:pt-40 pl-10 sm:pl-[100px] gap-6 sm:gap-10 pr-10">
                <p className="text-[40px] lg:text-[112px] font-Neue leading-none uppercase tracking-[0%]">Built with</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">At Vision.</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">Designed</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">With Purpose.</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">Delivered.</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">With Pride.</p>
                <div className="max-w-[600px] space-y-10">
                    <p className="text-base leading-none animate-fadein [animation-delay:.5s]">Every showcase is a result of deep collaboration, agile thinking, and an obsession with quality. Whether its a mobile app, an NFT marketplace, or a cinematic brand launch, we treat each project like it’s our own.</p>
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
