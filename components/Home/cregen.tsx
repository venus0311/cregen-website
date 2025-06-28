import React from "react";
import TheStory from "../SvgFiles/home/TheStory";
import Link from "next/link";
import Image from "next/image";

export default function Cregen() {
  return (
    <div className="pt-32 pb-[270px]">
      <div className="flex flex-col items-start justify-center text-white font-Neue pt-40 pl-[100px] gap-10 pr-10">
        <p className="text-[112px] font-thin font-Neue leading-none uppercase tracking-[0%]">CREGEN</p>
        <p className="text-[112px] font-extrabold opacity-10 leading-none uppercase animate-fadein [animation-delay:.5s]">DRIVEN</p>
        <p className="text-[112px] font-extrabold opacity-10 leading-none uppercase animate-fadein [animation-delay:.9s]">BY CURIOSITY</p>
        <div className="flex items-center gap-10 text-white font-Neue uppercase">
          <p className=" text-sm font-light">The Story</p>
          <TheStory />
        </div>
        <Link href="/contactUs" className="flex w-full items-center justify-end text-white font-Neue cursor-pointer gap-2">
          <p className=" text-sm font-light">Get in Touch</p>
          <div className="w-7 h-7">
            <Image
              src={'/getInTouch.gif'}
              alt="slider"
              width={28}
              height={28}
              className=" "
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
