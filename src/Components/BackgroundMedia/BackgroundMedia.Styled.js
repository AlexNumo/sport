import styled from 'styled-components';
import Nature from '../../assets/Nature.png';

const VideoBackground = styled.video`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileBackground = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${Nature});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    pointer-events: none;
    user-select: none;
  }
`;

export {VideoBackground,MobileBackground}