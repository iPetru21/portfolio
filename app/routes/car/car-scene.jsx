import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import carModel from "~/assets/car.glb";
import CarHud from "./car-hud";
import * as THREE from "three";


// Componentă pentru încărcarea și afișarea modelului 3D
const CarModel = () => {
    const gltf = useLoader(GLTFLoader, carModel);
    return <primitive object={gltf.scene} scale={0.01} />;
};

// Componenta principală
export default function CarScene() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", zIndex:1, position:"relative" }}>
        <Canvas camera={{ position: [1, 1, 2], fov: 50 }}>
            {/* Iluminare ambientală (lumina globală moale) */}
            <ambientLight intensity={4} />

              {/* Lumină direcțională principală (simulează soarele) */}
              <directionalLight position={[5, 5, 5]} intensity={5} castShadow />

              {/* Lumină punctiformă (o lumină mică care luminează un punct) */}
              <pointLight position={[2, 2, 2]} intensity={4} />

              {/* SpotLight (reflector) */}
              <spotLight position={[0, 5, 0]} angle={0.5} penumbra={0.3} intensity={5} castShadow />

              {/* Hemisphere Light (cer și pământ) */}
              <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={0.8} />

          <Suspense fallback={null}>
            {/* Încarcă modelul */}
            <CarModel/>
            {/* Controale pentru orbită (rotire, zoom, pan) */}
            <OrbitControls maxDistance={5} minDistance={2}/>
            {/* Lumini */}
          </Suspense>
        </Canvas>
      </div>
      <CarHud/>
    </>

  );
}