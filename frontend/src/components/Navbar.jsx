import React from "react";
import logo from "../assets/logo.jpg"; 

const Navbar = () => {
  return (
    <div className="bg-black w-full">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* Drawer wrapper */}
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

          {/* Main Nav Content */}
          <div className="drawer-content flex items-center justify-between">
            <nav className="w-full flex items-center justify-between py-3 md:py-5">
              {/* Left Nav (Links) - Desktop */}
              {/* Hamburger Menu Button - Mobile */}
            <button>
              <label htmlFor="my-drawer-3" className="sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white text-xl m-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </label></button>
              <div className="sm:flex items-center gap-4 hidden md:gap-10 order-2 lg:order-1">
                <a
                  href="#"
                  className="text-lg cursor-pointer font-bold text-[#FF1744] font-poppins"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-lg cursor-pointer font-poppins text-white hover:text-[#FF1744]"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-lg cursor-pointer font-poppins text-white hover:text-[#FF1744]"
                >
                  Services
                </a>
                <a
                  href="#work"
                  className="text-lg cursor-pointer font-poppins text-white hover:text-[#FF1744]"
                >
                  Gallery
                </a>
                <a
                  href="#review"
                  className="text-lg cursor-pointer font-poppins text-white hover:text-[#FF1744]"
                >
                  Reviews
                </a>
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
              <div className="lg:flex items-center gap-3 sm:gap-4 hidden order-3">
                <a href="#quote">
                  <button className="flex items-center py-2 px-7 h-12 font-bold font-poppins text-white bg-red-600 hover:bg-red-700 text-lg md:text-base shadow-[3px_10px_25px_0px_#00000040] transition-colors">
                    Book Now
                  </button>
                </a>
                <a href="#footer">
                  <button
                    className="flex items-center py-2 px-7 h-12 font-bold font-poppins text-white text-lg md:text-base border bg-transparent"
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
            </nav>
          </div>

          {/* Drawer Sidebar - Mobile */}
          <div className="drawer-side mt-[61px] sm:hidden z-50">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu w-80 max-w-[200px] p-4 bg-white min-h-full">
              <div>
                <a
                  href="#"
                  className="text-lg py-3 block cursor-pointer font-bold font-poppins text-[#FF1744]"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-lg py-3 block cursor-pointer font-normal font-poppins text-gDark hover:text-[#FF1744]"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-lg py-3 block cursor-pointer font-normal font-poppins text-gDark hover:text-[#FF1744]"
                >
                  Services
                </a>
                <a
                  href="#work"
                  className="text-lg py-3 block cursor-pointer font-normal font-poppins text-gDark hover:text-[#FF1744]"
                >
                  Gallery
                </a>
                <a
                  href="#review"
                  className="text-lg py-3 block cursor-pointer font-normal font-poppins text-gDark hover:text-[#FF1744]"
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
