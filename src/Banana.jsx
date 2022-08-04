import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function Banana({ z, scale }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF(/* "/threejs-banana-transformed.glb" */"/dead_rose-transformed.glb");

  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI * 2,
    rY: Math.random() * Math.PI * 2,
    rZ: Math.random() * Math.PI * 2,
  });

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.001),
      (data.rZ += 0.001)
    );
    ref.current.position.set(data.x * width, (data.y += 0.025), z);
    if (data.y > height) {
      data.y = -height;
    }
  });

  return (
    <mesh
      ref={ref}
      scale={scale}
      geometry={nodes["dead-rose"].geometry}
      material={materials.texture}
      material-emissive="brown"
    />
  );
}
