'use client'

import React from "react";
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  direction : 'x' | 'y'
  duration : number
}

export default function AnimateText({ children, direction, duration } : Props){
  return (
    <motion.div
      initial={{ [direction] : `-100vw`}}
      animate={{ [direction] : 0 }}
      transition={{ duration : duration }}
    >
      {children}
    </motion.div>
  )
}