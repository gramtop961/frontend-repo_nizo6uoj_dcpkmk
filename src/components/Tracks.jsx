import React from 'react';
import { Code2, Cpu, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { useReveal } from './useReveal';
import SectionScene from './SectionScene';
import SectionHeader from './SectionHeader';

const tracks = [
  {
    icon: Code2,
    title: 'AI & ML',
    desc: 'Push the boundaries with generative models, agents, and LLM tooling.',
    pill: 'Advanced'
  },
  {
    icon: Cpu,
    title: 'Systems & DevTools',
    desc: 'Build blazing-fast runtimes, databases, and developer experiences.',
    pill: 'Performance'
  },
  {
    icon: Globe,
    title: 'Web3 & Protocols',
    desc: 'Design trustless systems, rollups, and next-gen coordination tools.',
    pill: 'On-chain'
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    desc: 'Defend the future with appsec, audits, and privacy-preserving tech.',
    pill: 'Zero-trust'
  },
];

const Tracks = () => {
  const { ref, visible } = useReveal({ threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  return (
    <section id="tracks" className="relative w-full overflow-hidden bg-[#0A0B14] py-28 text-white">
      <SectionScene />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(800px 400px at 10% 10%, rgba(124,58,237,0.18), transparent 60%), radial-gradient(600px 300px at 90% 20%, rgba(56,189,248,0.15), transparent 60%)'
        }} />
      </div>

      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="relative z-10">
          <div className="mb-10 flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tracks</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map(({ icon: Icon, title, desc, pill }, i) => (
              <div key={title} className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-700 ${visible ? 'opacity-100 translate-y-0 delay-[' + (i*80) + 'ms]' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}>
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 px-2 py-1 text-xs text-cyan-200">{pill}</span>
                </div>
                <Icon className="mb-3 h-6 w-6 text-violet-300" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-400/10 blur-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
