import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
import { Model } from "./Model";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: "white", fontSize: "14px" }}>
      {Math.round(progress)}% loading...
    </Html>
  );
}

export default function ProductPreview() {
  return (
    <div className="w-3xl h-[750px] bg-black rounded-2xl overflow-hidden">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1.5, 5], fov: 35 }}>
        <Suspense fallback={<Loader />}>
          {/* Lighting environment */}
          <Environment preset="studio" />

          {/* Stage for nice composition */}
          <Stage
            adjustCamera
            intensity={0.7}
            shadows={{ type: "accumulative", opacity: 0.6 }}
          >
            <Model />
          </Stage>

          {/* Soft shadow under product */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
          />

          {/* Controls */}
          <OrbitControls
            autoRotate
            autoRotateSpeed={1.2}
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            // Hilangkan batas vertikal (biar bisa full bebas)
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            // Smooth feeling
            enableDamping
            dampingFactor={0.05}
            // Optional
            rotateSpeed={0.8}
            zoomSpeed={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
