import React from 'react';

const SectionHeader = ({ eyebrow, title, desc }) => (
  <div className="relative z-10 mx-auto mb-10 max-w-3xl text-center">
    {eyebrow && (
      <div className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        {eyebrow}
      </div>
    )}
    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
      {title}
    </h2>
    {desc && (
      <p className="mt-3 text-white/70">{desc}</p>
    )}
  </div>
);

export default SectionHeader;
