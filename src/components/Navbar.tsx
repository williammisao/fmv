import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter py-8 mix-blend-difference text-white"
    >
      <div className="flex items-center gap-2">
        <span className="font-display font-bold text-2xl tracking-widest uppercase">Filmovert</span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-wider">
        <a href="#" className="hover:opacity-50 transition-opacity">Why are you here?</a>
        <a href="#" className="hover:opacity-50 transition-opacity">What do you want?</a>
        <a href="#" className="hover:opacity-50 transition-opacity">What's happening?</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-8 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-orange hover:text-white transition-colors">
          Contact Us
        </button>
        <button className="px-8 py-3 border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
          Career
        </button>
      </div>
    </motion.nav>
  );
}
