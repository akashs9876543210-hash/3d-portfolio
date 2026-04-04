import * as THREE from "three";
import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { BallCollider, Physics, RigidBody, RapierRigidBody } from "@react-three/rapier";

// 1. Sub-component for the actual 3D content
function SceneContent({ isActive }: { isActive: boolean }) {
  const textures = useTexture([
    "/images/AWS.png",
    "/images/EXCEL.png",
    "/images/SQL.png",
    "/images/PYTHON.png",
    "/images/QGIS.png",
    "/images/SPYDER.png",
    "/images/mysql.webp"
  ]);

  const materials = useMemo(() => {
    return textures.map((texture) => {
      texture.anisotropy = 16;
      // PUT THIS INSTEAD ↓
      return new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 1,
        metalness: 0.0,
      });
    });
  }, [textures]);

  const spheres = useMemo(() => [...Array(30)].map(() => ({
    scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
  })), []);

  return (
    <>
      <Pointer isActive={isActive} />
      {spheres.map((props, i) => (
        <SphereGeo
          key={i}
          {...props}
          material={materials[i % materials.length]}
          isActive={isActive}
        />
      ))}
    </>
  );
}

// 2. Helper Components (Sphere and Pointer)
function SphereGeo({ scale, material, isActive }: any) {
  const api = useRef<RapierRigidBody | null>(null);
  const vec = useMemo(() => new THREE.Vector3(), []);
  const impulseVector = useMemo(() => new THREE.Vector3(), []);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    impulseVector.set(-50 * delta * scale, -150 * delta * scale, -50 * delta * scale);
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(impulseVector);
    api.current.applyImpulse(impulse, true);
  });
  const r = THREE.MathUtils.randFloatSpread;
  return (
    <RigidBody linearDamping={0.75} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false}>
      <BallCollider args={[scale]} />
      <mesh castShadow receiveShadow scale={scale} material={material}>
        <sphereGeometry args={[1, 28, 28]} />
      </mesh>
    </RigidBody>
  );
}

function Pointer({ isActive }: { isActive: boolean }) {
  const ref = useRef<RapierRigidBody>(null);
  const vec = useMemo(() => new THREE.Vector3(), []);
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    target.set((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0);
    ref.current?.setNextKinematicTranslation(vec.lerp(target, 0.2));
  });
  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

// 3. Main Exported Component
const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("work");
      if (element) setIsActive((window.scrollY || document.documentElement.scrollTop) > element.getBoundingClientRect().top);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="techstack" id="tech-stack">
      <h2>My Techstack</h2>
      <Canvas shadows camera={{ position: [0, 0, 20], fov: 32.5 }} className="tech-canvas">
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <spotLight position={[10, 10, 10]} penumbra={1} castShadow />
          <Physics gravity={[0, 0, 0]}>
            <SceneContent isActive={isActive} />
          </Physics>
          <Environment files="/models/char_enviorment.hdr" />
          <EffectComposer enableNormalPass={false}>
            <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TechStack;