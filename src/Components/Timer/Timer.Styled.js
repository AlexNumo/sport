import styled from "styled-components";

const WrapperSection = styled.section`
  border: 1px solid black;
  border-radius: 20px;
  margin: 20px auto;
  padding: 30px 20px;
  width: max-content;
  text-align: center;
  background-color: rgba(248, 234, 234, 0.4); /* білий фон з прозорістю 40% */
  border: 0px solid #e9d5ff;
  color: #000;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    width: 90%;
    padding: 20px 10px;
  }
`;

const WrapperInfo = styled.div`
  text-align: center;
  color: #3a25d8ff;
  font-family: 'Times New Roman', Times, serif;
  font-size: 35px;
  font-weight: 700;
  @media (max-width: 768px) {
  font-size: 25px;
  }
`;

export {WrapperSection, WrapperInfo}