
import { useTexture, Environment } from "@react-three/drei"; // Add useTexture here
import { Suspense } from "react"; // Add Suspense
const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  // 1. Move the loader INSIDE the component using the Drei hook
  // This hook "suspends" the component until all images are 100% loaded.
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

  // 2. Create materials directly from the loaded textures
  const materials = useMemo(() => {
    return textures.map((texture) => {
      // Set texture settings for better quality on spheres
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

  useEffect(() => {
    // ... (Keep your scroll/isActive logic exactly as it is)
  }, []);

  return (
    <div className="techstack">
      <h2> My Techstack</h2>
      <Canvas /* ... keep your canvas props ... */ >
        {/* 3. Wrap everything in Suspense so the site doesn't crash while loading */}
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          {/* ... rest of your lights and physics ... */}
          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />
            {/* ... keep your Sphere mapping logic ... */}
          </Physics>
          <Environment files="/models/char_enviorment.hdr" />
        </Suspense>
      </Canvas>
    </div>
  );
};
