import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "Bharatiyam",
    category: "Branding / Digital",
    image: "https://picsum.photos/seed/p1/800/1000",
  },
  {
    title: "Symphonies Life",
    category: "Visual Identity",
    image: "https://picsum.photos/seed/p2/800/1000",
  },
  {
    title: "Roots & Sky",
    category: "Packaging",
    image: "https://picsum.photos/seed/p3/800/1000",
  },
  {
    title: "Kanpeki",
    category: "Strategy / Design",
    image: "https://picsum.photos/seed/p4/800/1000",
  },
];

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: "-75vw",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
      return () => pin.kill();
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden">
      <div ref={sectionRef} className="relative h-screen flex items-center px-gutter gap-12 w-[200vw]">
        <div className="flex-shrink-0 w-[40vw]">
          <p className="text-xs font-mono uppercase tracking-widest opacity-40 mb-4">02 / Selected Works</p>
          <h2 className="section-header font-bold uppercase">Portfolio</h2>
        </div>

        {PROJECTS.map((project, index) => (
          <div key={index} className="flex-shrink-0 w-[35vw] group">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted rounded-sm">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="mt-6">
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-1">{project.category}</p>
              <h3 className="text-2xl font-bold uppercase">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
