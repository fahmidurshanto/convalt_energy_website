'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function HeroScene() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Abstract Core */}
      <mesh>
        <icosahedronGeometry args={[2, 2]} />
        <meshStandardMaterial
          color="#f59e0b"
          wireframe
          emissive="#f59e0b"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      {/* Inner Glowing Sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#d97706"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

export function SolarScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      {/* Solar Panel Array Prototype Primitives */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={i}
          position={[(i % 3 - 1) * 1.8, Math.floor(i / 3) * 1.5 - 0.75, 0]}
          rotation={[0.3, 0, 0]}
        >
          <boxGeometry args={[1.5, 1.2, 0.1]} />
          <meshStandardMaterial
            color="#0284c7"
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}
