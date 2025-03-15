'use client'

import React from 'react'
import Image from "next/image";
import ScrollDownIcon from "../ScrollDownIcon";
import AnimateImage from "../AnimateImage";
import AnimateAboutText from "./AnimateAboutText";
import { MotionValue, useTransform, motion} from 'framer-motion'

type Props = {
  scrollYProgress : MotionValue<number>
}


export default function About({scrollYProgress} : Props){
  const scale = useSpring(useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.7, 1, 0.7]), {stiffness: 30, damping: 10, mass: 0.8})
  const rotate = useSpring(useTransform(scrollYProgress, [0.3, 0.5, 0.7], [-5, 0, -5]), {stiffness: 30, damping: 10, mass: 0.8})


  return (
    <motion.div 
      style={{scale, rotate}}
      className="h-screen flex items-center justify-center bg-[var(--primary-color)]"
    >
      <div className="w-[80%] md:w-[90%] max_width p-2 flex flex-col items-center justify-center h-full mx-auto">
        <div className="w-full md:w-[50%] font_crimson">
          <AnimateAboutText>
            <h2 className="text-5xl md:text-6xl xl:text-7xl">We Believe</h2>
          </AnimateAboutText>
          <AnimateAboutText>
            <h2 className="text-5xl md:text-6xl xl:text-7xl text-center">In The Power</h2>
          </AnimateAboutText>
        </div>

        <div className="flex justify-between">
          <div className="md:w-full hidden md:inline relative">
            <Image
              src='/weddingcake.png'
              alt='wedding-cake'
              width={400}
              height={600}
              className="w-[70%] h-[80%] object-cover mx-auto"
            /> 
            <AnimateImage duration={1.5}/>
          </div>

          <div className="md:w-full ml-auto font_crimson">
            <div>
              <AnimateAboutText>
                <h2 className="text-5xl md:text-6xl xl:text-7xl">Of Great</h2>
              </AnimateAboutText>
              <AnimateAboutText>
                <h2 className="text-5xl md:text-6xl xl:text-7xl text-center">Desserts</h2>
              </AnimateAboutText>
            </div>

            <div className="mt-5 flex items-center justify-between p-1">
              <AnimateAboutText>
                <div
                  data-testid = 'about-text'
                 className="w-full md:w-full text-sm md:text-md lg:text-[16px]"
                >
                  <p className="">
                    Every dessert we create is baked with love, using only the finest ingredients to ensure every bite is a moment of pure happpiness.
                  </p>
                  <p className="mt-5">
                    We believe that dessert should be more than just food—it should be an experience that brings joy, comfort, and a little bit of magic to your day
                  </p>
                </div>
              </AnimateAboutText>

              <div className="w-full h-full relative">
                <Image
                  src='/cookies.png'
                  alt='cookies'
                  width={300}
                  height={300}
                  className="w-full h-full object-center"
                />
                <AnimateImage duration={1.5}/>
              </div>
            </div>

            <AnimateAboutText>
              <div className="flex items-center justify-between p-1">
                <button className="py-2 px-4 border">
                  See More
                </button>

                <ScrollDownIcon />
              </div>
            </AnimateAboutText>
          </div>
        </div>

      </div>
    </motion.div>
  )
}