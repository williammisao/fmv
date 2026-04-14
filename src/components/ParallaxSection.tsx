import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-section overflow-hidden bg-white">
      <div ref={textRef} className="whitespace-nowrap flex gap-12 opacity-[0.03] pointer-events-none select-none">
        <span className="section-header font-bold uppercase">Purpose Human Creative Purpose Human Creative</span>
      </div>

      <div className="container mx-auto px-gutter relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 mt-[-5vw]">
        <div className="md:col-start-7 md:col-span-5">
          <h2 className="text-4xl md:text-6xl font-bold uppercase leading-[0.9] mb-8">
            We help build brands that endure.
          </h2>
          <p className="text-lg opacity-70 leading-relaxed mb-12">
            With craft, clarity, and creativity, we transform ideas into powerful brand experiences. We push boundaries with ideas that are bold, intelligent, and crafted to inspire lasting conversations.
          </p>
          <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
            <span className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              →
            </span>
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
