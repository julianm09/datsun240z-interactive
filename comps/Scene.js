import ReactDOM from "react-dom";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Car from "../public/240z";
import { PositionalAudio, Html, Plane, Box, Sphere } from "@react-three/drei";
import styled from "styled-components";
import MovingBox from "./MovingBox";

export default function Scene({ screen, color, position }) {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        zIndex: -10,
        background: "#fffff",
      }}
    >
      <Suspense fallback={null}>
        <ambientLight />

        <pointLight
          position={[-10, -10, 100]}
          color={"#ffffff"}
          intensity={10}
        />
        <pointLight position={[-10, 100, 100]} color={color} intensity={30} />
        <Car screen={screen} position={position} />

        {screen == 8 ? (
          <>

            <MovingBox
              mouse={position}
              position={[-5, 3, 0]}
              start={-10}
              end={4}
              speed={0.11}
            />
            <MovingBox
              mouse={position}
              position={[4, 1, 0]}
              start={-8}
              end={4}
              speed={0.11}
            />
            <MovingBox
              mouse={position}
              position={[2, 5, 0]}
              start={-12}
              end={4}
              speed={0.11}
            />
            <Box
              args={[4, 10, 10]}
              rotation={[1.5, 0, 0]}
              position={[0, -2.5, -1]}
              scale={[10, 10, 0]}
            />
          </>
        ) : (
          <></>
        )}
      </Suspense>
    </Canvas>
  );
}
