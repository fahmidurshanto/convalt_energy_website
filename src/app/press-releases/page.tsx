import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { PRESS_RELEASES_DATA } from '@/content/press-releases';

export const metadata = constructMetadata({
  title: 'Press Releases',
  description: 'Official announcements, project milestones, and corporate updates from Convalt Energy.',
  path: '/press-releases',
});

export default function PressReleasesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
            Press & Announcements
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Official Press Releases
          </h1>
          <p className="text-lg text-slate-400">
            Stay updated with our latest corporate announcements, manufacturing expansions, and sustainability milestones.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl">
          {PRESS_RELEASES_DATA.map((pr) => (
            <div
              key={pr.slug}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 hover:border-amber-500/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <span className="text-xs text-slate-500 block mb-2 font-medium">{pr.date}</span>
                <h2 className="text-xl font-bold text-white mb-2">{pr.title}</h2>
                <p className="text-slate-400 text-sm">{pr.summary}</p>
              </div>
              <Link
                href={`/press-releases/${pr.slug}`}
                className="whitespace-nowrap px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 text-sm font-semibold transition-colors border border-slate-700"
              >
                Read Article &rarr;
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
