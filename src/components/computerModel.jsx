import React, { useRef, useEffect, Suspense, useState } from 'react';
import * as THREE from 'three';
import { useGLTF, OrbitControls, useAnimations, Environment, Box, SpotLight, useHelper } from '@react-three/drei';
import { Canvas, useFrame, extend } from '@react-three/fiber';
// Import RectAreaLightHelper directly from three.js
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

// Extend drei with the RectAreaLightHelper
extend({ RectAreaLightHelper });

// Fallback cube that rotates - this helps us verify the 3D environment is working
const FallbackCube = () => {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#ffffff" />
    </Box>
  );
};

const ComputerModel = () => {
  const modelRef = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelError, setModelError] = useState(false);
  
  // Try to load the model
  const { scene, animations } = useGLTF(`${import.meta.env.BASE_URL}models/computer-optimized.glb`, 
    // Success callback
    () => {
      console.log('Model loaded successfully');
      setModelLoaded(true);
    },
    // Progress callback
    (xhr) => {
      console.log(`Model ${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // Error callback
    (error) => {
      console.error('Error loading model:', error);
      setModelError(true);
    }
  );
  
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    if (scene && modelLoaded) {
      console.log('Setting up model with animations:', animations.length);
      
      // Play any animations if they exist
      if (animations.length > 0 && actions) {
        const actionNames = Object.keys(actions);
        if (actionNames.length > 0) {
          actions[actionNames[0]].play();
        }
      }
      
      // Ensure the model casts shadows
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          console.log('Mesh found in model:', child.name);
        }
      });
    }
  }, [scene, actions, animations, modelLoaded]);

  // If there was an error loading the model, show the fallback cube
  if (modelError) {
    console.log('Showing fallback cube due to model error');
    return <FallbackCube />;
  }

  // If the model isn't loaded yet, show nothing (Suspense will handle loading state)
  if (!modelLoaded || !scene) {
    return null;
  }

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={2.0}
      position={[0, -0.5, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    />
  );
};

// Lights component to ensure proper lighting for SelectiveBloom
const Lights = () => {
  const spotLight = useRef();
  const directionalLight = useRef();
  
  // Optional: Uncomment to show light helpers for debugging
  // useHelper(spotLight, THREE.SpotLightHelper, 'red');
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 0.5, 'green');
  
  return (
    <>
      {/* Key light */}
      <ambientLight intensity={0.5} />
      
      {/* Main directional light */}
      <directionalLight
        ref={directionalLight}
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      {/* Fill light */}
      <spotLight
        ref={spotLight}
        position={[-5, 5, 5]}
        angle={0.5}
        penumbra={0.5}
        intensity={1.0}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      {/* Add a point light specifically for bloom effects */}
      <pointLight position={[0, 2, 0]} intensity={1.0} color="#ffffff" />
    </>
  );
};

const ContactExperience = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        shadows
        dpr={[1, 2]}
        onCreated={({ gl, scene }) => {
          console.log('Canvas created', { gl, scene });
          // Make sure WebGL is working
          if (gl.getContextAttributes) {
            console.log('WebGL attributes:', gl.getContextAttributes());
          }
          // Set clear color directly on the scene
          scene.background = new THREE.Color('#e78832');
        }}
      >
        {/* Add comprehensive lighting setup */}
        <Lights />
        
        {/* Floor plane with orange color to match image #2 */}
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#e8a15b" />
        </mesh>
        
        {/* Fallback cube that will show even if the model fails to load */}
        <Suspense fallback={<FallbackCube />}>
          <ComputerModel />
          <Environment preset="sunset" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

// Try to preload the model
try {
  useGLTF.preload(`${import.meta.env.BASE_URL}models/computer-optimized.glb`);
  console.log('Preloaded computer model');
} catch (error) {
  console.error('Failed to preload model:', error);
}

export default ContactExperience;
