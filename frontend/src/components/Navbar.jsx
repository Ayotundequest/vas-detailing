import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gradient-to-r from-red-500 to-purple-600">
          VAS Detailing
        </a>

        <nav className="hidden md:flex gap-6 font-medium text-gray-800">
          <a href="#home" className="hover:text-red-600">Home</a>
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#services" className="hover:text-red-600">Services</a>
          <a href="#gallery" className="hover:text-red-600">Gallery</a>
          <a href="#reviews" className="hover:text-red-600">Reviews</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
          <a href="#book" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Book Now</a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-3 shadow">
          <a href="#home" className="block text-gray-700">Home</a>
          <a href="#about" className="block text-gray-700">About</a>
          <a href="#services" className="block text-gray-700">Services</a>
          <a href="#gallery" className="block text-gray-700">Gallery</a>
          <a href="#reviews" className="block text-gray-700">Reviews</a>
          <a href="#contact" className="block text-gray-700">Contact</a>
          <a href="#book" className="block bg-red-500 text-white text-center py-2 rounded">Book Now</a>
        </div>
      )}
    </header>
  );
}
