'use client';

import React, { useEffect, useState } from 'react';
import LandingCanvas from './LandingCanvas';
import { LANDING_SCENES } from '@/content/landing';

export default function LandingExperience() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = window.scrollY / totalHeight;
        setScrollProgress(Math.max(0, Math.min(1, current)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[250vh]">
      {/* 3D Canvas Background */}
      <LandingCanvas progress={scrollProgress} />

      {/* HTML Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-start px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-6 bg-slate-950/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-800/40">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {LANDING_SCENES[0].eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              {LANDING_SCENES[0].title}
            </h1>
            <p className="text-lg text-slate-300">
              {LANDING_SCENES[0].description}
            </p>
            <div className="pt-2 flex items-center space-x-4">
              <a
                href="#solar"
                className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-all shadow-lg shadow-amber-500/20"
              >
                Discover Innovation
              </a>
            </div>
          </div>
        </section>

        {/* Solar Section */}
        <section id="solar" className="min-h-screen flex items-center justify-end px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-6 bg-slate-950/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-800/40">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-sky-500/10 text-sky-400 border border-sky-500/20">
              {LANDING_SCENES[1].eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {LANDING_SCENES[1].title}
            </h2>
            <p className="text-lg text-slate-300">
              {LANDING_SCENES[1].description}
            </p>
            <div className="pt-2">
              <a
                href="/projects"
                className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all inline-block"
              >
                View Manufacturing Projects &rarr;
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
