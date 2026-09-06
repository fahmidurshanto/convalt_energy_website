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
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Let&apos;s Build a Clean Energy Future Together
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Whether you represent an enterprise seeking zero-carbon power, a potential supplier, or an investor, our executive leadership is ready to connect.
            </p>

            <div className="space-y-6 text-slate-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 font-bold">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-white">Headquarters</h3>
                  <p className="text-sm text-slate-400">Watertown, New York, United States</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 font-bold">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email Inquiries</h3>
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
