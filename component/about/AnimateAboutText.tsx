'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

type Props = {
  children : ReactNode
}

export default function AnimateAboutText({ children } : Props){
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once : true});
  const controls = useAnimation();

  useEffect(() => {
    if(isInView){
      controls.start('animate')
    }
  }, [isInView, controls])

  const variant = {
    initial : {y : 20, scale : 0.9},
    animate : {
      y: 0, 
      scale: 1,
      transition : {
        duration: 1,
        ease : 'easeIn'
      }
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial='initial'
      animate={controls}
    >
      {children}
    </motion.div>
  )
}