import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  background-color: #fef2f2;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #c026d3;
  margin-bottom: 40px;
`;

const List = styled.ul`
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
  list-style: none;
  padding: 0;
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

export {Section, Heading, List, ListItem}