import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #faf5ff;
  padding: 40px 20px;
  text-align: center;
  color: #6b21a8;
  font-size: 0.9rem;
`;

const WrapperSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & a{
    margin: 10px 20px;
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

export {FooterWrapper, FooterText, WrapperSocial}