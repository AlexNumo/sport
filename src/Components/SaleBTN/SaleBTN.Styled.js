import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(0.8); }
  50% { transform: scale(1.2); }
  100% { transform: scale(0.8); }
`;

const colorShift = keyframes`
  0% { background-color: #84df4a; }
  25% { background-color: #40ff96; }
  50% { background-color: #40c9ff; }
  75% { background-color: #ff40a1; }
  100% { background-color: #84df4a; }
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: -20px;
  right: 50px;
  color: black;
  font-weight: bold;
  padding: 15px 11px;
  border-radius: 100px;
  font-size: 1.1rem;
  animation: ${pulse} 2s infinite ease-in-out, ${colorShift} 6s infinite linear;
  box-shadow: 8px 8px 8px rgba(12, 0, 4, 0.6);
  white-space: nowrap;
  transition: transform 0.3s ease;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
`;

const Button = styled.a`
  background-color: #db2777;
  color: white;
  padding: 14px 32px;
  border-radius: 30px;
  font-size: 1rem;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    background-color: #be185d;
  }
`;

export {DiscountBadge, ButtonContainer, Button}