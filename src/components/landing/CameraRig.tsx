'use client';

import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { LANDING_SCENES } from '@/content/landing';

interface CameraRigProps {
  progress: number;
}

export default function CameraRig({ progress }: CameraRigProps) {
  const { camera } = useThree();

  useFrame((state) => {
    // Interpolate camera position based on scroll progress across available scenes
    const sceneCount = LANDING_SCENES.length;
    const clampedProgress = Math.max(0, Math.min(1, progress));
    
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

    // Dynamic subtle mouse parallax
    const mouseX = (state.pointer.x * 0.4);
    const mouseY = (state.pointer.y * 0.4);
    targetPos.x += mouseX;
    targetPos.y += mouseY;

    // Smooth spring physics damping
    camera.position.lerp(targetPos, 0.08);
    camera.lookAt(targetLookAt);
  });

  return null;
}
