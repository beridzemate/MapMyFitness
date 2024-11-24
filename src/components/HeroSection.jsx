import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white h-screen"
      style={{ backgroundImage: "url('/src/assets/image.avif')" }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">ACHIEVE YOUR BEST RESULTS</h1>
        <p className="mt-4 text-lg text-center max-w-lg">
          Whether you're training for a marathon or a major competition, we’re here to help you achieve serious progress.
        </p>
        <button className="bg-yellow-500 mt-6 px-8 py-3 rounded text-lg">Sign Up</button>
        <div className="flex space-x-4 mt-6">
          <img src="/src/appstore.png" alt="App Store" className="w-32" />
          <img src="/src/googleplay.png" alt="Google Play" className="w-32" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
