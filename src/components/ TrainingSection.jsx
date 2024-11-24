import React from 'react';

const TrainingSection = () => {
  return (
    <section className="bg-black text-white py-12">
      {/* Upper Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SET GOALS. TRACK YOUR WORKOUTS. STAY ON COURSE.
          </h2>
          <p className="text-lg mb-6">
            Easily track your workouts, create workout plans, and discover new programs to achieve your fitness goals.
          </p>
          <button className="bg-white text-black px-6 py-3 font-semibold rounded">
            Start Now
          </button>
        </div>

        {/* Right Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src="/src/assets/runner.avif"
            alt="Runner"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Lower Section */}
      <div className="bg-gray-900 mt-12 py-8">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between px-6">
          <img
            src="/src/assets/2024-image.avif"
            alt="You vs The Year 2024"
            className="md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left md:w-1/2 mt-6 md:mt-0 md:ml-8">
            <h3 className="text-3xl font-bold">YOU VS THE YEAR 2024</h3>
            <p className="text-lg mt-2">Log 1,024 km in 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
