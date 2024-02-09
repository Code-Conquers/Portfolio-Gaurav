import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const ThreeDModel = ({ isMobile }) => {
  const { scene, animations } = useGLTF("/3DModel/scene.gltf", true);
  const { actions } = useAnimations(animations);

  useEffect(() => {
    if (actions && typeof actions.play === "function") {
      actions.play();
    }
  }, [actions]);

  const scaleFactor = isMobile ? 1.2 : 30;

  return (
    <Float
      speed={10}
      rotationIntensity={0}
      floatIntensity={2}
      floatingRange={[1, 2]}
    >
      <mesh>
        <hemisphereLight intensity={2} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={2}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={scene}
          scale={[scaleFactor, scaleFactor, scaleFactor]}
          position={isMobile ? [0, -3, -2.2] : [-1, -18, 5]}
          rotation={[0, 0, 0]}
        />
      </mesh>
    </Float>
  );
};

const ThreeDModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
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
      frameloop="always"
      shadows
      dpr={[2, 2]}
      camera={{ position: [50, 50, 50], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100vh" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          enableRotateX={false}
          enableRotateY={false}  
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ThreeDModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ThreeDModelCanvas;
