import React from 'react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Resources & Downloads',
  description: 'Technical whitepapers, ESG reports, and clean energy documentation from Convalt Energy.',
  path: '/resources',
});

const RESOURCES = [
  {
    title: '2026 Convalt Energy ESG & Sustainability Report',
    type: 'PDF Document',
    size: '4.2 MB',
    description: 'Comprehensive overview of our environmental performance, carbon metrics, and community impact.',
  },
  {
    title: 'Domestic Solar Manufacturing Specifications',
    type: 'Whitepaper',
    size: '1.8 MB',
    description: 'Detailed specifications for our high-efficiency solar module architecture and manufacturing standards.',
  },
  {
    title: 'Zero-Carbon Data Center Integration Framework',
    type: 'Technical Guide',
    size: '2.5 MB',
    description: 'Engineering guide for co-locating hyperscale computing workloads with solar microgrids.',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden bg-epic-grid">
      {/* Epic Ambient Radial Lighting Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none -z-10" />

      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full relative z-10">
        <div className="max-w-3xl mb-16 animate-float-slow">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Documentation Hub</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Resources & Whitepapers
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Explore downloadable technical documentation, ESG frameworks, and corporate publications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map((item, index) => (
            <div key={index} className="epic-glass-card rounded-2xl p-8 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{item.type}</span>
                  <span className="text-xs text-slate-400 font-medium">{item.size}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{item.description}</p>
              </div>
              <button className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 text-sm font-bold border border-amber-500/30 transition-all">
                Download Resource
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
