import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Leadership & Team | Convalt Energy',
  description: 'Meet the executive leadership and engineering experts behind Convalt Energy.',
};

const TEAM_MEMBERS = [
  {
    name: 'Hari Achuthan',
    role: 'Founder & CEO',
    bio: 'Pioneering sustainable infrastructure investments and clean technology manufacturing.',
  },
  {
    name: 'Executive Leadership',
    role: 'Operations & Engineering',
    bio: 'Decades of combined experience in renewable energy development and global manufacturing.',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Visionaries Driving Clean Energy Transition
          </h1>
          <p className="text-lg text-slate-400">
            Convalt Energy is led by industry pioneers dedicated to building domestic solar manufacturing capabilities and scaling renewable energy infrastructure globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 hover:border-amber-500/30 transition-all shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-amber-500 text-xl mb-6">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-amber-400 mb-4">{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
