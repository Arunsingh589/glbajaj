import Hero from './components/Hero/Hero';
import './App.css';
import Stats from './components/Stats/Stats';
import Placement from './components/Placement/Placement';
import TopRecruiters from './components/TopRecruiters/TopRecruiters';
import ISRO from './components/ISRO/ISRO';
import WhyGLBajaj from './components/Whyglbajaj/WhyGLBajaj';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import StickyApplyButton from './components/StickyApplyButton/StickyApplyButton';

function App() {
  return (
    <div className="app">
      <Hero />
      <Stats />
      <Placement />
      <TopRecruiters />
      <ISRO />
      <WhyGLBajaj />
      <AboutUs />
      <Footer />
      <StickyApplyButton />
    </div>
  );
}

export default App;
