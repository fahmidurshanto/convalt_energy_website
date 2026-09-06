'use client';

import React from 'react';
import { HeroScene, SolarScene } from './Scenes';

interface SceneControllerProps {
  progress: number;
}

export default function SceneController({ progress }: SceneControllerProps) {
  // Simple opacity/visibility transition based on progress thresholds
  const isHeroActive = progress < 0.45;
  const isSolarActive = progress >= 0.25;

  return (
    <>
      <group visible={isHeroActive}>
        <HeroScene />
      </group>
      <group visible={isSolarActive}>
        <SolarScene />
      </group>
    </>
  );
}
