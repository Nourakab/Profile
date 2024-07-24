import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

const SimpleBox = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const BoxCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log("BoxCanvas component mounted");
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      console.log("Media query changed. isMobile: ", event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  console.log("Initial isMobile: ", isMobile);

  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 75 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <SimpleBox />
      <OrbitControls enableZoom={false} />
      <Preload all />
    </Canvas>
  );
};

export default BoxCanvas;
