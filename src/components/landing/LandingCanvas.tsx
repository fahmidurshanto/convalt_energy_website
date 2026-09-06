'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import CameraRig from './CameraRig';
import SceneController from './SceneController';

interface LandingCanvasProps {
  progress: number;
}

export default function LandingCanvas({ progress }: LandingCanvasProps) {
  return (
    <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#38bdf8" />
        
        <CameraRig progress={progress} />
        <SceneController progress={progress} />
      </Canvas>
    </div>
  );
}
