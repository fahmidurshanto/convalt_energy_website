import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS_DATA } from '@/content/projects';
import { constructMetadata } from '@/lib/seo';

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto flex-grow w-full">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors mb-8"
        >
          &larr; Back to Projects
        </Link>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4 block w-max">
          {project.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          {project.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900/60 border border-slate-800 rounded-xl p-6 mb-12">
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-wider block">Location</span>
            <span className="text-lg font-medium text-white">{project.location}</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-wider block">Capacity</span>
            <span className="text-lg font-medium text-white">{project.capacity}</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-wider block">Status</span>
            <span className="text-lg font-medium text-emerald-400">{project.status}</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
          <h2 className="text-2xl font-bold text-white">Project Overview</h2>
          <p className="text-lg leading-relaxed">{project.description}</p>

          <h3 className="text-xl font-semibold text-white pt-4">Key Highlights</h3>
          <ul className="list-disc pl-6 space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-slate-400">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
