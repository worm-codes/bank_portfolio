import { NewsFromUsHome } from 'modules';

import About from './About';
import EducationalContent from './EducationalContent';
import HeroSection from './HeroSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <EducationalContent />
      <NewsFromUsHome />
    </>
  );
}

export default HomePage;
