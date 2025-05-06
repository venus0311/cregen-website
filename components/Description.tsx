import FadeInText from "./FadeInText"
import ArrowRight1 from "./SvgFiles/ArrowRight1"
import AnimatedButton from "./Button"

const Description = () => {
  return (
    <>
      <div  className="relative w-screen px-5 lg:px-[77px] flex flex-col h-full gap-10 py-10 md:py-20 ">
        <div
          data-aos="fade-up"
          className={`flex flex-col w-full px-5 md:w-1/2 justify-center items-center gap-12 pb-10 z-10 mx-auto transition-all duration-1000 ease-out`}
        >
          <h1 className="text-white text-md text-center font-normal ">
            AI and blockchain development, offering cutting-edge solutions across industries. This plan outlines the
            strategic vision, services, revenue streams, and operational structure for sustained growth
          </h1>
          <AnimatedButton className="flex items-center border-solid border-[1.5px] border-transparent animated-gradient-border rounded-full p-4 justify-center gap-3">
            <p className="text-base text-center">The Story</p>
            <ArrowRight1 />
          </AnimatedButton>
        </div>
        <div data-aos="fade-up" className="text-white text-3xl lg:text-7xl text-left font-extrabold w-full lg:w-1/2 pt-20 pb-32 flex flex-col z-10 items-start">
          <FadeInText>
            At the heart of Cregen lies a commitment to revolutionizing industries through the synergy of AI and
            blockchain. Our solutions go beyond conventional technologies, enabling businesses to harness data-driven
            insights, automate complex processes, and enhance security like never before.
          </FadeInText>
        </div>
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
      </div>
    </>
  )
}

export default Description

