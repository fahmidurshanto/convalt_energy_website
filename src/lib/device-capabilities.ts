import { DeviceCapabilities, DevicePerformanceTier } from '@/types/scenes';

export function detectWebGL(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function detectCapabilities(): DeviceCapabilities {
  if (typeof window === 'undefined') {
    return {
      webglSupported: true,
      prefersReducedMotion: false,
      tier: 'tier1',
    };
  }

  const webglSupported = detectWebGL();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  let tier: DevicePerformanceTier = 'tier1';

  if (!webglSupported || prefersReducedMotion) {
    tier = 'tier3';
  } else if (isMobile || (window.innerWidth && window.innerWidth < 768)) {
    tier = 'tier2';
  }

  return {
    webglSupported,
    prefersReducedMotion,
    tier,
  };
}
