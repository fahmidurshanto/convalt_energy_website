'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import WebGLFallback from '@/components/landing/WebGLFallback';
import { detectCapabilities } from '@/lib/device-capabilities';
import { DeviceCapabilities } from '@/types/scenes';

const LandingExperience = dynamic(() => import('@/components/landing/LandingExperience'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
        <span className="text-sm font-medium tracking-wide">Loading 3D Experience...</span>
      </div>
    </div>
  ),
});

export default function Home() {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities | null>(null);

  useEffect(() => {
    setCapabilities(detectCapabilities());
  }, []);

  if (capabilities && (capabilities.tier === 'tier3' || !capabilities.webglSupported || capabilities.prefersReducedMotion)) {
    return <WebGLFallback />;
  }

  return <LandingExperience />;
}
