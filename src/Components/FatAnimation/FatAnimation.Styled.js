import styled from 'styled-components';

const FatAnimationWrapper = styled.div`
  position: fixed;
  top: 62vh;
  left: 4%;
  width: clamp(160px, 16vw, 360px);
  max-width: 420px;
  pointer-events: none;
  z-index: 99;

  @media (max-width: 768px) {
    top: 80vh;
    left: 8%;
    transform: translateX(-50%);
    width: 100px;
    max-width: none;
  }
`;

export { FatAnimationWrapper };