'use client';

import React from 'react';
import { HeroScene, SolarScene, PowerScene, DataCenterScene, RecyclingScene } from './Scenes';

interface SceneControllerProps {
  progress: number;
}

export default function SceneController({ progress }: SceneControllerProps) {
  // Progress ranges matching LANDING_SCENES configuration:
  // 0.0 - 0.2: Hero
  // 0.2 - 0.4: Solar
  // 0.4 - 0.6: Power
  // 0.6 - 0.8: Data Center
  // 0.8 - 1.0: Recycling
  return (
    <>
      <group visible={progress < 0.28}>
        <HeroScene />
      </group>
      <group visible={progress >= 0.15 && progress < 0.48}>
        <SolarScene />
      </group>
      <group visible={progress >= 0.35 && progress < 0.68}>
        <PowerScene />
      </group>
      <group visible={progress >= 0.55 && progress < 0.88}>
        <DataCenterScene />
      </group>
      <group visible={progress >= 0.75}>
        <RecyclingScene />
      </group>
    </>
  );
}
