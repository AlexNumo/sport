// Components/Parallax.js
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";
import Pou from '../assets/DE0A3597.jpg'; // твоє фото
import Pou2 from '../assets/DE0A7779.jpg'; // твоє фото
// src/assets/DE0A7779.jpg
const ParallaxContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export default function ParallaxSection() {
  return (
    <ParallaxContainer>
      <Parallax speed={-20}>
        <Img src={Pou} alt="Background" />
      </Parallax>
      <Parallax speed={-10}>
        <Img src={Pou2} alt="Background" />
      </Parallax>
    </ParallaxContainer>
  );
}
