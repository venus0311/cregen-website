import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import styles from '../styles/rotating.module.css'

interface Props {
  text: string
  stagger?: number // Time between each letter
  timing?: number | number[] // Duration of each letter
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

  const duration = React.useMemo(() => {
    if (Array.isArray(timing)) return timing
    else return Array.from({ length: text.length }, () => timing)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timing])

  const wordCopy = prefersReducedMotion
    ? undefined
    : {
      rotate: (i: number) => ({
        y: ['0%', '30%'],
        rotateX: [0, 90],
        scaleX: [1, 0.4],
        scaleY: [1, 0.4],
        transition: {
          duration: duration[i],
          ease: "easeInOut"
        }
      })
    }

  const word = prefersReducedMotion
    ? undefined
    : {
      rotate: (i: number) => ({
        y: ['-30%', '0%'],
        rotateX: [-90, 0],
        scaleX: [0.4, 1],
        scaleY: [0.4, 1],
        transition: { duration: duration[i] }
      })
    }

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
          <motion.span custom={i} key={`${char}${i}`}>
            {char}
          </motion.span>
        ))}
      </motion.div>
      <motion.div className={styles.back} variants={container}>
        {Array.from(text).map((char, i) => (
          <motion.span custom={i} key={`${char}${i}copy`}>
            {char}
          </motion.span>
        ))}
      </motion.div>
      <div className={styles.placeholder}>{text}</div>
    </motion.div>
  )
}
