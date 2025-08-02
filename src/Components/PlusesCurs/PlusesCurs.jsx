import { useState } from 'react';
import { Section, Heading, ListItem } from './PlusesCurs.Styled';
import { useTranslation } from 'react-i18next';
import SaleBTN from '../SaleBTN';
import ModalForm from '../ModalForm';

const PlusesCurs = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const textMain = [
    '10  відеоуроків',
    'Практики дихання, які можна робити вдома чи на роботі',
    'Роботу з тілом, голосом, емоціями',
    'Підтримку в закритому чаті',
    'Подарунок: гайд «Дихання і сексуальність: активуй чутливе тіло»',
  ];

  return (
    <Section>
      <Heading>Що ти отримаєш:</Heading>

      {textMain.map(key => (
        <ListItem key={key}>{t(key)}</ListItem>
      ))}
      <SaleBTN setModalOpen={ setModalOpen} nameBTN={'Я готова увімкнути себе'}/>
      <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </Section>
  );
};

export default PlusesCurs;
