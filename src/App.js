import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import "./styles.css";

import { CameraControls, Sphere, SkyBox } from "./components";

const App = () => {
  return (
    <>
      <Canvas className="canvas">
        <CameraControls />
        <directionalLight intensity={1} />
        <ambientLight intensity={0.6} />
        <Suspense fallback="loading">
          <Sphere />
        </Suspense>
        <SkyBox />
      </Canvas>
    </>
  );
};

export default App;
