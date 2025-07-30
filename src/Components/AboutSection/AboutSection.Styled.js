import styled from 'styled-components';

const Section = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #c026d3;
  margin-bottom: 20px;
`;

const Text = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.8;
  color: #444;
  padding-bottom: 20px;
`;
const Button = styled.a`
  background-color: #db2777;
  color: white;
  padding: 14px 32px;
  border-radius: 30px;
  font-size: 1rem;
  text-decoration: none;
  transition: 0.3s ease;
  width: 146px;

  &:hover {
    background-color: #be185d;
  }
`;

export {Section, Heading, Text, Button}