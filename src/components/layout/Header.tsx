'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/75 backdrop-blur-md border-b border-slate-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-36 h-10 flex items-center group-hover:scale-105 transition-transform">
            <Image
              src="/convalt_logo.png"
              alt="Convalt Energy Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/projects" className="hover:text-amber-400 transition-colors">
            Projects
          </Link>
          <Link href="/team" className="hover:text-amber-400 transition-colors">
            Team
          </Link>
          <Link href="/media" className="hover:text-amber-400 transition-colors">
            Media
          </Link>
          <Link href="/press-releases" className="hover:text-amber-400 transition-colors">
            Press
          </Link>
          <Link href="/resources" className="hover:text-amber-400 transition-colors">
            Resources
          </Link>
        </nav>

        {/* Header CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-colors shadow-md shadow-amber-500/10"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 text-base font-medium">
          <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400">
            Projects
          </Link>
          <Link href="/team" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400">
            Team
          </Link>
          <Link href="/media" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400">
            Media
          </Link>
          <Link href="/press-releases" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400">
            Press
          </Link>
          <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400">
            Resources
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-amber-400 font-semibold pt-2 border-t border-slate-800">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
