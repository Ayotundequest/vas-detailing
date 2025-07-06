import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="bg-black w-full">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="drawer drawer-end z-50">
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
              <div className="flex-1 flex justify-center lg:order-2">
                <img
                  src={logo}
                  alt="VAS Detailing Logo"
                  className="h-[2.3125rem] sm:h-20 md:h-[126px] md:w-[213px] object-contain"
                />
              </div>

              {/* Right Buttons - Desktop */}
              <div className="hidden lg:flex items-center gap-3 order-3">
                <a href="#quote">
                  <button className="py-2 px-7 h-12 font-bold font-poppins text-white bg-red-600 hover:bg-red-700 shadow-md text-sm">
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
              <div className="sm:hidden">
                <label htmlFor="my-drawer-3" className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white text-2xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </label>
              </div>
            </nav>
          </div>

          {/* Sidebar drawer */}
          <div className="drawer-side sm:hidden">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-64 min-h-full bg-white text-gDark">
              <li><a href="#" className="text-[#FF1744] font-bold">Home</a></li>
              <li><a href="#about" className="hover:text-[#FF1744]">About</a></li>
              <li><a href="#services" className="hover:text-[#FF1744]">Services</a></li>
              <li><a href="#work" className="hover:text-[#FF1744]">Gallery</a></li>
              <li><a href="#review" className="hover:text-[#FF1744]">Reviews</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
