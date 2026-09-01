import React from 'react';

const heroBg = '/images/517709ldsdl-964x777.jpg';

export const HeroArtPanel: React.FC = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute top-0 right-0 hidden h-screen w-[42vw] lg:block"
  >
    <img src={heroBg} alt="" className="h-full w-full scale-105 object-cover object-[62%_38%]" />
    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-950/10 to-[#f4f2ee]/95" />
    <div className="absolute inset-0 bg-zinc-900/20 mix-blend-multiply" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
  </div>
);
