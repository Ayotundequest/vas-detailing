import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
  
    >
      <div className="absolute inset-0 bg-black overflow-hidden"></div>

      <div className="relative z-10 text-white px-6">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-3">
          Premium Mobile Detailing, <br />
           Delivered to You.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Time to Level Up. We Bring the Detail to Your Door. 
        </p>
        <a
          href="#book"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded shadow-lg transition"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
