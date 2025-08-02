import { useState } from 'react';
import { Section, Heading, Text, ListItem } from './AboutCurse.Styled';
import { useTranslation } from 'react-i18next';
import SaleBTN from '../SaleBTN';
import ModalForm from '../ModalForm';

const AboutCourse = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const textMain = [
    'aboutSection.mainText',
    'aboutSection.text1',
    'aboutSection.text2',
    'aboutSection.text3',
    'aboutSection.text4',
    'aboutSection.text5',
    'aboutSection.endeText',
  ];

  const listItemsInside = [
    '10 днів трансформацій, не лише фізичних, а внутрішніх',
    'короткі, глибокі практики — під музику, у тиші, в русі',
    'відео, які хочеться переглядати знову',
    'ефект, який ти відчуєш ще до завершення',
  ];

  const listPluses = [
    'яке підтягне живіт',
    'прибере зайвий ЖИР',
    'увімкне гормональну систему',
    'зніме паніку і “бігти/замерти',
    'дасть голосу звучати, а тілу — бути легким',
    'Це не курс. Це включення. Бо поки ти не вдихнула глибше — ти ще не жила повністю.'
  ]

  const listForYou = [
    'часто ловиш себе на тому, що “не дихаєш”',
    'живеш у стресі й хочеш спокою без таблеток',
    'хочеш прокачати прес зсередини (так, діафрагма — теж м’яз!)',
    'хочеш позбутись зайвого ЖИРУ природньо та з користю',
    'хочеш м’яко запустити тіло в тонус без важкого фітнесу',
    'працюєш із людьми — і хочеш більше енергії та впевненості',
  ];

    const textPlusesCourse = [
    '10  відеоуроків',
    'Практики дихання, які можна робити вдома чи на роботі',
    'Роботу з тілом, голосом, емоціями',
    'Підтримку в закритому чаті',
    'Подарунок: гайд «Дихання і сексуальність: активуй чутливе тіло»',
  ];

  return (
    <Section>
      <Heading>{t('aboutSection.title')}</Heading>

      {textMain.map(key => (
        <Text key={key}>{t(key)}</Text>
      ))}

      <p>Що всередині</p>
      {listItemsInside.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}

      <p>Це дихання</p>
      {listPluses.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
      <p>Цей курс для тебе, якщо:</p>
      {listForYou.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
      {textPlusesCourse.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
      <SaleBTN setModalOpen={setModalOpen} nameBTN={'Я готова увімкнути себе'} />
      <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </Section>
  );
};

export default AboutCourse;
