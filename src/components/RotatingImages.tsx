'use client';
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

interface ImagePlaneProps {
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
}

const ImagePlane: React.FC<ImagePlaneProps> = ({ url, position, rotation }) => {
  const texture = useLoader(TextureLoader, url);
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[5, 3]} /> {/* Make rectangular and bigger */}
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

interface RotatingImagesProps {
  imageUrls: string[];
}

// New component to render inside Canvas
const RotatingImageGroup: React.FC<{ imageUrls: string[] }> = ({ imageUrls }) => {
  const groupRef = useRef<any>();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003; // Keep a base rotation
    }
  });

  // Adjusted positions for a curved, slightly overlapping arrangement (for rectangular images)
  const positions: [number, number, number][] = [
    [4, 0, 2],    // Right front
    [1.5, 0, 4],    // Front right
    [-1.5, 0, 4],   // Front left
    [-4, 0, 2],   // Left front
  ];

  // Rotations to face slightly inwards and create perspective (might need slight adjustment)
  const rotations: [number, number, number][] = [
    [0, Math.PI / 4, 0],   // Right front (angled inwards)
    [0, Math.PI / 8, 0],   // Front right (slightly angled inwards)
    [0, -Math.PI / 8, 0],  // Front left (slightly angled inwards)
    [0, -Math.PI / 4, 0],  // Left front (angled inwards)
  ];

  return (
    <group ref={groupRef}>
      {imageUrls.map((url, index) => (
        <ImagePlane
          key={index}
          url={url}
          position={positions[index]}
          rotation={rotations[index]}
        />
      ))}
    </group>
  );
};

const RotatingImages: React.FC<RotatingImagesProps> = ({ imageUrls }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}> {/* Adjust camera position */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <RotatingImageGroup imageUrls={imageUrls} />
        </Suspense>
        {/* Enable OrbitControls for user interaction */}
        <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default RotatingImages; 