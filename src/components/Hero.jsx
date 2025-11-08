import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, CalendarDays, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="intro" className="relative min-h-screen w-full overflow-hidden bg-[#0A0B14] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0"> 
        <Spline 
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" 
          style={{ width: '100%', height: '100%' }} 
        />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0B14]/40 via-transparent to-[#0A0B14]" />
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage: 'radial-gradient(1200px 600px at 50% 10%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(1000px 500px at 80% 20%, rgba(56,189,248,0.20), transparent 60%)'
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-white/80">Hyper Animated Hackathon</span>
        </div>

        <h1 className="text-balance bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Build the Future. Faster.
        </h1>
        
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
          A vibrant, technology-forward hackathon experience with immersive 3D, bold visuals, and non-stop energy. Code, create, and launch your next big idea.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
            <CalendarDays className="h-4 w-4 text-violet-300" />
            <span>June 21–23</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
            <MapPin className="h-4 w-4 text-cyan-300" />
            <span>Hybrid • Worldwide</span>
          </div>
          <a href="#contact" className="rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 font-medium text-[#0A0B14] shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.02] active:scale-95">
            Register Interest
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;