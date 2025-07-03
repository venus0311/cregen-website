import React, { useRef, useState } from "react";

const CregenHistory = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleOverlayPlay = () => {
        const video = videoRef.current;
        if (!video) return;
        video.play()
            .then(() => {
                setIsPlaying(true);
                setHasStarted(true);
                setHasError(false);
            })
            .catch(() => {
                setHasError(true);
            });
    };

    const handlePlay = () => {
        setIsPlaying(true);
        setHasStarted(true);
        setHasError(false);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleError = () => {
        setHasError(true);
        setIsPlaying(false);
    };

    return (
        <div data-aos="fade-down" className="min-h-screen flex lg:items-start items-center justify-center gap-10 lg:flex-row flex-col px-4 py-40">
            {/* Top Text */}

            {/* Card */}
            <div className="flex flex-col items-center max-w-xl w-full">
                {/* Video Player with Overlay */}
                <div className="relative flex flex-col items-center w-full max-w-[600px]">
                    <video
                        ref={videoRef}
                        src="/videos/CREGEN.mp4"
                        className="sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] z-20 object-cover rounded-[30px]"
                        onPlay={handlePlay}
                        onPause={handlePause}
                        onError={handleError}
                        controls={hasStarted && !hasError}
                        style={{ outline: 'none' }}
                    />
                    {/* Overlay Play Button or Error */}
                    {(!hasStarted || hasError) && (
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/90 rounded-[30px] cursor-pointer z-30 transition-opacity duration-300" onClick={hasError ? undefined : handleOverlayPlay}>
                            <button
                                className="flex items-center justify-center bg-black/60 rounded-full w-20 h-20 shadow-lg hover:bg-black/80 focus:outline-none"
                                aria-label="Play"
                                disabled={hasError}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white">
                                    <polygon points="18,12 38,24 18,36" fill="white" />
                                </svg>
                            </button>
                            {hasError && (
                                <span className="mt-4 text-red-400 text-lg font-semibold">Video unavailable</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-start justify-start ">

                <p className="max-w-lg text-start text-white text-base font-Neue ">
                    Cregen was born from a simple but bold belief: creativity and technology should speak the same language. What began as a small collective of thinkers and builders has grown into a powerhouse delivering cutting-edge solutions to clients around the world.
                </p>
                <p className="max-w-lg text-start text-white text-base font-Neue mt-10">
                    We speak in code and color.We think in algorithms and aesthetics.We design experiences that feel human—yet powered by the limitless potential of AI, blockchain, and Web3.
                </p>
            </div>
            {/* Circles */}
            <div className="circle"></div>
            <div className="circle2"></div>
            {/* <div className="circle3"></div> */}
            {/* <div className="circle4"></div> */}
        </div>
    );
};

export default CregenHistory;