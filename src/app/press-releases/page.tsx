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
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden bg-epic-grid">
      {/* Epic Ambient Radial Lighting Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none -z-10" />

      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full relative z-10">
        <div className="max-w-3xl mb-16 animate-float-slow">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Press & Announcements</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Official Press Releases
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Stay updated with our latest corporate announcements, manufacturing expansions, and sustainability milestones.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl">
          {PRESS_RELEASES_DATA.map((pr) => (
            <div
              key={pr.slug}
              className="epic-glass-card rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group"
            >
              <div>
                <span className="text-xs text-amber-400 font-semibold block mb-2">{pr.date}</span>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {pr.title}
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">{pr.summary}</p>
              </div>
              <Link
                href={`/press-releases/${pr.slug}`}
                className="whitespace-nowrap px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 text-sm font-bold transition-all border border-amber-500/30"
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
