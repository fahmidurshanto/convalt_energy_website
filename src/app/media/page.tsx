import React from 'react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Media & News',
  description: 'Latest media features, news coverage, and official assets from Convalt Energy.',
  path: '/media',
});

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
            Media & Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            News Coverage & Brand Assets
          </h1>
          <p className="text-lg text-slate-400">
            Access press releases, media kits, video features, and clean energy industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Official Brand Assets</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Download high-resolution logos, executive headshots, and manufacturing plant media kits.
            </p>
            <button className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-colors">
              Download Media Kit (.ZIP)
            </button>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Media Inquiries</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              For journalist questions, interview requests, or official press statements, get in touch with our communications team.
            </p>
            <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-colors">
              Contact Media Relations &rarr;
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
