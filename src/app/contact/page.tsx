import React from 'react';
import { constructMetadata } from '@/lib/seo';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = constructMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Convalt Energy for partnerships, investment opportunities, and project inquiries.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden bg-epic-grid">
      {/* Epic Ambient Radial Lighting Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none -z-10" />

      <main className="pt-36 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-float-slow">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Get in Touch</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Let&apos;s Build a Clean Energy Future Together
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Whether you represent an enterprise seeking zero-carbon power, a potential supplier, or an investor, our executive leadership is ready to connect.
            </p>

            <div className="space-y-6 text-slate-300">
              <div className="epic-glass-card p-6 rounded-2xl flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Headquarters</h3>
                  <p className="text-sm text-slate-400">Watertown, New York, United States</p>
                </div>
              </div>

              <div className="epic-glass-card p-6 rounded-2xl flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Email Inquiries</h3>
                  <p className="text-sm text-slate-400">info@convaltenergy.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
