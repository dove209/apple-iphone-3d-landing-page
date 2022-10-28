import { GlobalStyle } from './styles/GlobalStyle';

import { ColorContextProvider } from './context/ColorContext';

import Quote from './sections/Quote';
import HeroSection from './sections/HeroSection';
import PhoneModel from './sections/PhoneModel';
import DesignSection from './sections/DesignSection';
import DisplaySection from './sections/DisplaySection';
import ProcessorSection from './sections/ProcessorSection';
import BatterySection from './sections/BatterySection';
import ColorSection from './sections/ColorSection';
import CameraSection from './sections/CameraSection';
import PricingSection from './sections/PricingSection';



function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorContextProvider>
        <ColorSection />
        <CameraSection />
        <PricingSection />
      </ColorContextProvider>
    </>
  );
}

export default App;
