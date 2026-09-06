import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center font-bold text-slate-950">
            C
          </div>
          <span className="text-lg font-bold text-white tracking-wider">
            CONVALT ENERGY
          </span>
        </div>
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Convalt Energy. All rights reserved. Pioneering Sustainable Power & Infrastructure.
        </p>
        <div className="flex space-x-6 text-xs text-slate-400">
          <Link href="/privacy" className="hover:text-amber-400">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-amber-400">Terms of Service</Link>
          <Link href="/contact" className="hover:text-amber-400">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
