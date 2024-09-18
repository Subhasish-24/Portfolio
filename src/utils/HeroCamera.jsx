import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React from "react";
import { useRef } from "react";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta);
    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 2, 0],
        0.25,
        delta
      );
    }
  });
  return (
    <group ref={groupRef} scale={isMobile ? 0.9 : 1.01}>
      {children}
    </group>
  );
};

export default HeroCamera;
