'use client'

import React from "react";
import ShowcaseContent from "./ShowcaseContent";
import ShowcaseImg from "./ShowcaseImg";
import { MotionValue, useTransform, motion, useSpring} from 'framer-motion'

type Props = {
  scrollYProgress : MotionValue<number>
}

export default function Showcase({scrollYProgress} : Props){
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0.7]), {stiffness: 30, damping: 10, mass: 0.8})
  const rotate = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, -5]), {stiffness: 30, damping: 10, mass: 0.8})

  return (
    <motion.div 
      style={{scale, rotate}}
      className="flex items-center justify-center h-screen bg-[var(--primary-color)]"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-[80%] md:w-[90%] max_width p-2">
        <ShowcaseContent />
        <ShowcaseImg />
      </div>
    </motion.div>
  )
}