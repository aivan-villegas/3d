import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Canvas
      camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 1] }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
    >
      <App />
    </Canvas>
  </React.StrictMode>
);
