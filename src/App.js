import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { DiscountProvider } from './contex/DiscountContext';

import GlobalStyles from './Components/GlobalStyles';
import BackgroundMedia from './Components/BackgroundMedia';
import FatAnimation from './Components/FatAnimation';

import HeroSection from './Components/HeroSection';
import Timer from './Components/Timer/Timer';
import AboutCourse from './Components/AboutCourse';
// import AboutMe from './Components/AboutMe';
import ModulesSection from './Components/ModulesSection';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer/Footer';

import styled from 'styled-components';

const PageWrapper = styled.div`
  position: relative;
  z-index: 3;
`;

const Content = styled.main`
  position: relative;
  z-index: 4;
  min-height: 400vh;
`;

export default function App() {
  return (
    <ParallaxProvider>
      <BackgroundMedia />
      <FatAnimation />

      <PageWrapper>
        <GlobalStyles />
        <Content>
          <DiscountProvider>
            <HeroSection />
            <Timer />
            <AboutCourse />
            {/* <AboutMe /> */}
            <ModulesSection />
            <CallToAction />
            <Footer />
          </DiscountProvider>
        </Content>
      </PageWrapper>
    </ParallaxProvider>
  );
}
