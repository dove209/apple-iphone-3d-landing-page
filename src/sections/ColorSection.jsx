import React, { useRef, useEffect, useLayoutEffect, Suspense, useContext } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { Environment } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";

import Model2 from "./Model2";
import { ColorContext } from "../context/ColorContext";


const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);
`;

const ColorSection = () => {

  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  const { currentColor, changeColorContext } = useContext(ColorContext)

  useEffect(() => {
    const rightElem = rightRef.current;
    const leftElem = leftRef.current;
    const textElem = textRef.current;

    textElem.innerText = currentColor.text;
    textElem.style.color = currentColor.color;
    rightElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
    leftElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
  }, [currentColor])


  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    
    const updateColor = (color, text, rgbColor) => {
      const colorObj = {
        color,
        text,
        rgbColor
      }
      changeColorContext(colorObj);
    }

    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: 'top top',
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: false,
      }
    });


    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: Elem,
        start: 'top top',
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: true,
      }
    }).to(
      Elem,
      {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      }
    ).to(
      Elem,
      {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      }
    ).to(
      Elem,
      {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      }
    ).to(
      Elem,
      {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      }
    ).to(
      Elem,
      {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      }
    ).to(
      Elem,
      {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      }
    )

    return () => {
      if(t2) t2.kill()
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={textRef} />
      <Right ref={rightRef}>
        <Canvas camera={{ fov: 6.5 }}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} />
          <Suspense>
            <Model2 />
          </Suspense>
          <Environment preset="night" />
        </Canvas>
      </Right>
    </Section>
  );
};

export default ColorSection;
