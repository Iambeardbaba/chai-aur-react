import React from "react";

const Section2 = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 animate-fadeIn flex items-center justify-center">
      <div className="text-center animate-fadeInUp">
        <h2 className="text-5xl font-bold text-white mb-6">Section 2</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Experience the beauty of smooth animations and transitions in this enhanced UI project.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full transition-all-smooth hover:bg-blue-700 hover-scale hover-lift">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full transition-all-smooth hover:bg-white hover:text-gray-900 hover-scale">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
