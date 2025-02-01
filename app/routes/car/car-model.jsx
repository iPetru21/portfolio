import React, { useEffect, useState } from "react";
import { useLoader, extend } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import * as THREE from "three"; // Ensure THREE is imported
import carModel from "~/assets/earth.glb";

// Extend THREE to include GLTF objects
extend(THREE);

const CarModel = () => {
    const [model, setModel] = useState(null);

    useEffect(() => {
        const loadModel = async () => {
            try {
                const loader = new GLTFLoader();
                const gltf = await loader.loadAsync(carModel);
                setModel(gltf.scene);
            } catch (error) {
                console.error("Error loading model:", error);
            }
        };

        loadModel();
    }, []);

    return model ? <primitive object={model} scale={1} /> : <p>Loading model...</p>;
};

export default CarModel;
