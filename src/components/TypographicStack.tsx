import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function TypographicStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background Words Parallax
  const purposeY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const humanY = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"]);
  const creativeY = useTransform(scrollYProgress, [0, 1], ["50%", "-150%"]);

  // Foreground Paragraphs Parallax (Slightly faster)
  const p1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const p2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-120%"]);
  const p3Y = useTransform(scrollYProgress, [0, 1], ["20%", "-180%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      {/* Sticky Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center">
        
        {/* Static Header */}
        <div className="pt-24 z-30">
          <p className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-40">
            [ P U R P O S E + H U M A N + C R E A T I V E ]
          </p>
        </div>

        {/* Background Parallax Words */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.h2 
            style={{ y: purposeY }}
            className="text-[15vw] font-bold uppercase tracking-tighter text-black/[0.03] leading-none"
          >
            Purpose
          </motion.h2>
          <motion.h2 
            style={{ y: humanY }}
            className="text-[15vw] font-bold uppercase tracking-tighter text-black/[0.03] leading-none"
          >
            Human
          </motion.h2>
          <motion.h2 
            style={{ y: creativeY }}
            className="text-[15vw] font-bold uppercase tracking-tighter text-black/[0.03] leading-none"
          >
            Creative
          </motion.h2>
        </div>

        {/* Foreground Interlocking Paragraphs */}
        <div className="container mx-auto px-gutter relative h-full w-full z-10">
          
          {/* Paragraph 1 - Left */}
          <motion.div 
            style={{ y: p1Y }}
            className="absolute left-[10%] top-[35%] max-w-[280px]"
          >
            <p className="text-sm leading-relaxed opacity-80">
              We create with clarity and intent, ensuring every brand expression drives meaningful impact.
            </p>
          </motion.div>

          {/* Paragraph 2 - Center Right */}
          <motion.div 
            style={{ y: p2Y }}
            className="absolute right-[15%] top-[50%] max-w-[280px]"
          >
            <p className="text-sm leading-relaxed opacity-80">
              We build stories grounded in empathy, culture, and people, keeping human connection at the centre.
            </p>
          </motion.div>

          {/* Paragraph 3 - Bottom Left */}
          <motion.div 
            style={{ y: p3Y }}
            className="absolute left-[20%] top-[75%] max-w-[280px]"
          >
            <p className="text-sm leading-relaxed opacity-80">
              We push boundaries with ideas that are bold, intelligent, and crafted to inspire lasting conversations.
            </p>
          </motion.div>

        </div>

        {/* Bottom Label */}
        <div className="absolute bottom-12 z-30">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-20">
            Scroll to reveal
          </p>
        </div>

      </div>
    </section>
  );
}
