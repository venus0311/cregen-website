import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <Link href="/contactUs" className="flex w-full items-center justify-end text-white font-Neue cursor-pointer gap-2">
      <p className=" text-sm font-light hover:text-[#B8E43F] hover:scale-105 duration-300">Get in Touch</p>
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
  );
}
