import React from "react";
import about from "../assets/about.png"
import aboutMobile from "../assets/aboutMobile.png"
const About = () => {
  return (
    <div
      id="about"
      data-aos="zoom-in"
      className="-mt-[200px] sm:-mt-[170px] lg:-mt-[250px] z-20 aos-init aos-animate"
    >
      {/* Desktop Version */}
      <div className="hidden md:block">
        <img
          src={about}
          alt="About VAS Detailing"
          className="w-full"
        />
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden">
        <img
          src={aboutMobile}
          alt="About VAS Detailing Mobile"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default About;
