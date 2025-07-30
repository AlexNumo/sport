import styled from "styled-components";

const WrapperSection = styled.section`
  border: 1px solid black;
  border-radius: 20px;
  margin: 20px auto;
  padding: 30px 20px;
  width: max-content;
  text-align: center;
  @media (max-width: 768px) {
    width: 90%;
    padding: 20px 10px;
  }
`;

const WrapperInfo = styled.div`
  text-align: center;
  color: #f95a5aff;
  font-family: 'Times New Roman', Times, serif;
  font-size: 35px;
  font-weight: 700;
  @media (max-width: 768px) {
  font-size: 25px;
  }
`;

export {WrapperSection, WrapperInfo}