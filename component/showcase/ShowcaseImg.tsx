import React from "react";
import Image from "next/image";
import AnimateImage from "../AnimateImage";

export default function ShowcaseImg(){
  return (
    <div className="w-full md:w-[50%] flex items-center justify-center relative mt-10">
      <div className="w-[70%] h-[70%] md:h-[90%] md:w-[90%] lg:w-[60%] relative mx-auto">
        <Image
          src='/dessert.png'
          alt='dessert'
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />

        <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] absolute -bottom-3 left-0 z-10 ">
          <Image
            src="/rosecake.png"
            alt='rose-cake'
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <AnimateImage className="z-20" duration={0.7}/>
    </div>
  )
}