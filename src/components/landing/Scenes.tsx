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
      <mesh aria-hidden="true">
        <icosahedronGeometry args={[2, 2]} />
        <meshStandardMaterial
          color="#f59e0b"
          wireframe
          emissive="#f59e0b"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh aria-hidden="true">
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
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={i}
          position={[(i % 3 - 1) * 1.8, Math.floor(i / 3) * 1.5 - 0.75, 0]}
          rotation={[0.3, 0, 0]}
          aria-hidden="true"
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

export function PowerScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[-2, 0, -1]}>
      {/* Abstract Wind Turbine / Power Tower Assembly */}
      <mesh position={[0, 0, 0]} aria-hidden="true">
        <cylinderGeometry args={[0.2, 0.4, 4, 16]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0, 2, 0]} rotation={[0, 0, Math.PI / 4]} aria-hidden="true">
        <torusGeometry args={[1.2, 0.08, 16, 100]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export function DataCenterScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Hyper-scale Server Rack Grid */}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh
          key={i}
          position={[(i - 1.5) * 1.5, 0, 0]}
          aria-hidden="true"
        >
          <boxGeometry args={[1, 3, 1]} />
          <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.9} />
        </mesh>
      ))}
      <mesh position={[0, 1.6, 0]} aria-hidden="true">
        <boxGeometry args={[6, 0.1, 1.2]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

export function RecyclingScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.3;
      groupRef.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[-1, 0, 0]}>
      {/* Circular Recovery Cycle Loop */}
      <mesh aria-hidden="true">
        <torusGeometry args={[2.2, 0.25, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.2} metalness={0.7} emissive="#8b5cf6" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0, 0]} aria-hidden="true">
        <dodecahedronGeometry args={[1]} />
        <meshStandardMaterial color="#a78bfa" wireframe />
      </mesh>
    </group>
  );
}
