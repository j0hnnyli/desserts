import About from "@/component/homepage/About";
import Showcase from "@/component/homepage/Showcase";


export default function Home() {
  return (
    <div className="h-screen overflow-auto scroll-smooth snap-mandatory snap-y">
      <Showcase/>
      <About />
    </div>
  );
}
