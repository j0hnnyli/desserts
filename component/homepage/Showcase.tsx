import Image from "next/image";
import ScrollDownIcon from "../ScrollDownIcon";

export default function Showcase(){
  return (
    <div className="flex items-center justify-center w-full h-full snap-start">
      <div className="flex flex-col md:flex-row items-center justify-between w-[80%] md:w-[90%] max_width">
        <div className="w-full md:w-[50%] font_crimson">
          <div className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl">
            <h2>Dessert</h2>
            <h2>Meets</h2>
            <h2>Happiness</h2>
          </div>
          <h2 className="mt-2 text-xl md:text-3xl">
            Immerse yourself in a dessert that brings Happiness
          </h2>
          
          <ScrollDownIcon className="mt-5"/>
        </div>

        <div className="w-full md:w-[50%] flex items-center justify-center relative mt-10">
          <div className="w-[80%] h-[80%] md:h-[90%] md:w-[90%] lg:w-[60%] relative">
            <Image
              src='/dessert.png'
              alt='dessert'
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />

            <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] absolute -bottom-5 left-0">
              <Image
                src="/rosecake.png"
                alt='rose cake'
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}