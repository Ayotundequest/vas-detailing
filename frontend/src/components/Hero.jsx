import React from "react";
import hero from "../assets/hero.png";
import heroMobile from "../assets/heroMobile.png";
import Marquee from "react-fast-marquee"; 

const Hero = () => {
  return (
    <div className="bg-black overflow-hidden relative">
      {/* Marquee Section */}
      <div className="text-center font-poppins md:font-montserrat relative">
        <Marquee
          speed={40}
          gradient={false}
          className="overflow-hidden h-[199px] md:h-[340px] pt-[120px] md:pt-[100px]"
        >
          <h1 className="font-montserrat font-bold text-[70px] md:text-[282px] leading-none bg-gradient-to-b from-[#121212] via-[#121212] to-[#262626] bg-clip-text text-transparent whitespace-nowrap">
            TIME TO LEVEL UP &nbsp;
          </h1>
        </Marquee>

        {/* Static Content Over Marquee */}
        <div className="absolute top-[5%] left-0 right-0 z-20 px-6 text-center">
  <h1 className="text-lg sm:text-5xl md:text-7xl font-bold text-white text-center whitespace-nowrap overflow-hidden text-ellipsis leading-snug tracking-wide">
        Premium Mobile Detailing,<br />
    Delivered to You.
  </h1>
  <p className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto text-white">
     Time to Level Up. We Bring the Detail to Your Door.
  </p>
</div>
      </div>

      <div style={{ height: "20px" }}></div>


      {/* Hero Images */}
      <div>
        {/* Mobile Image */}
        <img
          src={heroMobile}
          alt="Hero Mobile"
          className="w-full md:mt-[6.625rem] z-10 md:hidden block"
          data-aos="fade-right"
        />

        {/* Desktop Image */}
        <img
          src={hero}
          alt="Hero"
          className="w-full mt-3 md:mt-10 z-10 md:block hidden"
          data-aos="fade-right"
        />
      </div>
    </div>
  );
};

export default Hero;
