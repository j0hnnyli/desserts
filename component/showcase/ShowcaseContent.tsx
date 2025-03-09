import ScrollDownIcon from "../ScrollDownIcon";
import AnimateText from "./AnimateText";


export default function ShowcaseContent(){
  return (
    <div className="w-full md:w-[50%] font_crimson">
      <div className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl">
        <AnimateText
          direction="x"
          duration={0.3}
        >
          <h2>Dessert</h2>
        </AnimateText>
        <AnimateText
          direction="x"
          duration={0.4}
        >
          <h2>Meets</h2>
        </AnimateText>
        <AnimateText
          direction="x"

          duration={0.5}
        >
          <h2>Happiness</h2>
        </AnimateText>
      </div>
      <AnimateText
        direction="x"
        duration={0.6}
      >
        <h2 className="mt-2 text-xl md:text-3xl">
          Immerse yourself in a dessert that brings Happiness
        </h2>
      </AnimateText>

      <AnimateText
        direction="x"
        duration={0.7}
      >
        <ScrollDownIcon className="mt-5"/>
      </AnimateText>
      
    </div>
  )
}