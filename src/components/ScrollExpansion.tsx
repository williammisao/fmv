import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ScrollExpansion() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Phase One: Video Scaling (0% - 0.5)
  const videoWidth = useTransform(scrollYProgress, [0, 0.5], ["70%", "100%"]);
  const videoHeight = useTransform(scrollYProgress, [0, 0.5], ["70vh", "100vh"]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.5], ["40px", "0px"]);

  // Phase Two: Floating Text (0.5 - 1.0)
  // Text Opacity: Hidden until video is full screen
  const textOpacity = useTransform(scrollYProgress, [0.48, 0.52], [0, 1]);
  
  // Parallax Movements - Only active during Phase Two
  const creativeY = useTransform(scrollYProgress, [0.5, 1], [400, -400]);
  const digitalY = useTransform(scrollYProgress, [0.5, 1], [600, -200]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white z-20">
      {/* Sticky Wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Expanding Video Container */}
        <motion.div 
          style={{ 
            width: videoWidth, 
            height: videoHeight, 
            borderRadius: videoRadius,
          }}
          className="relative bg-black overflow-hidden shadow-2xl z-0"
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-smoke-on-a-black-background-27351-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>

        {/* Parallax Typography Layer - Sequential Reveal */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center"
        >
          <motion.div 
            style={{ y: creativeY }}
            className="absolute left-[10%] top-[30%]"
          >
            <h2 className="text-[12vw] font-bold uppercase tracking-tighter text-white mix-blend-difference">
              CREATIVE
            </h2>
          </motion.div>
          
          <motion.div 
            style={{ y: digitalY }}
            className="absolute right-[5%] top-[50%]"
          >
            <h2 className="text-[15vw] font-bold uppercase tracking-tighter text-white mix-blend-difference">
              DIGITAL
            </h2>
          </motion.div>
        </motion.div>

        {/* Center Label */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white opacity-40">
            [ Cinematic Excellence ]
          </p>
        </motion.div>
      </div>
    </section>
  );
}
