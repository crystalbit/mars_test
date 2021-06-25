import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "react-three-fiber";

const Sphere = () => {
  const planet = useRef();

  const { nodes } = useLoader(GLTFLoader, "models/mars.glb");

  useFrame(() => (planet.current.rotation.y += 0.0002));

  return (
    <mesh
      ref={planet}
      visible
      position={[0, 0, 0]}
      geometry={nodes.Cube008.geometry}
      material={nodes.Cube008.material}
    />
  );
};

export default Sphere;
