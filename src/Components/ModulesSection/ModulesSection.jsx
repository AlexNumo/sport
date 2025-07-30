import { Section, Heading, ModulesGrid, ModuleCard, ModuleTitle, ModuleDesc } from './ModulesSection.Styled';

const ModulesSection = () => {
  return (
    <Section>
      <Heading>Модулі курсу</Heading>
      <ModulesGrid>
        <ModuleCard>
          <ModuleTitle>Модуль 1: Відкриття себе</ModuleTitle>
          <ModuleDesc>Практики для розуміння власних потреб і бажань.</ModuleDesc>
        </ModuleCard>
        <ModuleCard>
          <ModuleTitle>Модуль 2: Тіло і енергія</ModuleTitle>
          <ModuleDesc>Техніки для відчуття жіночної енергії та харизми.</ModuleDesc>
        </ModuleCard>
        <ModuleCard>
          <ModuleTitle>Модуль 3: Внутрішня гармонія</ModuleTitle>
          <ModuleDesc>Робота з емоціями та розвиток впевненості.</ModuleDesc>
        </ModuleCard>
        <ModuleCard>
          <ModuleTitle>Модуль 4: Практичні інструменти</ModuleTitle>
          <ModuleDesc>Щоденні практики для підтримки балансу і натхнення.</ModuleDesc>
        </ModuleCard>
      </ModulesGrid>
    </Section>
  );
};

export default ModulesSection;
