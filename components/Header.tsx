import Group from "./SvgFiles/Group"
import Logo from "./SvgFiles/Logo"
import ArrowRight from "./SvgFiles/ArrowRight"
import AnimatedButton from "./Button";

const Header = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./cregenheader.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 flex flex-col w-full h-full items-center justify-between z-10">
        <div className="w-full pt-12 px-5 lg:px-[77px] mt-2.5 mx-auto flex justify-between items-start">
          <Logo />
          <button
            type="submit"
            className="flex items-center border-none cursor-pointer duration-300 hover:opacity-80 gap-1"
          >
            <span className="flex text-white text-3 font-medium leading-normal text-nowrap">Hello!</span>
            <Group />
          </button>
        </div>
        <div className="flex flex-col w-full px-5 md:w-1/2 justify-center items-center gap-5 pb-10">
          <h1 className="text-white text-4xl lg:text-[42px] text-center font-normal leading-[40.53px] tracking-[0%] creative-text">
            Creative generation
          </h1>
          <p className="text-white text-[14px] text-center">the next innovation of coding</p>

          <AnimatedButton className="flex items-center justify-center w-14 h-14 cursor-pointer rounded-full border-solid  border-[1.5px] border-transparent animated-gradient-border">
            <ArrowRight />
          </AnimatedButton>
        </div>
      </div >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
    </div >
  );
};

export default Header;


