"use client";

import About from "@/component/about/About";
import Desserts from "@/component/dessert/Desserts";
import Showcase from "@/component/showcase/Showcase";
import { Dessert } from "@/lib/types/dessertType";
import { useScroll } from "framer-motion";
import { useRef } from "react";

type Props = {
  desserts : Dessert[] | null
}

export default function HomePage({ desserts } : Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative scroll-smooth">
      <Showcase scrollYProgress={scrollYProgress} />
      <About scrollYProgress={scrollYProgress} />
      <Desserts scrollYProgress={scrollYProgress} desserts={desserts}/>
    </div>
  );
}
