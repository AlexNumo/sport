import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import FatAnimationData from '../../assets/Fat.json';
import { FatAnimationWrapper } from './FatAnimation.Styled';

function FatAnimation() {
  const lottieRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (isScrolling) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isScrolling]);

  return (
    <FatAnimationWrapper>
      <Lottie
        lottieRef={lottieRef}
        animationData={FatAnimationData}
        loop={true}
        autoplay={false}
        style={{ width: '100%', height: 'auto' }}
      />
    </FatAnimationWrapper>
  );
};

export default FatAnimation;
