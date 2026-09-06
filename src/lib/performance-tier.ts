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

export function sampleFPS(callback: (tier: DevicePerformanceTier) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  let frameCount = 0;
  let startTime = performance.now();
  let animationFrameId: number;

  const checkFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;

    if (elapsed >= 1000) {
      const fps = (frameCount * 1000) / elapsed;
      if (fps < 24) {
        callback('tier3');
      } else if (fps < 45) {
        callback('tier2');
      } else {
        callback('tier1');
      }
      frameCount = 0;
      startTime = performance.now();
    } else {
      animationFrameId = requestAnimationFrame(checkFPS);
    }
  };

  animationFrameId = requestAnimationFrame(checkFPS);

  return () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  };
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
