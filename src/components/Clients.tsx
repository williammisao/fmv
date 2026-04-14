import { motion } from "motion/react";

const CLIENTS = [
  { name: "Jindal Water", logo: "https://picsum.photos/seed/jindal/200/100", desc: "Produced two documentary films for India's largest national infrastructure projects." },
  { name: "NRJ Music", logo: "https://picsum.photos/seed/nrj/200/100", desc: "A three-year creative partnership spanning six music videos shot across six states." },
  { name: "Whilter AI", logo: "https://picsum.photos/seed/whilter/200/100", desc: "Full-scale video production for the creation of AI avatars for Aditya Birla Group's CXOs." },
  { name: "ASHA NGO", logo: "https://picsum.photos/seed/asha/200/100", desc: "A two-year documentary collaboration across the Sundarban region of West Bengal." },
  { name: "Taobao Foods", logo: "https://picsum.photos/seed/taobao/200/100", desc: "Designed and produced a full marketing campaign for a Korean café brand's new Pune launch." },
  { name: "t's Street Coffee", logo: "https://picsum.photos/seed/streetcoffee/200/100", desc: "Three on-location performance ad films for an urban café brand." },
  { name: "AV Pizza Mine", logo: "https://picsum.photos/seed/pizzamine/200/100", desc: "A digital marketing campaign combining an AI ad film with over 20 bespoke AI photography assets." },
];

export default function Clients() {
  return (
    <section className="py-section bg-muted/30">
      <div className="container mx-auto px-gutter">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-8">[ COLLABORATIONS ]</p>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              We don't just produce films — we embed with brands.
            </h2>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">VIEW ALL →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5">
          {CLIENTS.map((client, i) => (
            <div key={i} className="bg-white p-8 flex flex-col gap-6 hover:bg-muted transition-colors">
              <div className="h-16 flex items-center">
                <img src={client.logo} alt={client.name} className="max-h-full grayscale opacity-60" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase mb-2">{client.name}</h3>
                <p className="text-xs opacity-60 leading-relaxed">{client.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
