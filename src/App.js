import { DiscountProvider } from './contex/DiscountContext';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ForWhomSection from './Components/ForWhomSection';
import ModulesSection from './Components/ModulesSection';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer/Footer';
import Timer from './Components/Timer/Timer';

function App() {

  return (
    <div className="App">
      <DiscountProvider>
        <HeroSection />
        <Timer/>
        <AboutSection />
        <ForWhomSection />
        <ModulesSection />
        <CallToAction/>
        <Footer/>
      </DiscountProvider>
    </div>
  );
}

export default App;
