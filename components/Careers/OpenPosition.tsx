import React from "react";
export default function OpenPosition() {
    return (
        <div className="relative pb-20 lg:pb-[270px]">

            <div className="relative flex flex-col items-start justify-center text-white font-Neue sm:pt-40 pl-10 sm:pl-[100px] gap-6 sm:gap-10 pr-10">
                <p className="text-[40px] lg:text-[112px] font-Neue leading-none uppercase tracking-[0%]">Open</p>
                <p className="text-[40px] lg:text-[112px] leading-none uppercase animate-fadein [animation-delay:.5s]">Positions</p>
                <div className="max-w-[600px] space-y-10">
                    <p className="text-xl  animate-fadein [animation-delay:.5s]"><span className="text-[#B8E43F]">No Open Roles </span>at the Moment, But the future is always hiring.</p>
                    <p className="text-base ">At Cregen, we’re constantly evolving — and so is our team. While there are no current openings, we’re always on the lookout for creative minds, bold thinkers, and digital innovators who want to build the future with us.</p>
                    <p className="text-base  animate-fadein [animation-delay:.5s]">If you believe you belong here, don’t wait for a listing. Pitch yourself.</p>
                    <p className="text-base  animate-fadein [animation-delay:.5s]">Send your portfolio or CV to <span className=" text-[#B8E43F]">careers@cregen.io</span></p>
                    <p className="text-base  animate-fadein [animation-delay:.5s]">Let’s stay connected. Tomorrow’s opportunity might start with today’s message.</p>
                </div>
            </div>
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
        </div>
    );
}
