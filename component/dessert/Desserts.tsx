'use client'

import { Dessert } from '@/lib/types/dessertType';
import { MotionValue, useTransform, motion } from 'framer-motion'
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

type Props = {
  scrollYProgress : MotionValue<number>;
  desserts : Dessert[] | null
}

export default function Desserts({ scrollYProgress, desserts } : Props){
  const scale = useTransform(scrollYProgress, [0.9, 1], [0.7, 1])
  const rotate = useTransform(scrollYProgress, [0.9, 1], [-5, 0])

  return (
    <motion.div 
      style={{scale, rotate}}
      className="h-screen flex items-center justify-center bg-[var(--primary-color)] sticky top-0 z-30 font_crimson"
    >
      <div className='w-full md:w-[90%] max_width p-2'>
        <h2 className='text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl'>Desserts</h2>
        <DessertsContent desserts={desserts}/>
      </div>
    </motion.div>    
  )
}

function DessertsContent({desserts} : {  desserts : Dessert[] | null}){

  return (
    <>
      <div 
        className='mt-5 h-[50vh] md:h-[70vh] overflow-x-auto overflow-y-hidden flex space-x-4'
      >
        {desserts?.map((dessert) => (
          <div
            key={dessert.idMeal}
          >
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.3, ease : 'easeIn'}}
              viewport={{amount: 0.2}}
              className='h-full w-[240px] md:w-[350px] overflow-hidden rounded-xl relative'
            >
              <Image
                src={dessert.strMealThumb}
                alt={dessert.strMeal}
                width={300}
                height={500}
                className='w-full h-full object-cover brightness-90'
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/30 backdrop-blur-md p-3 rounded-lg text-center">
                <h3 className="text-lg font-bold text-black">{dessert.strMeal}</h3>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      
      <div className='flex items-center justify-start mt-5'>
        <div className='flex flex-col justify-center items-center'>
          <FaArrowRight className='text-md animate-bounce'/>
          <p className="text-sm">Scroll Right</p>
        </div>
      </div>
    </>
  )
}