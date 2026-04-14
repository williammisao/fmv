import { motion } from "motion/react";

export default function SmallAbout() {
  return (
    <section className="py-section bg-white overflow-hidden">
      <div className="container mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-8">[ WHO WE ARE ]</p>
            <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-8 tracking-tighter">
              GREAT ADVERTISING SELLS.<br />
              <span className="text-accent-orange">WE MAKE IT.</span>
            </h2>
          </div>
          <div className="md:col-start-7 md:col-span-5">
            <p className="text-lg leading-relaxed opacity-70 mb-8">
              Filmovert is an advertising and film production company working at the intersection of cinematic craft and marketing intent. We partner with brands, enterprises, and institutions to create films that don't just look premium — they communicate clearly, reach the right audience, and deliver real business outcomes.
            </p>
            <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
              <span className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                →
              </span>
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
