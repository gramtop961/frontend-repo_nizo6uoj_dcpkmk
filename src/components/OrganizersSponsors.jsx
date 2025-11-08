import React from 'react';
import { Building2, HeartHandshake, Mail, ExternalLink } from 'lucide-react';

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
  return (
    <section id="org-sponsor" className="relative w-full bg-[#0A0B14] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(800px 400px at 50% 0%, rgba(124,58,237,0.12), transparent 60%)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-violet-300" />
              <h2 className="text-2xl font-semibold sm:text-3xl">Organizers</h2>
            </div>
            <div className="space-y-3">
              {organizers.map((o) => (
                <a key={o.name} href={o.url} className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10">
                  <span>{o.name}</span>
                  <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2">
              <HeartHandshake className="h-5 w-5 text-cyan-300" />
              <h2 className="text-2xl font-semibold sm:text-3xl">Become a Sponsor</h2>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              {sponsors.map((s) => (
                <div key={s.name} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
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