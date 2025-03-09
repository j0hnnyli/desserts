// import AnimeSectionTransition from "../AnimateSectionTransition";
import ShowcaseContent from "./ShowcaseContent";
import ShowcaseImg from "./ShowcaseImg";
import { MotionValue, useTransform, motion, useSpring} from 'framer-motion'

type Props = {
  scrollYProgress : MotionValue<number>
}

export default function Showcase({scrollYProgress} : Props){
  useSpring(scrollYProgress, { stiffness: 50, damping: 15 });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <motion.div 
      style={{scale, rotate}}
      className="flex items-center justify-center h-screen bg-[var(--primary-color)] sticky top-0 z-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-[80%] md:w-[90%] max_width p-2">
        <ShowcaseContent />
        <ShowcaseImg />
      </div>
    </motion.div>
  )
}