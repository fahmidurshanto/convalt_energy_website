import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PRESS_RELEASES_DATA } from '@/content/press-releases';
import { constructMetadata } from '@/lib/seo';

interface PRDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PRDetailProps) {
  const { slug } = await params;
  const pr = PRESS_RELEASES_DATA.find((p) => p.slug === slug);
  if (!pr) return {};

  return constructMetadata({
    title: pr.title,
    description: pr.summary,
    path: `/press-releases/${slug}`,
  });
}

export default async function PRDetailPage({ params }: PRDetailProps) {
  const { slug } = await params;
  const pr = PRESS_RELEASES_DATA.find((p) => p.slug === slug);

  if (!pr) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto flex-grow w-full">
        <Link
          href="/press-releases"
          className="inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors mb-8"
        >
          &larr; Back to Press Releases
        </Link>

        <span className="text-xs text-slate-500 block mb-3 font-medium">{pr.date}</span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
          {pr.title}
        </h1>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-lg leading-relaxed border-t border-slate-800 pt-8">
          <p>{pr.content}</p>
        </div>
      </main>
    </div>
  );
}
