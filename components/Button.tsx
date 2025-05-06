import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className = "" }) => {
  const xTo = useRef<any>();
  const yTo = useRef<any>();
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP(() => {
    xTo.current = gsap.quickTo(divRef.current, "x", { duration: 0.8, ease: "power3" });
    yTo.current = gsap.quickTo(divRef.current, "y", { duration: 0.8, ease: "power3" });

    gsap.to(divRef.current, {
      scale: 0,
      xPercent: -50,
      yPercent: -50,
      zIndex: -10,
    });
  }, { scope: buttonRef });

  const handleMouseEnter = contextSafe(() => {
    gsap.to(divRef.current, {
      scale: 1,
      duration: 0.3,
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(divRef.current, {
      scale: 0,
      duration: 0.3,
    });
  });

  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const { top, left } = rect;
    xTo.current?.(e.clientX - left);
    yTo.current?.(e.clientY - top);
  });

  return (
    <div
      ref={buttonRef}
      className={`relative cursor-pointer overflow-hidden ${className} hover:text-black text-white`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={divRef}
        className="absolute w-[300px] h-[150px] bg-white left-0 top-0 -z-10 pointer-events-none rounded-full"
      ></div>
      {children}
    </div>
  );
};

export default AnimatedButton;
