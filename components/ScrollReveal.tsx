'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'right' | 'left'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: Props) {
  const initial =
    direction === 'right'
      ? { opacity: 0, x: 28 }
      : direction === 'left'
        ? { opacity: 0, x: -28 }
        : { opacity: 0, y: 24 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
