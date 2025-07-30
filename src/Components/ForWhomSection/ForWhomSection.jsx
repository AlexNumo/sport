import { Section, Heading, List, ListItem } from './ForWhomSection.Styled';

const ForWhomSection = () => {
  return (
    <Section>
      <Heading>Для кого цей курс</Heading>
      <List>
        <ListItem>Жінки, які хочуть відчути гармонію з тілом</ListItem>
        <ListItem>Ті, хто прагне розкрити свою жіночність</ListItem>
        <ListItem>Жінки, що шукають підтримку та натхнення</ListItem>
        <ListItem>Новачки, які вперше знайомляться з практиками</ListItem>
      </List>
    </Section>
  );
};

export default ForWhomSection;
