import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import TrainingSection from './components/TrainingSection';
const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ContentSection />
      <TrainingSection />
    </div>
  );
};

export default App;
