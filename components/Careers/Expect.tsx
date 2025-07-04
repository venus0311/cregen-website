import React from "react";
import GetInTouch from "../GetInTouch";
export default function Expect() {
    return (
        <div className="relative pb-20 lg:pb-[270px]">

            <div className="relative flex flex-col items-start justify-center text-white font-Neue sm:pt-40 pl-10 sm:pl-[100px] gap-6 sm:gap-10 pr-10">
                <p className="text-[40px] lg:text-[112px] font-Neue leading-none uppercase tracking-[0%]">What you</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">Can Expect</p>
                <ul className="max-w-[600px] list-disc pl-5">
                    <li className="text-base">A culture that celebrates ideas and innovation</li>
                    <li className="text-base">Remote flexibility and hybrid team structures</li>
                    <li className="text-base">Global projects with real-world impact</li>
                    <li className="text-base">Mentorship, growth, and creative freedom</li>
                </ul>
            </div>
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
        </div>
    );
}
