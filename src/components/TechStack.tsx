import * as THREE from "three";
import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { BallCollider, Physics, RigidBody, RapierRigidBody } from "@react-three/rapier";

// 1. Sub-component for the actual 3D content
function SceneContent({ isActive }: { isActive: boolean }) {
  // HOOKS ARE NOW INSIDE THE CANVAS CONTEXT
  const textures = useTexture([
    "/images/AWS.png",
    "/images/EXCEL.png",
    "/images/SQL.png",
    "/images/PYTHON.png",
    "/images/QGIS.png",
    "/images/SPYDER.png",
    "/images/IOT.png",
    "/images/Tableau.png",
    "/images/r_logo.png",
    "/images/mysql.png",
    "/images/mongo.png",
    "/images/node2.png",
    "/images/javascript.png"
  ]);

  const materials = useMemo(() => {
    return textures.map((texture) => {
      texture.anisotropy = 16;
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: "#ffffff",
        emissiveMap: texture,
        emissiveIntensity: 0.2,
        metalness: 0.4,
        roughness: 0.3,
        clearcoat: 0.5,
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
function SphereGeo({ vec = new THREE.Vector3(), scale, material, isActive }: any) {
  const api = useRef<RapierRigidBody | null>(null);
  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(new THREE.Vector3(-50 * delta * scale, -150 * delta * scale, -50 * delta * scale));
    api.current.applyImpulse(impulse, true);
  });
  const r = THREE.MathUtils.randFloatSpread;
  return (
    <RigidBody linearDamping={0.75} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false}>
      <BallCollider args={[scale]} />
      <mesh castShadow receiveShadow scale={scale} geometry={new THREE.SphereGeometry(1, 28, 28)} material={material} />
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3(), isActive }: { vec?: THREE.Vector3; isActive: boolean }) {
  const ref = useRef<RapierRigidBody>(null);
  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    ref.current?.setNextKinematicTranslation(vec.lerp(new THREE.Vector3((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0), 0.2));
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
          <ambientLight intensity={1} />
          <spotLight position={[20, 20, 25]} penumbra={1} castShadow />
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