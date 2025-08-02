import { FooterWrapper, FooterText, WrapperSocial } from './Footer.Styled';
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <WrapperSocial>
        <a href="https://www.instagram.com/sandrochka_strong/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#C13584" />
        </a>
        <a href="https://t.me/sandrochka_strong" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane size={24} color="#0088cc" />
        </a>
        <a href="https://www.youtube.com/@sandrochka_strong7775" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} color="#b8685b" />
        </a>
      </WrapperSocial>
      <FooterText>© 2025 Feminine Academy. Всі права захищені.</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
