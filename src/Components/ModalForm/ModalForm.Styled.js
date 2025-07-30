import styled, { keyframes } from 'styled-components';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// Плавне відкриття
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// Плавне закриття
const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
`;

const StyledPhoneInput = styled(PhoneInput)`
  .form-control {
    width: 300px;
    margin-bottom: 16px;
    padding: 10px 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem;
    background-color: #f0e1f0ff;
  }

  .flag-dropdown {
    border: 1px solid #ccc;
    border-radius: 10px 0 0 10px;
    background-color: #f0e1f0ff;
  }

  .flag-dropdown.open {
    border-color: #aaa;
  }

  .selected-flag {
    padding-left: 12px;
  }

  .country-list {
    font-size: 0.9rem;
    z-index: 9999;
  }
`;


const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: opacity 0.3s ease;
`;

const ModalContent = styled.div`
  background: #ffe2edff;
  width: 350px;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  padding: 32px 24px;
  animation: ${fadeIn} 0.3s ease;
  transition: all 0.3s ease;
  position: relative;
  margin: 5px;

  &.closing {
    animation: ${fadeOut} 0.3s ease forwards;
  }
`;

const Input = styled.input`
  width: 300px;
  margin-bottom: 16px;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #f0e1f0ff;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
`;

const SubmitButton = styled.button`
  background-color: #ff69b4;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #ff3d9c;
  }
`;

const Error = styled.p`
  color: #d93025;
  font-size: 0.875rem;
  margin-top: -10px;
  margin-bottom: 12px;
`;


export {StyledPhoneInput, Backdrop, ModalContent, Input, Label, SubmitButton, Error}