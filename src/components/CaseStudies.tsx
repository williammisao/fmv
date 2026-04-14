import { motion } from "motion/react";

const CASE_STUDIES = [
  {
    id: "JWIL",
    title: "JWIL",
    desc: "Infrastructure, at its most honest, is a human story. We followed the people who built these systems, the communities that would depend on them, and the landscapes that would be permanently changed by them.",
    image: "https://picsum.photos/seed/jwil-case/1200/800"
  },
  {
    id: "NRJ",
    title: "NRJ MUSIC FACTORY",
    desc: "Three years and six music videos across as many states taught us something about consistency — that it has nothing to do with repeating yourself. Each film we made with NRJ was a different landscape, a different mood.",
    image: "https://picsum.photos/seed/nrj-case/1200/800"
  },
  {
    id: "WHILTER",
    title: "WHILTER AI",
    desc: "To create AI avatars of Aditya Birla Group's CXOs that could carry the weight and authority of the real people they represented. We built a production process that prioritised presence over perfection.",
    image: "https://picsum.photos/seed/whilter-case/1200/800"
  },
  {
    id: "VIRTUS",
    title: "VOLKSWAGEN VIRTUS",
    desc: "A car built around motion deserved to be shot that way. Precision was our real interest: how a vehicle moves through space, how it holds a road, how cinematic restraint can communicate what a spec sheet never could.",
    image: "https://picsum.photos/seed/virtus-case/1200/800"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-gutter">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-16">[ CASE STUDIES ]</p>
        
        <div className="flex flex-col gap-32">
          {CASE_STUDIES.map((study, i) => (
            <div key={study.id} className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`md:col-span-7 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="aspect-video overflow-hidden rounded-sm bg-muted">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className={`md:col-span-5 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl md:text-5xl font-bold uppercase mb-6 tracking-tighter">{study.title}</h3>
                <p className="text-lg opacity-60 leading-relaxed mb-8">{study.desc}</p>
                <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    →
                  </span>
                  KNOW MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
