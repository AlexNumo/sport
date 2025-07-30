import { Section, Text } from './CallToAction.Styled';
import SaleBtn from '../SaleBTN';
import ModalForm from '../ModalForm';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


const CallToAction = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  
  return (
    <Section>
      <Text>{t('callToAction.title')}</Text>
      <SaleBtn setModalOpen={setModalOpen}/>
      <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </Section>
  );
};

export default CallToAction;
