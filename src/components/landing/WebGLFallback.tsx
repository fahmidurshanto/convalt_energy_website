'use client';

import React from 'react';
import Image from 'next/image';

export default function WebGLFallback() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 py-24 overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-950 to-slate-950 -z-10" />
      
      <div className="max-w-3xl text-center space-y-6 flex flex-col items-center">
        <div className="relative w-48 h-14 mb-2">
          <Image
            src="/convalt_logo.png"
            alt="Convalt Energy Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100">
          Powering a Sustainable Future
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Pioneering clean energy solutions, advanced solar manufacturing, and sustainable infrastructure across the globe.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-colors shadow-lg shadow-amber-500/20"
          >
            Explore Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
