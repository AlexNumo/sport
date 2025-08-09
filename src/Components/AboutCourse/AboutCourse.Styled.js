import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 5px 5px 60px;
  background-color: rgba(220, 203, 203, 0.8);
  border-radius: 22px;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #c026d3;
  /* position: sticky; */
  top: 0;
  /* background: inherit; */
  z-index: 10;
  padding: 20px 0;
`;

const WrapperSubHeading = styled.div`
  background: #fdf4ff; /* ніжний фон */
  padding: 30px 20px;
  border-radius: 16px;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 90%;
`;


const SubHeading = styled.h3`
  font-size: 1.75rem;
  color: #7e22ce;
  margin: 40px 0 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto 40px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;


const ListItem = styled.li`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 20px;
  padding-left: 24px;
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 0.1em;
    color: #db2777;
    font-weight: bold;
  }
`;

const HeroImage = styled.img`
  max-width: 300px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

export {Section, Heading, WrapperSubHeading, SubHeading, List, ListItem, HeroImage}