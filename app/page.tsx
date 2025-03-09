'use client'

import About from "@/component/about/About";
import Showcase from "@/component/showcase/Showcase";
import { useScroll } from 'framer-motion'
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  return (
    <div 
      ref={ref}
      className="relative"
    >
      <Showcase scrollYProgress={scrollYProgress}/>
      <About scrollYProgress={scrollYProgress}/>
    </div>
  );
}
