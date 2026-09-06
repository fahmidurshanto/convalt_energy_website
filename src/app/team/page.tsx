import React from 'react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Leadership & Team',
  description: 'Meet the executive leadership and engineering experts behind Convalt Energy.',
  path: '/team',
});

const TEAM_MEMBERS = [
  {
    name: 'Hari Achuthan',
    role: 'Founder & CEO',
    bio: 'Pioneering sustainable infrastructure investments, global solar module manufacturing, and clean energy transition.',
  },
  {
    name: 'Executive Leadership Team',
    role: 'Operations & Global Engineering',
    bio: 'Decades of combined expertise in renewable energy plant operations, grid technology, and advanced automation.',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden bg-epic-grid">
      {/* Epic Ambient Radial Lighting Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none -z-10" />

      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full relative z-10">
        <div className="max-w-3xl mb-16 animate-float-slow">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Our Team</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Visionaries Driving Clean Energy Transition
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Convalt Energy is led by industry pioneers dedicated to building domestic solar manufacturing capabilities and scaling renewable energy infrastructure globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className="epic-glass-card rounded-2xl p-8 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 border border-amber-400/30 flex items-center justify-center font-extrabold text-slate-950 text-2xl mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{member.name}</h3>
              <p className="text-sm font-semibold text-amber-400 mb-4 tracking-wide">{member.role}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
