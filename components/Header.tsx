import Group from "./SvgFiles/Group"
import ArrowLeft from "./SvgFiles/ArrowLeft";
import React, { useState } from "react";
import Link from "next/link";

const Header = ({ title }: { title: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "/aboutUs" },
    { label: "Solutions", href: "/solutions" },
    { label: "Showcases", href: "/showcases" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contactUs" },
  ];

  return (
    <>
      <div className="absolute top-0 flex flex-col w-full h-fit items-center justify-between z-10 px-10 lg:pl-[165px]">
        <div className="w-full pt-12  mt-2.5 flex justify-between items-center">
          <div className="flex items-center justify-between w-full">
            {title && <Link href='/' className="flex items-center  hover:scale-105 duration-300 hover:text-[#B8E43F]">
              <ArrowLeft />
              <p className="font-Neue text-base text-white ml-4 hover:text-[#B8E43F]">{title}</p>
            </Link>}
          </div>
          <button
            type="button"
            className="flex items-center border-none cursor-pointer duration-300 hover:opacity-80 gap-1"
            onClick={() => setMenuOpen(true)}
          >
            <span className="flex text-white text-3 font-medium leading-normal text-nowrap">Hello!</span>
            <Group />
          </button>
        </div>
      </div >

      {/* Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-start justify-center p-12" style={{ backdropFilter: "blur(2px)" }}>
          <button
            className="absolute top-6 right-8 text-white text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Close <span className="text-xl ml-2">&times;</span>
          </button>
          <nav className="mt-12">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="text-white text-6xl font-normal hover:text-[#B8E43F] cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;


