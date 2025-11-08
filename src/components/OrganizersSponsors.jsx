import React from 'react';
import { Building2, HeartHandshake, Mail, ExternalLink } from 'lucide-react';
import { useReveal } from './useReveal';
import SectionScene from './SectionScene';

const organizers = [
  { name: 'Flames Tech Collective', url: '#' },
  { name: 'Open Source Guild', url: '#' },
];

const sponsors = [
  { name: 'Neon Cloud', tier: 'Platinum' },
  { name: 'EdgeVector', tier: 'Gold' },
  { name: 'SynthAI', tier: 'Silver' },
];

const OrganizersSponsors = () => {
  const { ref, visible } = useReveal({ threshold: 0.15 });

  return (
    <section id="org-sponsor" className="relative w-full overflow-hidden bg-[#0A0B14] py-28 text-white">
      <SectionScene />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(800px 400px at 50% 0%, rgba(124,58,237,0.12), transparent 60%)'
        }} />
      </div>

      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="relative z-10 grid gap-12 lg:grid-cols-2">
          <div style={{ transition: 'transform 700ms ease, opacity 700ms ease', transitionDelay: visible ? '80ms' : '0ms', transform: visible ? 'translateY(0px)' : 'translateY(12px)', opacity: visible ? 1 : 0 }}>
            <div className="mb-6 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-violet-300" />
              <h2 className="text-2xl font-semibold sm:text-3xl">Organizers</h2>
            </div>
            <div className="space-y-3">
              {organizers.map((o, i) => (
                <a key={o.name} href={o.url} className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10" style={{ transition: 'transform 700ms ease, opacity 700ms ease', transitionDelay: visible ? `${i * 90 + 120}ms` : '0ms', transform: visible ? 'translateY(0px)' : 'translateY(12px)', opacity: visible ? 1 : 0 }}>
                  <span>{o.name}</span>
                  <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div style={{ transition: 'transform 700ms ease, opacity 700ms ease', transitionDelay: visible ? '160ms' : '0ms', transform: visible ? 'translateY(0px)' : 'translateY(12px)', opacity: visible ? 1 : 0 }}>
            <div className="mb-6 flex items-center gap-2">
              <HeartHandshake className="h-5 w-5 text-cyan-300" />
              <h2 className="text-2xl font-semibold sm:text-3xl">Become a Sponsor</h2>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              {sponsors.map((s, i) => (
                <div key={s.name} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center" style={{ transition: 'transform 700ms ease, opacity 700ms ease', transitionDelay: visible ? `${i * 90 + 220}ms` : '0ms', transform: visible ? 'translateY(0px)' : 'translateY(12px)', opacity: visible ? 1 : 0 }}>
                  <div className="text-sm text-white/60">{s.tier}</div>
                  <div className="mt-1 font-semibold">{s.name}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 font-medium text-[#0A0B14] shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.02] active:scale-95">
              <HeartHandshake className="h-4 w-4" />
              Sponsor this hackathon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSponsors;
