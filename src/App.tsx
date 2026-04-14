import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TypographicStack from "./components/TypographicStack";
import ScrollExpansion from "./components/ScrollExpansion";
import SmallAbout from "./components/SmallAbout";
import Clients from "./components/Clients";
import CaseStudies from "./components/CaseStudies";
import SphereGallery from "./components/SphereGallery";
import Process from "./components/Process";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <span className="font-display font-bold text-4xl md:text-6xl uppercase tracking-widest">Filmovert</span>
              <div className="w-12 h-[2px] bg-accent-orange"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <TypographicStack />
      <ScrollExpansion />
      <SmallAbout />
      <Clients />
      <CaseStudies />
      <SphereGallery />
      <Process />
      
      {/* Services Section */}
      <section className="py-section px-gutter bg-black text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-start mb-24">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-8">[ WHAT WE MAKE ]</p>
              <h2 className="section-header font-bold uppercase">Services</h2>
            </div>
            <div className="max-w-xs text-right">
              <p className="text-sm opacity-60">
                We provide end-to-end creative solutions that help brands speak with clarity and conviction.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {[
              { name: 'BRAND FILMS', desc: 'Cinematic films crafted to shape brand perception and communicate values.' },
              { name: 'DIGITAL AD FILMS / DVCS', desc: 'Platform-ready advertising films designed for launches and promotions.' },
              { name: 'CORPORATE & INSTITUTIONAL FILMS', desc: 'Clear, structured communication for organisations, teams, and facilities.' },
              { name: 'CSR & DOCUMENTARY FILMS', desc: 'Narrative-led films that capture initiatives and real-world stories.' },
              { name: 'PHOTOGRAPHY', desc: 'Campaign, product, space, and brand photography for marketing use.' },
              { name: 'CONTENT EXTENSIONS', desc: 'Cutdowns, social edits, reels, and campaign-support assets.' }
            ].map((service, i) => (
              <div key={i} className="group relative py-16 bg-black hover:bg-accent-orange transition-colors cursor-pointer px-12">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-4">
                    <span className="font-mono text-xs opacity-40">0{i + 1}</span>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">{service.name}</h3>
                    <p className="text-sm opacity-40 group-hover:opacity-100 transition-opacity max-w-xs">{service.desc}</p>
                  </div>
                  <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <button className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:opacity-50 transition-opacity">SEE FULL SERVICES →</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-gutter bg-white border-t border-black/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-24">
          <div className="max-w-xl">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-8">[ CONTACT ]</p>
            <h2 className="text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter">Work with us.<br />Or work among us.</h2>
            <div className="flex gap-4">
              <button className="px-12 py-5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-orange transition-colors">Contact Us</button>
              <button className="px-12 py-5 border border-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">Career</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-8">Reach Out to Us</p>
              <div className="space-y-6 text-sm">
                <div>
                  <p className="opacity-40 uppercase text-[10px] mb-1">Phone</p>
                  <p className="font-medium">+91-8621026717<br />+91-6306852107</p>
                </div>
                <div>
                  <p className="opacity-40 uppercase text-[10px] mb-1">Email</p>
                  <p className="font-medium">hello@filmovert.com</p>
                </div>
                <div>
                  <p className="opacity-40 uppercase text-[10px] mb-1">Office</p>
                  <p className="font-medium max-w-xs">538K/456/97, Shivpuram, Triveni Nagar-3rd, Lucknow, UP, India, 226020</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-8">Connect Online</p>
              <ul className="space-y-4 text-sm uppercase font-bold">
                <li><a href="#" className="hover:text-accent-orange transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent-orange transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-accent-orange transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-accent-orange transition-colors">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <span className="font-display font-bold text-2xl uppercase">Filmovert</span>
            <span className="text-[10px] font-mono uppercase opacity-40">© 2024 Filmovert Moving Pictures Private Limited.</span>
          </div>
          <div className="flex gap-8 text-[10px] font-mono uppercase opacity-40">
            <a href="#" className="hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:opacity-100">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
