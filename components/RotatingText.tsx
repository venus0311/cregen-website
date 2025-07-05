import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import styles from '../styles/rotating.module.css'

interface Props {
  text: string
  stagger?: number // Time between each letter
  timing?: number // Duration of each letter
  className?: string // Pass custom class
  style?: React.CSSProperties // Pass custom style
  animate: any
}

export const RotatingText = ({
  text,
  timing = 0.5,
  stagger = 0.1,
  className,
  animate
}: Props) => {
  const prefersReducedMotion = useReducedMotion()

  const hoverArea = {
    rotate: { z: 0 },
  }

  const container = {
    rotate: { transition: { staggerChildren: stagger } }
  }

  // Always provide a valid variant object for Framer Motion
  const wordCopy = {
    rotate: prefersReducedMotion
      ? { y: '0%', rotateX: 0, scaleX: 1, scaleY: 1, transition: { duration: 0 } }
      : {
          y: ['0%', '30%'],
          rotateX: [0, 90],
          scaleX: [1, 0.4],
          scaleY: [1, 0.4],
          transition: {
            duration: timing,
            ease: "easeInOut"
          }
        }
  };

  const word = {
    rotate: prefersReducedMotion
      ? { y: '0%', rotateX: 0, scaleX: 1, scaleY: 1, transition: { duration: 0 } }
      : {
          y: ['-30%', '0%'],
          rotateX: [-90, 0],
          scaleX: [0.4, 1],
          scaleY: [0.4, 1],
          transition: { duration: timing }
        }
  };

  // Trigger animation on mount
  React.useEffect(() => {
    animate.start('rotate')
  }, [animate])

  return (
    <motion.div
      className={`${styles.container} ${className}`}
      variants={hoverArea}
      animate={animate}
      initial='initial'
    >
      <motion.div className={styles.front} variants={container}>
        {Array.from(text).map((char, i) => (
          <motion.span key={`${char}${i}`} variants={wordCopy}>
            {char}
          </motion.span>
        ))}
      </motion.div>
      <motion.div className={styles.back} variants={container}>
        {Array.from(text).map((char, i) => (
          <motion.span key={`${char}${i}copy`} variants={word}>
            {char}
          </motion.span>
        ))}
      </motion.div>
      <div className={styles.placeholder}>{text}</div>
    </motion.div>
  )
}
