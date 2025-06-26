import React from "react";
import CombinedIcon from "./SvgFiles/sideBar/CombinedIcon";
const SideBar = () => {
  return (
    <div className="max-lg:hidden fixed left-0 top-0 h-screen w-[114px] bg-gradient-to-b from-black via-[#1a2a1a] to-[#1a2a1a] flex flex-col items-center justify-between border-r-2 border-[#B8E43F] bg-opacity-40">
      {/* Logo at the top */}
      <div className="mt-14">
        <CombinedIcon />
      </div>
      {/* Rotated text at the bottom */}
      <div className="mb-10">
        <span
          style={{
            display: "inline-block",
            color: "white",
            fontSize: "1rem",
            whiteSpace: "nowrap",
            transform: "rotate(-90deg)",
          }}
        >
          Creative<br />generation
        </span>
      </div>
    </div>
  );
};

export default SideBar;
