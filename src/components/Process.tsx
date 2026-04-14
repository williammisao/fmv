import { motion } from "motion/react";

const STEPS = [
  { title: "BRIEF & DISCOVERY", desc: "We understand your brand, objective, audience, deliverables, and project scope." },
  { title: "PROPOSAL & QUOTATION", desc: "Based on the brief, we share the project scope, deliverables, timelines, and quotation." },
  { title: "CLIENT WORKSPACE ONBOARDING", desc: "On project confirmation, you receive access to your dedicated Filmovert Client Workspace." },
  { title: "STRATEGY & CONCEPT DEVELOPMENT", desc: "We develop the communication direction, concepts, scripts, and creative treatment aligned with your brief." },
  { title: "PRE-PRODUCTION", desc: "Schedules, crew, locations, logistics, and execution planning are organised and updated." },
  { title: "PRODUCTION", desc: "We execute the shoot with structured coordination across teams, locations, and timelines." },
  { title: "REVIEW & APPROVALS", desc: "Drafts are shared through the Client Workspace, where you can review versions and share feedback." },
  { title: "FINAL DELIVERY & BILLING", desc: "Final deliverables, files, invoices, and project closure documents are consolidated." },
];

export default function Process() {
  return (
    <section className="py-section bg-muted/20">
      <div className="container mx-auto px-gutter">
        <div className="max-w-2xl mb-24">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-8">[ OUR PROCESS ]</p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
            A clear, systematic workflow that resolves communication gaps.
          </h2>
          <p className="opacity-60">Ensuring consistent, high-quality delivery across every production stage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              <span className="font-mono text-xs opacity-30">0{i + 1}</span>
              <h3 className="text-sm font-bold uppercase tracking-widest">{step.title}</h3>
              <p className="text-xs opacity-60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
