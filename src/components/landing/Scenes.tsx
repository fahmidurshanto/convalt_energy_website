'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Ambient Particle Dust Atmosphere
export function EnergyParticles({ count = 800 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color('#f59e0b'), // Amber
      new THREE.Color('#38bdf8'), // Sky
      new THREE.Color('#10b981'), // Emerald
      new THREE.Color('#06b6d4'), // Cyan
      new THREE.Color('#a78bfa'), // Purple
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const chosenColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef} aria-hidden="true">
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 1. Hero: Orbital Reactor Core
export function HeroScene() {
  const outerRingRef = useRef<THREE.Group>(null);
  const innerRingRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (outerRingRef.current) outerRingRef.current.rotation.y += delta * 0.3;
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x += delta * 0.5;
      innerRingRef.current.rotation.z -= delta * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Core Glowing Orb */}
        <mesh aria-hidden="true">
          <sphereGeometry args={[1.3, 64, 64]} />
          <MeshDistortMaterial
            color="#f59e0b"
            emissive="#d97706"
            emissiveIntensity={0.8}
            roughness={0.1}
            distort={0.4}
            speed={2}
          />
        </mesh>

        {/* Outer Orbital Ring */}
        <group ref={outerRingRef}>
          <mesh rotation={[Math.PI / 3, 0, 0]} aria-hidden="true">
            <torusGeometry args={[2.8, 0.06, 16, 100]} />
            <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.6} roughness={0.2} metalness={0.9} />
          </mesh>
        </group>

        {/* Inner Counter-Rotating Ring */}
        <group ref={innerRingRef}>
          <mesh rotation={[-Math.PI / 4, 0, 0]} aria-hidden="true">
            <torusGeometry args={[2.2, 0.05, 16, 100]} />
            <meshStandardMaterial color="#f59e0b" emissive="#fbbf24" emissiveIntensity={0.5} roughness={0.1} metalness={1} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

// 2. Solar: Floating Wafer Array Grid
export function SolarScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef} position={[2, 0, 0]}>
        {Array.from({ length: 9 }).map((_, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          return (
            <group key={i} position={[(col - 1) * 1.6, (row - 1) * 1.4, 0]} rotation={[0.4, 0.2, 0]}>
              <mesh aria-hidden="true">
                <boxGeometry args={[1.4, 1.1, 0.08]} />
                <meshStandardMaterial
                  color="#0284c7"
                  emissive="#0369a1"
                  emissiveIntensity={0.4}
                  roughness={0.05}
                  metalness={0.95}
                />
              </mesh>
              {/* Photon Cell Frame Outline */}
              <lineSegments aria-hidden="true">
                <edgesGeometry args={[new THREE.BoxGeometry(1.42, 1.12, 0.09)]} />
                <lineBasicMaterial color="#38bdf8" />
              </lineSegments>
            </group>
          );
        })}
      </group>
    </Float>
  );
}

// 3. Power Generation: Kinetic Energy Beacon Tower
export function PowerScene() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.9}>
      <group position={[-2.2, 0, 0]}>
        {/* Tower Core Standard */}
        <mesh aria-hidden="true" position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.5, 4.5, 32]} />
          <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
        </mesh>

        {/* Pulse Emission Rings */}
        <group ref={ringsRef}>
          {[-1.5, -0.5, 0.5, 1.5].map((yPos, index) => (
            <mesh key={index} position={[0, yPos, 0]} rotation={[Math.PI / 2, 0, 0]} aria-hidden="true">
              <torusGeometry args={[1.2 - index * 0.15, 0.07, 16, 100]} />
              <meshStandardMaterial color="#10b981" emissive="#34d399" emissiveIntensity={0.8} roughness={0.1} />
            </mesh>
          ))}
        </group>

        {/* Beacon Light Apex */}
        <mesh position={[0, 2.3, 0]} aria-hidden="true">
          <octahedronGeometry args={[0.6]} />
          <MeshDistortMaterial color="#34d399" emissive="#10b981" emissiveIntensity={1} speed={3} distort={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

// 4. Data Center: Luminescent Server Monoliths
export function DataCenterScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={groupRef} position={[0.5, 0, 0]}>
        {[-2.2, -0.7, 0.8, 2.3].map((xPos, i) => (
          <group key={i} position={[xPos, 0, (i % 2) * 0.5]}>
            {/* Monolith Body */}
            <mesh aria-hidden="true">
              <boxGeometry args={[1.1, 3.8, 1.1]} />
              <meshStandardMaterial color="#0f172a" roughness={0.15} metalness={0.9} />
            </mesh>

            {/* Glowing Bus Light Strips */}
            <mesh position={[0, 0, 0.56]} aria-hidden="true">
              <planeGeometry args={[0.9, 3.4]} />
              <meshStandardMaterial color="#06b6d4" emissive="#22d3ee" emissiveIntensity={0.9} roughness={0.1} />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
}

// 5. Recycling: Interlocking Energy Loops
export function RecyclingScene() {
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.x += delta * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.y += delta * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
      <group position={[-1, 0, 0]}>
        {/* Ring 1 */}
        <group ref={ring1Ref}>
          <mesh aria-hidden="true">
            <torusGeometry args={[2.2, 0.18, 16, 100]} />
            <meshStandardMaterial color="#8b5cf6" emissive="#a78bfa" emissiveIntensity={0.7} roughness={0.1} metalness={0.8} />
          </mesh>
        </group>

        {/* Ring 2 (Interlocking) */}
        <group ref={ring2Ref} rotation={[0, Math.PI / 3, Math.PI / 4]}>
          <mesh aria-hidden="true">
            <torusGeometry args={[2.5, 0.14, 16, 100]} />
            <meshStandardMaterial color="#c084fc" emissive="#8b5cf6" emissiveIntensity={0.6} roughness={0.1} metalness={0.9} />
          </mesh>
        </group>

        {/* Reclaimed Core Crystal */}
        <mesh aria-hidden="true">
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#ddd6fe" emissive="#a78bfa" emissiveIntensity={0.4} wireframe />
        </mesh>
      </group>
    </Float>
  );
}
