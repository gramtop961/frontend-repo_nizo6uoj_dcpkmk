import React from 'react';
import { Trophy, Users, Banknote, Zap } from 'lucide-react';
import { useReveal } from './useReveal';

const benefits = [
  {
    icon: Trophy,
    title: 'Big Prizes',
    desc: 'Win cash, credits, and exclusive mentorship to keep building after demo day.'
  },
  {
    icon: Zap,
    title: 'Lightning Workshops',
    desc: 'Hands-on sessions from experts to level up your skills fast.'
  },
  {
    icon: Users,
    title: 'Elite Mentors',
    desc: 'Get direct feedback from engineers, founders, and researchers.'
  },
  {
    icon: Banknote,
    title: 'Bounties & Grants',
    desc: 'Ship features and earn rewards from partner ecosystems.'
  },
];

const Benefits = () => {
  const { ref, visible } = useReveal({ threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  return (
    <section id="benefits" className="relative w-full bg-[#0A0B14] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(700px 350px at 20% 30%, rgba(56,189,248,0.15), transparent 60%), radial-gradient(700px 350px at 80% 50%, rgba(124,58,237,0.12), transparent 60%)'
        }} />
      </div>

      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">Benefits</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -left-8 -bottom-8 h-28 w-28 rounded-full bg-gradient-to-tr from-cyan-400/10 to-violet-500/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;