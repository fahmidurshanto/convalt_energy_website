'use client';

import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { LANDING_SCENES } from '@/content/landing';

interface CameraRigProps {
  progress: number;
}

export default function CameraRig({ progress }: CameraRigProps) {
  const { camera } = useThree();
  const currentPos = THREE.Vector3.prototype;

  useFrame(() => {
    // Interpolate camera position based on scroll progress across available scenes
    const sceneCount = LANDING_SCENES.length;
    const clampedProgress = Math.max(0, Math.min(1, progress));
    
    // Determine active segment index
    const segment = clampedProgress * (sceneCount - 1);
    const index = Math.floor(segment);
    const subProgress = segment - index;

    const fromConfig = LANDING_SCENES[index] || LANDING_SCENES[0];
    const toConfig = LANDING_SCENES[Math.min(index + 1, sceneCount - 1)];

    const targetPos = new THREE.Vector3().lerpVectors(
      new THREE.Vector3(...fromConfig.camera.position),
      new THREE.Vector3(...toConfig.camera.position),
      subProgress
    );

    const targetLookAt = new THREE.Vector3().lerpVectors(
      new THREE.Vector3(...fromConfig.camera.target),
      new THREE.Vector3(...toConfig.camera.target),
      subProgress
    );

    camera.position.lerp(targetPos, 0.1);
    camera.lookAt(targetLookAt);
  });

  return null;
}
