import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { Computer } from "./Models/Computer-optimized";

// Simple spinning cube as fallback
function FallbackCube() {
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

// Use the Computer component from Computer-optimized.jsx
function ComputerModel() {
  const modelRef = useRef();
  const [modelLoaded, setModelLoaded] = useState(true);

  // Log when component mounts
  React.useEffect(() => {
    console.log("Computer component mounted");
  }, []);

  return (
    <group
      scale={0.007}
      position={[0, -0.8, 0]}
      rotation={[0, Math.PI, 0]}
      castShadow
    >
      <Computer ref={modelRef} />
    </group>
  );
}

// Main component that renders the 3D scene
function SimpleComputerModel() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "400px" }}>
      <Canvas
        shadows
        camera={{ position: [0, 3, 7], fov: 45 }}
        gl={{ alpha: false }}
      >
        <color
          attach="background"
          args={["#e8a15b"]}
        />
        {/* Lighting setup */}
        <ambientLight
          intensity={0.7}
          color="#ffb973"
        />
        <directionalLight
          position={[5, 5, 3]}
          intensity={2.5}
          color="#ffb973"
        />
        <directionalLight
          position={[5, 9, 1]}
          castShadow
          intensity={2.5}
          color="#ffb973"
        />

        {/* Controls for viewing the model */}
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          autoRotate={false}
        />

        {/* Floor plane */}
        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial
              color="#e8a15b"
              roughness={0.8}
              metalness={0.2}
            />
          </mesh>
        </group>

        {/* The 3D model with fallback */}
        <Suspense fallback={<FallbackCube />}>
          <group
            scale={0.03}
            position={[0, -1.49, -2]}
            castShadow
          >
            <Computer />
          </group>
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SimpleComputerModel;
