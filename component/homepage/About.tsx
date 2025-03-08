import Image from "next/image";
import ScrollDownIcon from "../ScrollDownIcon";

export default function About(){
  return (
    <div className="h-screen flex items-center justify-center snap-start">
      <div className=" w-[80%] md:w-[90%] max_width relative z-20">
        <div className="h-full w-full">
          <div className="md:w-[50%] font_crimson">
            <h2 className="text-5xl md:text-6xl xl:text-7xl">We Believe</h2>
            <h2 className="text-5xl md:text-6xl xl:text-7xl text-right">In The Power</h2>
          </div>

          <div className="absolute h-full top-0 md:w-[50%] hidden md:inline">
            <Image
              src='/weddingcake.png'
              alt='wedding cake'
              width={400}
              height={600}
              className="h-full object-cover mx-auto"
            /> 
          </div>

          <div className="md:w-[50%] ml-auto font_crimson">
            <div>
              <h2 className="text-5xl md:text-6xl xl:text-7xl">Of Great</h2>
              <h2 className="text-5xl md:text-6xl xl:text-7xl text-center">Desserts</h2>
            </div>

            <div className="mt-5 flex items-center justify-between p-1">
              <div className="w-full md:w-[50%] text-sm lg:text-md xl:text-lg">
                <p className="">
                  Every dessert we create is baked with love, using only the finest ingredients to ensure every bite is a moment of pure happpiness.
                </p>
                <p className="mt-5">
                  We believe that dessert should be more than just food—it should be an experience that brings joy, comfort, and a little bit of magic to your day
                </p>
              </div>

              <div className="w-full h-full md:h-[250px] md:w-[200px]">
                <Image
                  src='/cookies.png'
                  alt='cookies'
                  width={300}
                  height={300}
                  className="w-full h-full object-center"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-5 p-1">
              <button className="py-2 px-4 border">
                See More
              </button>

              <ScrollDownIcon />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}