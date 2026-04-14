import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden bg-white">
      {/* Main Hero Section with Background Video */}
      <div className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <iframe 
            src="https://www.youtube.com/embed/ZjyJWRzmeHA?autoplay=1&mute=1&loop=1&playlist=ZjyJWRzmeHA&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1" 
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            allow="autoplay"
          ></iframe>
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-gutter text-center z-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-8">[ THIS IS WHAT WE DO ]</p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
          >
            <h1 className="text-6xl md:text-9xl font-bold uppercase leading-[0.85] tracking-tighter mb-4 mix-blend-multiply">
              WE CREATE<br />
              ADVERTISING<br />
              THAT WORKS.
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="w-full px-gutter grid grid-cols-1 md:grid-cols-3 gap-12 py-24">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4">WE CREATE-</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            From script to screen, every frame is built with intent. Real locations, real cinematographers, real craft — because the quality of what you make determines the quality of what you communicate.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4">ADVERTISING-</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Not content. Not filler. Advertising — work designed to reach the right people, say the right thing, and make your brand impossible to ignore.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4">THAT WORKS.</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Beautiful films that don't perform are expensive decorations. Every brief we take ends with one question — did it work for the brand? That answer drives everything we make.
          </p>
        </div>
      </div>
    </section>
  );
}
