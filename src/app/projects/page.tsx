import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { PROJECTS_DATA } from '@/content/projects';

export const metadata = constructMetadata({
  title: 'Renewable Projects & Facilities',
  description: 'Explore Convalt Energy utility-scale solar generation, panel manufacturing, and zero-carbon data infrastructure projects.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden bg-epic-grid">
      {/* Epic Ambient Radial Lighting Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none -z-10" />

      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full relative z-10">
        <div className="max-w-3xl mb-16 animate-float-slow">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Our Portfolio</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Clean Energy Projects & Facilities
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            From domestic solar manufacturing campuses to utility-scale renewable power and zero-carbon data infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.slug}
              className="epic-glass-card rounded-2xl p-8 flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-3">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2 mb-6 text-xs text-slate-300 border-t border-b border-slate-800/80 py-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="font-semibold text-white">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Capacity:</span>
                    <span className="font-semibold text-white">{project.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="font-semibold text-emerald-400">{project.status}</span>
                  </div>
                </div>
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center text-sm font-bold text-amber-400 group-hover:translate-x-1 transition-transform"
              >
                View Project Details &rarr;
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
