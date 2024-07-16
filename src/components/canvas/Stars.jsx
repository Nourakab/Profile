import { useState, useRef, Suspense } from "react";
import { random } from "maath/dist/maath.esm";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  /*in order for my stars to start moving, this hook allows you to execute code on every rendered frame */
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      {/* absolute and z negative assures it goes behind those elements */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense
          fallback={null} /*it's null because here it can load really quickly */
        >
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
