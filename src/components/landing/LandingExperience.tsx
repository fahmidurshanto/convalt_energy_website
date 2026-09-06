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
          <div className="max-w-xl space-y-6 bg-slate-950/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.15)] transition-all">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>{LANDING_SCENES[0].eyebrow}</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {LANDING_SCENES[0].title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {LANDING_SCENES[0].description}
            </p>
            <div className="pt-2 flex items-center space-x-4">
              <a
                href="#solar"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold transition-all shadow-lg shadow-amber-500/25 hover:scale-105"
              >
                Discover Innovation
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Solar */}
        <section id="solar" className="min-h-screen flex items-center justify-end px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-6 bg-slate-950/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-sky-500/20 shadow-[0_0_50px_rgba(56,189,248,0.15)] transition-all">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-sky-500/10 text-sky-400 border border-sky-500/30">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>{LANDING_SCENES[1].eyebrow}</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {LANDING_SCENES[1].title}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {LANDING_SCENES[1].description}
            </p>
            <div className="pt-2">
              <a
                href="/projects"
                className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 font-bold border border-sky-500/30 transition-all hover:scale-105 inline-block"
              >
                View Manufacturing Projects &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: Power Generation */}
        <section id="power" className="min-h-screen flex items-center justify-start px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-6 bg-slate-950/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.15)] transition-all">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{LANDING_SCENES[2].eyebrow}</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {LANDING_SCENES[2].title}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {LANDING_SCENES[2].description}
            </p>
            <div className="pt-2">
              <a
                href="/projects"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/25 hover:scale-105 inline-block"
              >
                Explore Power Facilities &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Data Center */}
        <section id="datacenter" className="min-h-screen flex items-center justify-end px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-6 bg-slate-950/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)] transition-all">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{LANDING_SCENES[3].eyebrow}</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {LANDING_SCENES[3].title}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {LANDING_SCENES[3].description}
            </p>
            <div className="pt-2">
              <a
                href="/resources"
                className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 font-bold border border-cyan-500/30 transition-all hover:scale-105 inline-block"
              >
                Data Infrastructure Specs &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: Recycling & CTA */}
        <section id="recycling" className="min-h-screen flex items-center justify-center text-center px-8 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-6 bg-slate-950/70 backdrop-blur-2xl p-10 md:p-12 rounded-3xl border border-purple-500/30 shadow-[0_0_60px_rgba(167,139,250,0.2)] transition-all">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-purple-500/10 text-purple-400 border border-purple-500/30">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span>{LANDING_SCENES[4].eyebrow}</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {LANDING_SCENES[4].title}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {LANDING_SCENES[4].description}
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-lg transition-all shadow-xl shadow-amber-500/25 hover:scale-105"
              >
                Partner With Us Today
              </a>
              <a
                href="/projects"
                className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold text-lg border border-slate-700 transition-all hover:scale-105"
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
