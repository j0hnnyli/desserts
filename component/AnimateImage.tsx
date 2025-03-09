'use client'

import { twMerge } from 'tailwind-merge'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
  className? : string;
  duration: number
}

export default function AnimateImage({className, duration } : Props){
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once : true});
  const controls = useAnimation();

  useEffect(() => {
    if(isInView){
      controls.start('animate')
    }
  }, [isInView, controls])

  const variant = {
    initial : { height: '100%', width: '100%', top: 0 },
    animate : { 
      height: 0, 
      transition : { duration: duration, ease: 'easeOut' }
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial='initial'
      animate={controls}
      className={twMerge('bg-[var(--primary-color)] absolute left-0', className)}
    >
    </motion.div>
  )
}