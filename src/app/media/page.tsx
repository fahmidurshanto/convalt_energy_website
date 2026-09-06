import React from 'react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Media & News',
  description: 'Latest media features, news coverage, and official assets from Convalt Energy.',
  path: '/media',
});

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden bg-epic-grid">
      {/* Epic Ambient Radial Lighting Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none -z-10" />

      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full relative z-10">
        <div className="max-w-3xl mb-16 animate-float-slow">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Media & Insights</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            News Coverage & Brand Assets
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Access press releases, media kits, video features, and clean energy industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="epic-glass-card rounded-2xl p-8 group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
              Official Brand Assets
            </h2>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Download high-resolution logos, executive headshots, and manufacturing plant media kits.
            </p>
            <button className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold transition-all shadow-lg shadow-amber-500/20">
              Download Media Kit (.ZIP)
            </button>
          </div>

          <div className="epic-glass-card rounded-2xl p-8 group">
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
              Media Inquiries
            </h2>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              For journalist questions, interview requests, or official press statements, get in touch with our communications team.
            </p>
            <a href="/contact" className="inline-block px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold border border-amber-500/30 transition-all">
              Contact Media Relations &rarr;
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
