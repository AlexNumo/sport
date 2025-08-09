import { useEffect, useState } from 'react';
import { WrapperSection, WrapperInfo } from './Timer.Styled';
import { useTranslation } from 'react-i18next';
import { useDiscount } from '../../contex/DiscountContext';

const Timer = () => {
  const { t } = useTranslation();
  const { setIsDiscountActive } = useDiscount();
  
  const deadline = new Date('2025-08-24T23:59:59');

  const pluralize = (number, forms) => {
    const n = Math.abs(number) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) return forms[2];
    if (n1 > 1 && n1 < 5) return forms[1];
    if (n1 === 1) return forms[0];
    return forms[2];
  };

  const calculateTimeLeft = () => {
    const difference = deadline - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // console.log(timeLeft)

  useEffect(() => {
    // Встановити початковий стан одразу при монтуванні
    const initialTimeLeft = calculateTimeLeft();
    setTimeLeft(initialTimeLeft);
    setIsDiscountActive(!!initialTimeLeft);

    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      setIsDiscountActive(!!newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [setIsDiscountActive]);


  return (
    <WrapperSection>
      {timeLeft ? (
        <>
          <p>{t('timer.title')}</p>
          <WrapperInfo>
            {timeLeft && (
              <>
                {timeLeft.days > 0 && (
                  <span>
                    {timeLeft.days} {pluralize(timeLeft.days, ['день', 'дні', 'днів'])}{' '}
                  </span>
                )}
                <span>
                  {timeLeft.hours} {pluralize(timeLeft.hours, ['година', 'години', 'годин'])}{' '}
                </span>
                <span>
                  {timeLeft.minutes} {pluralize(timeLeft.minutes, ['хвилина', 'хвилини', 'хвилин'])}{' '}
                </span>
                {timeLeft.days === 0 && (
                  <span>
                    {timeLeft.seconds} {pluralize(timeLeft.seconds, ['секунда', 'секунди', 'секунд'])}
                  </span>
                )}
              </>
            )}
          </WrapperInfo>
        </>
        ) : (
          <p>{t('timer.ended')}</p>
        )}
    </WrapperSection>
  );
};

export default Timer;
