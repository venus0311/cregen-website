import Group from "./SvgFiles/Group"
import Logo from "./SvgFiles/Logo"
import ArrowRight from "./SvgFiles/ArrowRight"
import AnimatedButton from "./Button";
import ArrowLeft from "./SvgFiles/ArrowLeft";
const Header = ({ title }: { title: string }) => {
  return (

    <div className="absolute top-0 flex flex-col w-full h-fit items-center justify-between z-10 px-10 lg:pl-[165px]">
      <div className="w-full pt-12  mt-2.5 flex justify-between items-center">
        <div className="flex items-center justify-between w-full">
          {title && <div className="flex items-center">
            <ArrowLeft />
            <p className="font-Neue text-base text-white">{title}</p>
          </div>}
        </div>
        <button
          type="submit"
          className="flex items-center border-none cursor-pointer duration-300 hover:opacity-80 gap-1"
        >
          <span className="flex text-white text-3 font-medium leading-normal text-nowrap">Hello!</span>
          <Group />
        </button>
      </div>
    </div >
  );
};

export default Header;


