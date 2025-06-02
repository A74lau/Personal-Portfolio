'use client';
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

// Helper for animated ring
function AnimatedRing({ radius, tube, color, speed, arc = 1, offset = 0, segments = 100 }: {
  radius: number;
  tube: number;
  color: string;
  speed: number;
  arc?: number;
  offset?: number;
  segments?: number;
}) {
  const ref = useRef<any>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed + offset;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 16, segments, Math.PI * 2 * arc]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        roughness={0.1}
        metalness={0.7}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

// Helper for dots/circles
function Dots({ radius, count, color, speed, y = 0 }: {
  radius: number;
  count: number;
  color: string;
  speed: number;
  y?: number;
}) {
  const group = useRef<any>(null);
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.z = clock.getElapsedTime() * speed;
    }
  });
  return (
    <group ref={group}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (2 * Math.PI * i) / count;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
          </mesh>
        );
      })}
    </group>
  );
}

function HudRings() {
  // Main animated rings and segments
  return (
    <group>
      {/* Main full rings */}
      <AnimatedRing radius={1.2} tube={0.04} color={'#00fff7'} speed={0.12} />
      <AnimatedRing radius={1.6} tube={0.03} color={'#00bfff'} speed={-0.08} />
      <AnimatedRing radius={2.0} tube={0.02} color={'#00fff7'} speed={0.06} />
      {/* Segmented/partial rings */}
      <AnimatedRing radius={1.4} tube={0.06} color={'#00fff7'} speed={-0.18} arc={0.3} offset={Math.PI/4} segments={40} />
      <AnimatedRing radius={1.8} tube={0.05} color={'#00bfff'} speed={0.15} arc={0.18} offset={Math.PI/2} segments={30} />
      <AnimatedRing radius={2.2} tube={0.03} color={'#00fff7'} speed={-0.09} arc={0.12} offset={Math.PI/1.2} segments={20} />
      {/* Dots/circles */}
      <Dots radius={1.2} count={18} color={'#00fff7'} speed={-0.13} />
      <Dots radius={1.6} count={12} color={'#00bfff'} speed={0.09} y={0.03} />
      <Dots radius={2.0} count={8} color={'#00fff7'} speed={-0.07} y={-0.03} />
      {/* Center glow */}
      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial color={'#00fff7'} emissive={'#00fff7'} emissiveIntensity={1.5} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

const ThreeDCircle = () => {
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[600px]">
      {/* Overlayed welcome and instructions */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <div className="bg-black/60 rounded-xl px-6 py-4 mb-2 shadow-lg max-w-md text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-1">Welcome!</h2>
              <p className="text-base md:text-lg text-white opacity-90">
                Use your mouse or touch to rotate and zoom the 3D interface.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <HudRings />
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default ThreeDCircle; 