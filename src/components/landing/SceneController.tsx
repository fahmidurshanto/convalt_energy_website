'use client';

import React from 'react';
import { HeroScene, SolarScene, PowerScene, DataCenterScene, RecyclingScene, EnergyParticles } from './Scenes';

interface SceneControllerProps {
  progress: number;
}

export default function SceneController({ progress }: SceneControllerProps) {
  return (
    <>
      <EnergyParticles count={1000} />
      
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
