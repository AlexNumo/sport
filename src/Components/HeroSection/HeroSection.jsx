// HeroSection.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import ModalForm from '../ModalForm';
import {
  Hero,
  WrapperLang,
  Title,
  Subtitle,
  HeroImage,
} from './HeroSection.Styled';
import Photo1 from '../../assets/DE0A7779.jpg';
import SaleBTN from '../SaleBTN/SaleBTN';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  

  return (
    <Hero>
      <WrapperLang>
      <LanguageSwitcher />
      </WrapperLang>
      <Title>{t('hero.title')}</Title>
      <Subtitle>{t('hero.subtitle')}</Subtitle>
      <HeroImage src={Photo1} alt="Hero" />
      <SaleBTN setModalOpen={ setModalOpen} />
      {/* <ButtonContainer>
        <Button onClick={() => setModalOpen(true)}>{t('hero.button')}</Button>
        <DiscountBadge>-80%</DiscountBadge>
      </ButtonContainer> */}
      <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </Hero>
  );
};

export default HeroSection;
