import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const WebGLRenderer = ({ children }) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    rendererRef.current = renderer;

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {children(rendererRef.current)}
    </div>
  );
};

export default WebGLRenderer;
