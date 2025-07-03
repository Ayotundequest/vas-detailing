import React from "react";
import aboutMobile from "../assets/aboutMobile.png";

const About = () => {
  return (
    <section id="about" className="relative z-20 -mt-36">
      <img
        src={aboutMobile}
        alt="About and Mission statement"
        className="w-full object-cover"
      />
    </section>
  );
};

export default About;
