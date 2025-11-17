
import React from 'react';

const Hero: React.FC = () => {
    const handleBookNow = () => {
        // In a real app, this would link to a booking platform
        alert('Redirecting to booking platform...');
    };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/salon-hero/1920/1080')" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-gold drop-shadow-lg">
          The Beauty and The Beard
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Where style is created, confidence is born, and beauty is redefined.
        </p>
        <button 
          onClick={handleBookNow}
          className="mt-8 bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
