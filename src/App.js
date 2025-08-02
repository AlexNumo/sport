import { DiscountProvider } from './contex/DiscountContext';
import HeroSection from './Components/HeroSection';
import AboutCourse from './Components/AboutCourse';
// import PlusesCurs from './Components/PlusesCurs';
import ModulesSection from './Components/ModulesSection';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer/Footer';
import Timer from './Components/Timer/Timer';
// import ListPluses from './Components/ListPluses';
// import ForYou from './Components/ForYou';

function App() {

  return (
    <div className="App">
      <DiscountProvider>
        <HeroSection />
        <Timer/>
        <AboutCourse />
        {/* <PlusesCurs /> */}
        {/* <ListPluses /> */}
        {/* <ForYou/> */}
        <ModulesSection />
        <CallToAction/>
        <Footer/>
      </DiscountProvider>
    </div>
  );
}

export default App;
