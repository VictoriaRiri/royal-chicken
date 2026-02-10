"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Field() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 40; // 40x40 grid
  const total = count * count;

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.mouse;

    for (let i = 0; i < total; i++) {
      const ix = i % count;
      const iy = Math.floor(i / count);
      
      const posX = (ix - count / 2) * 0.25;
      const posZ = (iy - count / 2) * 0.25;

      // Distance from mouse to tilt rods
      const dist = Math.sqrt((posX - x * 5)**2 + (posZ - (-y * 5))**2);
      const force = Math.max(0, 1.5 - dist);

      dummy.position.set(posX, 0, posZ);
      dummy.scale.set(1, 1 + force * 2 + Math.sin(time + i) * 0.2, 1);
      dummy.rotation.set(force * 0.5, 0, force * 0.5);
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null!, null!, total]}>
      <cylinderGeometry args={[0.015, 0.015, 1, 6]} />
      <meshStandardMaterial color="#333" emissive="#FFD700" emissiveIntensity={0.1} />
    </instancedMesh>
  );
}

export default function Isofield() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas camera={{ position: [0, 5, 10], fov: 35 }}>
        <fog attach="fog" args={["#050505", 5, 15]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FFD700" />
        <Field />
      </Canvas>
    </div>
  );
}
