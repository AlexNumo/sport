import { DiscountBadge, ButtonContainer, Button } from './SaleBTN.Styled';
import { useTranslation } from 'react-i18next';
import { useDiscount } from '../../contex/DiscountContext';

const SaleBTN = ({ setModalOpen }) => {
  const { t } = useTranslation();
  const { isDiscountActive } = useDiscount();

  return (
    <ButtonContainer>
      <Button onClick={() => setModalOpen(true)}>
        {t('hero.button')}
      </Button>
      {isDiscountActive && <DiscountBadge>-80%</DiscountBadge>}
    </ButtonContainer>
  );
};

export default SaleBTN;
