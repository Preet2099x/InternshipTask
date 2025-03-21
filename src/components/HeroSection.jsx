import React from 'react';

const HeroSection = () => {
    return (
      <div className="relative bg-gray-900 text-white h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            className="object-cover w-full h-full"
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/placeholder-hero.jpg"
          >
            <source src="/businessvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-xl mb-8">
            Discover the best solutions for your business needs with our comprehensive services and expert team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;
