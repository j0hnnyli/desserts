import { FaArrowDown } from "react-icons/fa";
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export default function ScrollDownIcon({ className} : Props){
  return (
    <div className={twMerge("w-[75px] flex items-center justify-center flex-col", className)}>
      <FaArrowDown className="text-md animate-bounce"/>
      <p className="text-sm">Scroll Down</p>
    </div> 
  )
}