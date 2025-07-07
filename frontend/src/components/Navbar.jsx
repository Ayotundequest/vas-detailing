import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="bg-black w-full">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="drawer sm:drawer-mobile">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

          {/* Navbar content */}
          <div className="drawer-content flex flex-col">
            <nav className="w-full flex items-center justify-between py-4">
              {/* Left Nav - Desktop */}
              <div className="hidden sm:flex items-center gap-4 md:gap-10 order-2 lg:order-1">
                <a href="#" className="text-lg font-bold text-[#FF1744] font-poppins">Home</a>
                <a href="#about" className="text-lg text-white hover:text-[#FF1744] font-poppins">About</a>
                <a href="#services" className="text-lg text-white hover:text-[#FF1744] font-poppins">Services</a>
                <a href="#work" className="text-lg text-white hover:text-[#FF1744] font-poppins">Gallery</a>
                <a href="#review" className="text-lg text-white hover:text-[#FF1744] font-poppins">Reviews</a>
              </div>

              {/* Center Logo */}
              <div className="flex-1 flex lg:justify-center order-1 lg:order-2">
                <img
                  src={logo}
                  alt="VAS Detailing Logo"
                  className="h-[2.3125rem] sm:h-20 md:h-[126px] md:w-[213px] object-contain"
                />
              </div>

              {/* Right Buttons - Desktop */}
              <div className="hidden lg:flex items-center gap-3 order-3">
                <a href="#quote">
                  <button className="py-2 px-7 h-12 font-bold font-poppins text-white bg-[#FF1744] hover:bg-red-700 shadow-md text-sm">
                    Book Now
                  </button>
                </a>
                <a href="#footer">
                  <button
                    className="py-2 px-7 h-12 font-bold font-poppins text-white border text-sm"
                    style={{
                      borderWidth: "1px",
                      borderImage:
                        "linear-gradient(179.06deg, rgb(202, 0, 40) 0.81%, rgb(160, 112, 184) 103.09%)",
                      borderImageSlice: 1,
                    }}
                  >
                    Contact Us
                  </button>
                </a>
              </div>

              {/* Hamburger - Mobile */}
              <button className="w-1/3 flex justify-end order-2 lg:order-3  sm:hidden">
  <label htmlFor="my-drawer-3" aria-label="open sidebar">
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white text-xl m-1"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  </label>
</button>

            </nav>
          </div>

          {/* Sidebar drawer */}
          <div className="drawer-side mt-[61px] sm:hidden z-50">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu min-h-full w-80 p-4 bg-white max-w-[200px]">
      <div>
        <a
          href="#"
          className="text-lg py-3 block cursor-pointer transition-colors font-poppins text-[#FF1744] font-bold"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => {
    const drawerCheckbox = document.getElementById("my-drawer-3");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  }}
          className="text-lg py-3 block cursor-pointer font-normal transition-colors font-poppins text-gray-800 hover:text-[#FF1744]"
        >
          About
        </a>
        <a
          href="#services"
          onClick={() => {
    const drawerCheckbox = document.getElementById("my-drawer-3");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  }}
          className="text-lg py-3 block cursor-pointer font-normal transition-colors font-poppins text-gray-800 hover:text-[#FF1744]"
        >
          Services
        </a>
        <a
          href="#work"
          onClick={() => {
    const drawerCheckbox = document.getElementById("my-drawer-3");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  }}
          className="text-lg py-3 block cursor-pointer font-normal transition-colors font-poppins text-gray-800 hover:text-[#FF1744]"
        >
          Portfolio
        </a>
        <a
          href="#review"
          onClick={() => {
    const drawerCheckbox = document.getElementById("my-drawer-3");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  }}
          className="text-lg py-3 block cursor-pointer font-normal transition-colors font-poppins text-gray-800 hover:text-[#FF1744]"
        >
          Reviews
        </a>
      </div>
    </ul>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
