export type SceneConfig = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  startProgress: number;
  endProgress: number;
  camera: {
    position: [number, number, number];
    target: [number, number, number];
  };
  model?: string;
  enabled: boolean;
};

export type DevicePerformanceTier = 'tier1' | 'tier2' | 'tier3';

export type DeviceCapabilities = {
  webglSupported: boolean;
  prefersReducedMotion: boolean;
  tier: DevicePerformanceTier;
};
