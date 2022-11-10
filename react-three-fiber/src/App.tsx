import "./App.css";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
// import CustomObject from "./CustomObject"
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
} from "@react-three/drei";

function App() {
  const cubeRef: any = useRef();
  const groupRef: any = useRef();
  const sphereRef: any = useRef();

  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta * 0.5;
    // groupRef.current.rotation.y += delta * 0.1;
    // const angle: number = state.clock.elapsedTime * 0.2;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.3} />

      <group ref={groupRef}>
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          scale={1.5}
          position-x={2}
        >
          <boxGeometry />
          <meshStandardMaterial color={"pink"} />
        </mesh>
        <PivotControls anchor={[0, 0, 0]} depthTest={false}>
          <mesh
            rotation-y={Math.PI * 0.25}
            position-x={-2}
            scale={1.5}
            ref={sphereRef}
          >
            <sphereGeometry />
            <meshStandardMaterial color={"orange"} />
          </mesh>
        </PivotControls>
        <TransformControls object={cubeRef} />
      </group>
      <mesh rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"green"} />
      </mesh>

      <Html>Hello</Html>
    </>
  );
}

export default App;
