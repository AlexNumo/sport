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

const ListItem = styled.li`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 20px;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #db2777;
    font-weight: bold;
  }
`;

export {Section, Heading, Text, ListItem}