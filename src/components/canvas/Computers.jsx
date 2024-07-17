import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const sanitizePositionAttribute = (positionAttribute) => {
  const positionArray = positionAttribute.array;
  for (let i = 0; i < positionArray.length; i++) {
    if (isNaN(positionArray[i])) {
      console.warn(`NaN value found at index ${i} in position attribute`);
      positionArray[i] = 0; // Set NaN values to 0
    }
  }
};

const logGeometryDetails = (geometry) => {
  console.log("BoundingBox:", geometry.boundingBox);
  console.log("BoundingSphere:", geometry.boundingSphere);
};

const handleMeshNode = (node) => {
  const geometry = node.geometry;
  const positionAttribute = geometry.attributes.position;

  if (!positionAttribute) {
    console.warn("Missing position attribute in geometry:", geometry);
    return;
  }

  sanitizePositionAttribute(positionAttribute);

  try {
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();
    logGeometryDetails(geometry);
  } catch (error) {
    console.error("Error computing bounding box/sphere:", error, geometry);
  }
};

const traverseScene = (scene) => {
  scene.traverse((node) => {
    if (node.isMesh) {
      handleMeshNode(node);
    }
  });
};

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  console.log("GLTF Scene:", scene);

  traverseScene(scene);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />{" "}
      {/* This is to add lightness */}
      <pointLight intensity={1} />{" "}
      {/* This is the light on the screen of the computer */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* This is the overall lightness of the model */}
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
