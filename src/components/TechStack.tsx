import * as THREE from "three";
import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Environment, ContactShadows } from "@react-three/drei";
import { Physics, RigidBody, BallCollider, RapierRigidBody } from "@react-three/rapier";

// 1. Content inside the Canvas (Where hooks are allowed)
function SceneContent({ isActive }: { isActive: boolean }) {
  // Use textures you KNOW are on GitHub. 
  // If one is missing, this component will "Suspend" (stay black/loading).
  const textures = useTexture([
    "/images/AWS.png",
    "/images/EXCEL.png",
    "/images/SQL.png",
    "/images/PYTHON.png",
    "/images/QGIS.png",
    "/images/SPYDER.png"
  ]);

  const materials = useMemo(() => {
    return textures.map((t) => new THREE.MeshStandardMaterial({ map: t, roughness: 0.2 }));
  }, [textures]);

  const spheres = useMemo(() => [...Array(15)].map(() => ({
    scale: Math.random() * 0.4 + 0.6,
  })), []);

  return (
    <>
      {spheres.map((props, i) => (
        <RigidBody key={i} colliders="ball" position={[Math.random() * 8 - 4, 10 + i, 0]}>
          <mesh castShadow material={materials[i % materials.length]}>
            <sphereGeometry args={[props.scale, 32, 32]} />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
}

// 2. The Main Export
const TechStack = () => {
  return (
    <div className="techstack" style={{ height: '600px', width: '100%', background: '#050505' }}>
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />

          <Physics gravity={[0, -9.81, 0]}>
            <SceneContent isActive={true} />
          </Physics>

          {/* FIXED: Using a Preset instead of a missing .hdr file */}
          <Environment preset="city" />
          <ContactShadows opacity={0.4} scale={20} blur={2} far={4.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TechStack;