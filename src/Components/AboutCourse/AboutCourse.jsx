import { useState } from 'react';
import {
  Section, Heading, WrapperSubHeading, SubHeading, List, ListItem, HeroImage
 } from './AboutCourse.Styled';
import { useTranslation } from 'react-i18next';
import SaleBTN from '../SaleBTN';
import ModalForm from '../ModalForm';
import Photo1 from '../../assets/DE0A7779.jpg';

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

  const listFormatCourse = [
    'Онлайн, доступ на 30 днів',
    'Починаєш у зручний день',
    'Матеріали відкриваються щодня',
    'Весь курс можна проходити у власному темпі',
  ];

    const listHistory = [
    'фітнес-тренер, нутріціолог і авторка техніки роботи з тілом через дихання.',
    '10+ років практики, сотні клієнтів та знань, які я хочу дати тобі',
    'Я створила цей курс не для того, щоб ти “була правильна”. А щоб ти стала включена, глибока, дика і дуже жива.',
    '21 день — і ти забудеш, як це: бути скутою.',
    '10 тренувань, які прокачають не тіло, а стан.',
    '21 подкаст, які увімкнуть нове мислення.',
    'Дихай глибше, жінко. Справжнє тільки починається.',
    'Я — фітнес-тренер, нутріціолог і авторка методу «тілесного пробудження» через дихання, рух і стиль. За 10+ років роботи з тілом я побачила:',
    '💔 стиснуте дихання = стиснуте життя.',
    'А потім знайшла ключ: усвідомлене дихання → включене тіло → справжня ти.',
    'Я створила цей курс, бо хочу, щоб кожна жінка:',
    'перестала виживати і навчилась жити з тілом заодно,',
    'дихала вільно, без паніки, болю й напруги,',
    'носила себе з гордістю — і тілом, і енергією, і голосом.',
    '> Коли ти в тілі — ти непереможна.',
    'І я хочу, щоб ти це відчула.',
  ];

  const ListBlock = ({ title, items, heading, photo }) => (
    <>
      {heading && <Heading>{heading}</Heading>}
      {photo && <HeroImage src={photo} alt="Photo Sandra" />}
      <WrapperSubHeading>
        {title && <SubHeading>{title}</SubHeading>}
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </WrapperSubHeading>
    </>
  );


  return (
    <Section>
      <ListBlock items={textMain.map(key => t(key))} heading={t('aboutSection.title')} />
      <ListBlock title={'Що всередині'} items={listItemsInside}/>
      <ListBlock title={'Це дихання'} items={listPluses}/>
      <ListBlock title={'Цей курс для тебе, якщо'} items={listForYou}/>
      <ListBlock title={'Що на тебе чекає'} items={textPlusesCourse}/>
      <ListBlock title={'Переваги'} items={listFormatCourse}/>
      <ListBlock heading={'Привіт, я — Сандра'} items={listHistory} photo={Photo1}/>

      <SaleBTN setModalOpen={setModalOpen} nameBTN={'Я готова увімкнути себе'} />
      <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </Section>
  );
};

export default AboutCourse;
