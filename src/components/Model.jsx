import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export function Model(props) {
  const { scene } = useGLTF("/macbook.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          // FIX TEMBUS PANDANG
          child.material.transparent = false;
          child.material.opacity = 1;

          // FIX DEPTH
          child.material.depthWrite = true;
          child.material.depthTest = true;

          // FIX BACKFACE (INI YANG PALING PENTING)
          child.material.side = THREE.DoubleSide;

          // Improve realism
          child.material.envMapIntensity = 1.5;

          child.material.polygonOffset = true;
          child.material.polygonOffsetFactor = 1;
          child.material.polygonOffsetUnits = 1;
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/macbook.glb");
