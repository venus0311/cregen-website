/* eslint-disable @next/next/no-img-element */
"use client"
import Slider from "react-slick"
import { useRef, useState } from "react"
import AnimatedButton from "./Button"
import ArrowRight1 from "./SvgFiles/ArrowRight1"
import ArrowLeft from "./SvgFiles/ArrowLeft"
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface SliderData {
    id: number
    image: string
    title: string
}

const sliderData: SliderData[] = [
    { id: 1, image: "/svgs/slide1.gif", title: "Julien Joly brand concept" },
    { id: 2, image: "/svgs/slide2.gif", title: "ABODE moptis application evaluation for designers" },
    { id: 3, image: "/svgs/slide3.gif", title: "OPPO lap mobile application" },
    { id: 4, image: "/svgs/slide1.gif", title: "Julien Joly brand concept" },
    { id: 5, image: "/svgs/slide2.gif", title: "ABODE moptis application evaluation for designers" },
    { id: 6, image: "/svgs/slide3.gif", title: "OPPO lap mobile application" },
]

const HomeHeaderSlick: React.FC = () => {
    const sliderRef = useRef<Slider | null>(null)  // Correct type for sliderRef
    const [currentIndex, setCurrentIndex] = useState<number>(0)  // Correct type for currentIndex

    const settings = {
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        dots: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => {
            setCurrentIndex(next)
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    const next = () => {
        sliderRef.current?.slickNext()
    }

    const previous = () => {
        sliderRef.current?.slickPrev()
    }

    // Calculate progress width as a percentage
    const progressWidth = ((currentIndex + 1) / sliderData.length) * 100

    return (
        <div className="w-full h-full relative mb-16 items-center">
            <Slider
                ref={sliderRef}
                arrows={false}
                {...settings}
            >
                {sliderData.map((slide, index) => (
                    <>
                        <div key={slide.id} className="flex flex-col gap-5 pl-2 lg:pl-5">
                            <img
                                src={slide.image}
                                alt="slider"
                                className="overflow-hidden rounded-tr-3xl rounded-b-3xl cursor-grab "
                            />
                            <span className="text-white font-normal text-base">{slide.title}</span>
                        </div>
                    </>

                ))}
            </Slider>
            <div className={` mt-[75px] h-1 bg-gray-700 rounded-full relative transition-all duration-1000 ease-out`}>
                <div
                    className="h-1 bg-[#B8E43F] rounded-full absolute top-0 transition-all duration-1000 ease-out"
                    style={{ width: `${progressWidth}%` }}
                ></div>
            </div>
            <div className="flex flex-col w-full px-5 items-center gap-5 justify-center mt-12 md:mt-24">
                <div className="flex md:hidden gap-5 ">
                    <div onClick={previous}>
                        <AnimatedButton className="flex items-center border-solid border-[1.5px] border-transparent animated-gradient-border rounded-full p-4 text-gray-200 justify-center gap-3 cursor-pointer">
                            <p className="text-[14px] text-center">
                                <ArrowLeft />
                            </p>
                        </AnimatedButton>
                    </div>
                    <div onClick={next}>
                        <AnimatedButton className="flex items-center border-solid border-[1.5px] border-transparent animated-gradient-border rounded-full p-4 text-gray-200 justify-center gap-3 cursor-pointer">
                            <p className="text-[14px] text-center">
                                <ArrowRight1 />
                            </p>
                        </AnimatedButton>
                    </div>
                </div>
                <AnimatedButton className="flex items-center border-solid border-[1.5px] border-transparent animated-gradient-border cursor-pointer rounded-full p-4 text-gray-200 justify-center gap-3">
                    <p className="text-[14px] text-center">Explore All Showcases</p>
                    <ArrowRight1 />
                </AnimatedButton>
            </div>
            <div className="hidden md:flex gap-5 absolute bottom-0 right-[30px]">
                <div onClick={previous}>
                    <AnimatedButton className="flex items-center border-solid border-[1.5px] border-transparent animated-gradient-border rounded-full p-4 text-gray-200 justify-center gap-3 cursor-pointer">
                        <p className="text-[14px] text-center">
                            <ArrowLeft />
                        </p>
                    </AnimatedButton>
                </div>
                <div onClick={next}>
                    <AnimatedButton className="flex items-center border-solid border-[1.5px] border-transparent animated-gradient-border rounded-full p-4 text-gray-200 justify-center gap-3 cursor-pointer">
                        <p className="text-[14px] text-center">
                            <ArrowRight1 />
                        </p>
                    </AnimatedButton>
                </div>
            </div>
        </div>
    )
}

export default HomeHeaderSlick
