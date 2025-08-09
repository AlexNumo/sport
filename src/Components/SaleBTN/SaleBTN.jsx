import { DiscountBadge, ButtonContainer, Button } from './SaleBTN.Styled';
import { useTranslation } from 'react-i18next';
import { useDiscount } from '../../contex/DiscountContext';

const SaleBTN = ({ setModalOpen, nameBTN }) => {
  const { t } = useTranslation();
  const { isDiscountActive } = useDiscount();
  // console.log(nameBTN)

  return (
    <ButtonContainer>
      <Button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => setModalOpen(true)}>
        {nameBTN ? nameBTN : t('hero.button') }
      </Button>
      {isDiscountActive && <DiscountBadge>-80%</DiscountBadge>}
    </ButtonContainer>
  );
};

export default SaleBTN;
