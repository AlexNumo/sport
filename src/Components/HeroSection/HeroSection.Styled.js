import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
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
  right: 40px;
  color: black;
  font-weight: bold;
  padding: 13px 11px;
  border-radius: 100px;
  font-size: 1.1rem;
  animation: ${pulse} 2s infinite ease-in-out, ${colorShift} 6s infinite linear;
  box-shadow: 8px 8px 8px rgba(12, 0, 4, 0.6);
  white-space: nowrap;
  transition: transform 0.3s ease;
`;


const Hero = styled.section`
  /* background-color: #ffffff; */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;
  padding: 30px 20px;
  text-align: center;
`;

const WrapperLang = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-size: 38px;
  font-style: italic;
  font-weight: 700;
  padding: 14px 24px;
  margin-bottom: 30px;
  margin-top: 20px;
  border-radius: 40px;
  text-align: center;
  letter-spacing: 0.08em;
  background-color: rgba(255, 255, 255, 0.4); /* білий фон з прозорістю 40% */
  border: 2px solid #e9d5ff;
  color: #000;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
`;


const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 40px;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  padding: 14px 24px;
  margin-top: 20px;
  border-radius: 40px;
  text-align: center;
  letter-spacing: 0.08em;
  background-color: rgba(248, 234, 234, 0.4); /* білий фон з прозорістю 40% */
  border: 0px solid #e9d5ff;
  color: #000;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
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

export {DiscountBadge, Hero, WrapperLang, Title, Subtitle, ButtonContainer, Button}