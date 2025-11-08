import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, CalendarDays, MapPin } from 'lucide-react';

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

const Hero = () => {
  const sceneRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight || 1;
      const y = window.scrollY || window.pageYOffset || 0;
      const progress = clamp(y / vh, 0, 1); // 0 -> 1 over first viewport

      // Subtle parallax/scale/rotate on scroll for the 3D canvas wrapper
      const translateY = progress * -40; // move up slightly
      const scale = 1 + progress * 0.06; // gentle scale up
      const rotate = progress * 3; // tiny rotate
      if (sceneRef.current) {
        sceneRef.current.style.transform = `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`;
      }

      // Fade content out a bit as user scrolls past hero
      if (contentRef.current) {
        const opacity = 1 - progress * 0.6;
        contentRef.current.style.opacity = String(clamp(opacity, 0.2, 1));
      }
    };

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="intro" className="relative min-h-screen w-full overflow-hidden bg-[#0A0B14] text-white">
      {/* 3D Scene */}
      <div ref={sceneRef} className="absolute inset-0 will-change-transform transition-transform duration-75 ease-out">
        <Spline
          scene="https://prod.spline.design/EaQv24wazlheTQrd/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (kept non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0B14]/40 via-transparent to-[#0A0B14]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(1200px 600px at 50% 10%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(1000px 500px at 80% 20%, rgba(56,189,248,0.20), transparent 60%)',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center transition-opacity duration-300"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-white/80">Hyper Animated Hackathon</span>
        </div>

        <h1 className="text-balance bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Scroll to Animate the Future
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
          A chrome spiral torus comes alive as you scroll. Keep going — sections reveal themselves when you reach them.
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
          <a
            href="#tracks"
            className="rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 font-medium text-[#0A0B14] shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.02] active:scale-95"
          >
            Explore Tracks
          </a>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60">
          Scroll to animate ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;