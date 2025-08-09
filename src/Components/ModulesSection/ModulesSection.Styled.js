import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  /* background-color: #fff0f6; */
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #c026d3;
  margin-bottom: 40px;
`;

const ModulesGrid = styled.div`
  display: grid;
  max-width: 900px;
  margin: 0 auto;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const ModuleCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 24px;
  box-shadow: 0 4px 20px rgb(203 213 225 / 0.25);
  text-align: left;
`;

const ModuleTitle = styled.h3`
  font-size: 1.5rem;
  color: #9d174d;
  margin-bottom: 12px;
`;

const ModuleDesc = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

export {Section, Heading, ModulesGrid, ModuleCard, ModuleTitle, ModuleDesc}