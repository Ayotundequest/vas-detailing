import React from "react";

// Import assets
import playBtn from "../assets/playBtn.png";
import preview from "../assets/preview.jpg";
import videoSrc from "../assets/vid.mp4";
import videoSC from "../assets/vid2.mp4";
import p1 from "../assets/p_1.png";
import p2 from "../assets/p_2.png";
import levelUpLeft from "../assets/levelUpLeft.svg";

const Gallery = () => {
  return (
    <div className="mt-[3.375rem] md:mt-10 relative" id="work">
      {/* Title and Text */}
      <div className="relative z-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="w-full" data-aos="fade-up">
            <h2 className="text-[1.875rem] md:text-[4.25rem] font-bold text-center text-[#FF1744]">
              Gallery
            </h2>
            <p className="text-sm md:text-2xl max-w-[72.125rem] text-center mx-auto">
              At VAS Detailing, every vehicle we touch tells a story of precision, care, and transformation. Explore our portfolio to see the results for yourself.
            </p>
          </div>
        </div>

        {/* Video & Images */}
        <div className="mt-6 md:mt-16 flex flex-col md:flex-row max-w-[1600px] mx-auto">
          {/* Video Block */}
          <div className="w-full relative group">
            {/* Overlay preview for desktop */}
            <div
              className="absolute inset-0 bg-cover hidden md:flex items-center justify-center group-hover:hidden"
              style={{ backgroundImage: `url(${preview})` }}
            >
              <button className="w-[6.8125rem] md:w-[9.375rem]">
                <img src={playBtn} alt="play button" className="max-w-full" />
              </button>
            </div>

            {/* Video Desktop */}
            <video
              src={videoSrc}
              className="w-full h-[23.4375rem] md:h-[600px] object-cover hidden md:block"
              autoPlay
              loop
              muted
              playsInline
            ></video>

            {/* Video Mobile */}
            <video
              src={videoSrc}
              className="w-full h-[23.4375rem] md:h-[600px] object-cover block md:hidden"
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <video
              src={videoSC}
              className="w-full h-[23.4375rem] md:h-[600px] object-cover block md:hidden"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>

          {/* Portfolio Images */}
          <div className="w-full" data-aos="fade-left">
            <img
              src={p1}
              alt="portfolio illustration"
              className="w-full md:h-[300px] object-cover block"
            />
            <img
              src={p2}
              alt="portfolio illustration"
              className="w-full md:h-[300px] object-cover block"
            />
          </div>
        </div>
      </div>

      {/* Decorative SVG */}
      <img
        src={levelUpLeft}
        alt=""
        className="absolute right-0 top-[450px] -translate-y-1/2 py-4 px-2 font-bold font-montserrat text-red hidden md:block h-[1348px] -z-0"
      />
    </div>
  );
};

export default Gallery;
