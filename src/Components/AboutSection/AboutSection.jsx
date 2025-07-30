import {Section, Heading, Text, Button} from './AboutSection.Styled'
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Heading>{t('aboutSection.title') }</Heading>
      <Text>
        {t('aboutSection.text') }
      </Text>
      <Button>
        {t('aboutSection.more') }
      </Button>
    </Section>
  );
};

export default AboutSection;
