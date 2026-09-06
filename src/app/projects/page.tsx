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
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Clean Energy Projects & Facilities
          </h1>
          <p className="text-lg text-slate-400">
            From domestic solar manufacturing campuses to utility-scale renewable power and zero-carbon data infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.slug}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-medium text-amber-400 uppercase tracking-wider block mb-2">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2 mb-6 text-xs text-slate-300 border-t border-b border-slate-800 py-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Capacity:</span>
                    <span className="font-medium">{project.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="font-medium text-emerald-400">{project.status}</span>
                  </div>
                </div>
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
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
