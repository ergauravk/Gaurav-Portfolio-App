'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

function SceneContent() {
  const groupRef = useRef<THREE.Group | null>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const count = 900;
    const radius = 6;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Slightly biased distribution for depth
      const r = radius * Math.pow(Math.random(), 0.55);
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 5.5;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    return positions;
  }, []);

  useFrame(({ clock, mouse }) => {
    const g = groupRef.current;
    if (!g) return;

    const t = clock.getElapsedTime();

    // Subtle camera-like parallax via group rotation
    const mx = (mouse.x ?? 0) * 0.35;
    const my = (mouse.y ?? 0) * 0.35;

    g.rotation.x = my;
    g.rotation.y = mx + Math.sin(t * 0.12) * 0.25;
    g.position.y = Math.sin(t * 0.25) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.25} />

      {/* Floating point cloud */}
      <points>
        <bufferGeometry>
          <bufferAttribute
                      attach="attributes-position"
                      count={particles.length / 3}
                      array={particles}
                      itemSize={3} args={[]}          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          sizeAttenuation
          color="#f59e0b"
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Soft fog-like plane using a translucent sphere */}
      <mesh scale={[viewport.width / 2, 6, viewport.width / 2]} position={[0, -1.5, -4]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.07} />
      </mesh>
    </group>
  );
}

export default function ThreeSceneBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.8, 10], fov: 50, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        // keep this cheap
        style={{ opacity: 0.85 }}
      >
        <color attach="background" args={['rgba(0,0,0,0)']} />
        <SceneContent />
      </Canvas>

      {/* Extra subtle vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(245,158,11,0.08) 0%, rgba(14,12,10,0) 55%, rgba(14,12,10,0.55) 100%)',
        }}
      />
    </div>
  );
}

