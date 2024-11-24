import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">MAPMYFITNESS</h1>
      <div className="flex space-x-4">
        <a href="#workouts">Workouts</a>
        <a href="#routes">Routes</a>
        <a href="#community">Community</a>
        <button className="bg-gray-800 px-4 py-2 rounded">Login</button>
        <button className="bg-yellow-500 px-4 py-2 rounded">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
