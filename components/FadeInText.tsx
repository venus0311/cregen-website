/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useRef, useEffect } from "react"
import { motion, useAnimation, type Variants } from "framer-motion"

interface Props {
  children: string
  className?: string
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)", scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      delay: i * 0.15, // Adjust delay for better visibility
      duration: 0.8,
      ease: [0.11, 0, 0.5, 0],
    },
  }),
}

export default function FadeInText({ children, className = "" }: Props) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible") // Only show, never hide
        }
      },
      {
        threshold: 0.2, // Adjust sensitivity
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const words = children.split(" ")

  return (
    <motion.h1
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15, // Adjust for smoother appearance
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={fadeInVariants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  )
}
