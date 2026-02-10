"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function InteractiveGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const { x, y } = state.mouse;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, y * 0.5, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.5, 0.1);
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.5}
          chromaticAberration={0.05}
          anisotropy={0.3}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          color="#ffd700"
        />
      </mesh>
    </Float>
  );
}

export default function RoyalScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <InteractiveGeometry />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}