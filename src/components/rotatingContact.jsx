import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
    const modelRef = useRef();
    const { scene } = useGLTF("/models/contact.glb");

    // Animate Rotation
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
        }
    });

    // Apply a Custom Material (Without Texture)
    scene.traverse((child) => {
        if (child.isMesh) {
            child.material = new THREE.MeshPhysicalMaterial({ // ✅ Use MeshPhysicalMaterial
                color: "#353434",   // Color of the material (HEX or RGB)
                roughness: 0,     // 0 = smooth and shiny, 1 = rough and matte
                metalness: 0.8,      // 0 = non-metallic, 1 = fully metallic
                reflectivity: 1,     // 0 = no reflections, 1 = fully reflective
                clearcoat: 1,        // 0 = no extra gloss, 1 = highly glossy coating
                clearcoatRoughness: 0 // 0 = smooth clearcoat, 1 = rough clearcoat
            });
        }
    });

    return <primitive object={scene} ref={modelRef} scale={2} />;
};

const Rotating3DObject = () => {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }} className="w-full h-full">
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 45]} intensity={25} castShadow />
            <Model />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default Rotating3DObject;
