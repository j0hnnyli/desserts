"use client";

import About from "@/component/about/About";
import Desserts from "@/component/dessert/Desserts";
import Showcase from "@/component/showcase/Showcase";
import { Dessert } from "@/lib/types/dessertType";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge"

type Props = {
  desserts: Dessert[] | null;
};

export default function HomePage({ desserts }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef([
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]);

  const [sectionInView, setSectionInView] = useState(0)

  const { scrollYProgress } = useScroll({
    container: containerRef, 
  });

  useEffect(() => {  
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("section-index"));
            if (index !== sectionInView) {
              setSectionInView(index);
            }
            break;
          }
        }
      },
      {
        root: containerRef.current, 
        threshold: 0.6,
      }
    );
  
    sectionsRef.current?.forEach((section, index) => {
      if (section.current) {
        section.current.setAttribute("section-index", String(index)); 
        observer.observe(section.current);
      }
    });
  
    return () => observer.disconnect(); 
  }, [sectionInView, sectionsRef]);
  


  const handleScrollToSection = (index : number) => {
    setSectionInView(index)
    sectionsRef.current[index].current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <div
        ref={containerRef}
        className="h-screen overflow-auto scroll-smooth snap-mandatory snap-y"
      >
        <section ref={sectionsRef.current[0]} className="snap-start">
          <Showcase scrollYProgress={scrollYProgress} />
        </section>
        
        <section ref={sectionsRef.current[1]} className="snap-start">
          <About scrollYProgress={scrollYProgress} />
        </section>

        <section ref={sectionsRef.current[2]} className="snap-start">
          <Desserts scrollYProgress={scrollYProgress} desserts={desserts} />
        </section>
      </div>

      <div 
        className="fixed top-1/2 right-5 flex flex-col items-center gap-1"
      >
        {sectionsRef.current.map((_, i) => (
          <div 
            key={i}
            onClick={() => handleScrollToSection(i)}
            className={twMerge("border border-[var(--secondary-color)] p-1.5 rounded-full bg-[var(--primary-color)] hover:bg-gray-300 cursor-pointer transition-all ease-in-out h-2", sectionInView === i && "h-5")}
          >
          </div>
        ))}
      </div>
    </>
  );
}
