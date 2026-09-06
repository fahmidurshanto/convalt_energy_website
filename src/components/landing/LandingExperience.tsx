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
    <div className="relative min-h-[500vh]">
      {/* 3D Canvas Background */}
      <LandingCanvas progress={scrollProgress} />

      {/* HTML Content Overlay */}
      <div className="relative z-10">
        {/* Section 1: Hero */}
        <section className="min-h-screen flex items-center justify-start px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-6 bg-slate-950/50 backdrop-blur-md p-8 rounded-2xl border border-slate-800/60 shadow-2xl">
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

        {/* Section 2: Solar */}
        <section id="solar" className="min-h-screen flex items-center justify-end px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-6 bg-slate-950/50 backdrop-blur-md p-8 rounded-2xl border border-slate-800/60 shadow-2xl">
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

        {/* Section 3: Power Generation */}
        <section id="power" className="min-h-screen flex items-center justify-start px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-6 bg-slate-950/50 backdrop-blur-md p-8 rounded-2xl border border-slate-800/60 shadow-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {LANDING_SCENES[2].eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {LANDING_SCENES[2].title}
            </h2>
            <p className="text-lg text-slate-300">
              {LANDING_SCENES[2].description}
            </p>
            <div className="pt-2">
              <a
                href="/projects"
                className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all shadow-lg shadow-emerald-500/20 inline-block"
              >
                Explore Power Facilities &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Data Center */}
        <section id="datacenter" className="min-h-screen flex items-center justify-end px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-6 bg-slate-950/50 backdrop-blur-md p-8 rounded-2xl border border-slate-800/60 shadow-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {LANDING_SCENES[3].eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {LANDING_SCENES[3].title}
            </h2>
            <p className="text-lg text-slate-300">
              {LANDING_SCENES[3].description}
            </p>
            <div className="pt-2">
              <a
                href="/resources"
                className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all inline-block"
              >
                Data Infrastructure Specs &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: Recycling & CTA */}
        <section id="recycling" className="min-h-screen flex items-center justify-center text-center px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-6 bg-slate-950/60 backdrop-blur-md p-10 rounded-3xl border border-slate-800/80 shadow-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {LANDING_SCENES[4].eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {LANDING_SCENES[4].title}
            </h2>
            <p className="text-lg text-slate-300">
              {LANDING_SCENES[4].description}
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-lg transition-all shadow-xl shadow-amber-500/20"
              >
                Partner With Us Today
              </a>
              <a
                href="/projects"
                className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-lg border border-slate-700 transition-all"
              >
                View Full Portfolio
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
