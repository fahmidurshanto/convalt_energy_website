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
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
            Documentation Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Resources & Whitepapers
          </h1>
          <p className="text-lg text-slate-400">
            Explore downloadable technical documentation, ESG frameworks, and corporate publications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map((item, index) => (
            <div key={index} className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 flex flex-col justify-between hover:border-amber-500/30 transition-all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{item.type}</span>
                  <span className="text-xs text-slate-500">{item.size}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.description}</p>
              </div>
              <button className="w-full py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-colors">
                Download Resource
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
