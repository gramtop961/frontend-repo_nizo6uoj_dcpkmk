import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

// Reusable 3D background that subtly follows scroll within its section
// Place as an absolutely positioned child inside a relatively positioned section
const SectionScene = ({ sceneUrl = 'https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode' }) => {
  const wrapRef = useRef(null);

  useEffect(() => {
    const sync = () => {
      const el = wrapRef.current;
      if (!el) return;
      const section = el.parentElement; // the section container
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress peaks when section center aligns with viewport center
      const centerDist = Math.abs((rect.top + rect.height / 2) - vh / 2);
      const norm = clamp(1 - centerDist / (vh * 0.7), 0, 1);

      const translateY = (1 - norm) * 40 - 20; // float up/down
      const scale = 0.95 + norm * 0.1; // subtle scale in
      const rotate = (1 - norm) * 4 - 2; // gentle rock

      el.style.opacity = String(0.2 + norm * 0.8);
      el.style.transform = `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`;
    };

    const onScroll = () => requestAnimationFrame(sync);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    sync();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 will-change-transform transition-transform duration-100 ease-out"
      aria-hidden
    >
      <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default SectionScene;
