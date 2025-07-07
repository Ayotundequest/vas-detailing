import React from "react";
import footerLogo from "../assets/footerLogo.png";
import footerBg from "../assets/footer.jpg"; 
import instaGram from '../assets/instaGram.svg';
import tikTok from '../assets/tikTok.svg';
import faceBook from '../assets/facebook.svg';

const Footer = () => {
  return (
    <div
      id="footer"
      className="mt-8 md:mt-[8.75rem] bg-cover py-8 px-3 md:py-[8.3125rem] text-[1.1875rem] md:text-2xl text-white"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row gap-10 md:items-start justify-between mx-auto max-w-[1082px]">
          {/* Logo & Info */}
          <div>
            <img src={footerLogo} alt="footer logo" className="w-[11.3125rem] mx-auto md:mx-0" />
            <p className="text-center md:text-left">VAS Detailing © 2025</p>
            <div className="flex gap-10 text-[48px] md:text-[56px] mt-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/share/15bAz3n1Ar/">
                <img src={faceBook} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@vas_detailing">
                <img src={tikTok} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/vas_detailingllc">
                <img src={instaGram}alt="TikTok" className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="md:text-[1.875rem] text-2xl font-bold">Company</h3>
            <div className="flex flex-col gap-2 md:gap-5 mt-5 text-center md:text-left">
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#work">Portfolio</a>
              <a href="#review">Reviews</a>
              <a href="#quote">Book Now</a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="md:text-[1.875rem] text-2xl font-bold">Contact Us</h3>
            <div className="flex flex-col gap-2 md:gap-5 mt-5">
              <a href="tel:+12165070503" className="flex items-start justify-center md:justify-start gap-3">
                📞 <span>+1 216-507-0503</span>
              </a>
              <a href="mailto:vasdetailingllc@gmail.com" className="flex items-start justify-center md:justify-start gap-3">
                ✉️ <span>vasdetailingllc@gmail.com</span>
              </a>
              <a href="https://maps.google.com/?q=Strongsville,Ohio" className="flex items-start justify-center md:justify-start gap-3">
                📍 <span>Strongsville, Ohio + 30-mile radius</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
