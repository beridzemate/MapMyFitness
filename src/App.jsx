import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ContentSection />
    </div>
  );
};

export default App;
