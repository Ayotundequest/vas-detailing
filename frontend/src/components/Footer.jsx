import React from 'react';
import instaGram from '../assets/instaGram.svg';
import tikTok from '../assets/tikTok.svg';
import faceBook from '../assets/facebook.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold text-red-500 mb-2">VAS Detailing</h3>
          <p className="text-sm text-gray-300">“Time to Level Up”</p>
          <p className="text-sm text-gray-400 mt-4">© {new Date().getFullYear()} VAS Detailing. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-red-400">Home</a></li>
            <li><a href="#about" className="hover:text-red-400">About</a></li>
            <li><a href="#services" className="hover:text-red-400">Services</a></li>
            <li><a href="#gallery" className="hover:text-red-400">Gallery</a></li>
            <li><a href="#reviews" className="hover:text-red-400">Reviews</a></li>
            <li><a href="#book" className="hover:text-red-400">Book Now</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-300">Phone: <a href="tel:2165070503" className="hover:text-red-400">216-507-0503</a></p>
          <p className="text-sm text-gray-300">Email: <a href="mailto:vasdetailingllc@gmail.com" className="hover:text-red-400">vasdetailingllc@gmail.com</a></p>

          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/vas_detailingllc/profilecard/?igsh=Z3lpaDlhbHNuYzZy" target="_blank" rel="noreferrer">
              <img src={instaGram} alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com/@vas_detailing?_t=ZT-8wlGrs7mULj&_r=1" target="_blank" rel="noreferrer">
              <img src={tikTok}alt="TikTok" className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/share/15bAz3n1Ar/" target="_blank" rel="noreferrer">
              <img src={faceBook} alt="Facebook" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
