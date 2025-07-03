import React from "react";
import levelUpLeft from "../assets/levelUpLeft.svg";

const Quote = () => {
  return (
    <div className="mt-[3.375rem] md:mt-[5.75rem] relative" id="quote">
      <div className="relative z-10">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="w-full">
            <h2 className="text-[1.875rem] md:text-[4.25rem] font-bold text-center text-red-500">
              Book Now
            </h2>
            <p className="text-sm md:text-2xl text-center text-gNormal max-w-[72.125rem] mx-auto">
              Your next-level detail starts here. Request a free quote and we'll do the rest.
            </p>
          </div>

          {/* Form Section */}
          <div className="mt-6 md:mt-14 bg-gray-900 rounded-xl md:px-16 md:py-14 py-8 px-4 w-full text-white">
            <form action="#">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">Contact Info</h2>
                <div className="flex flex-col md:flex-row md:gap-8 lg:gap-[88px]">
                  <div className="w-full">
                    <div className="mb-4 md:mb-6" data-aos="fade-up">
                      <label htmlFor="fullName" className="block mb-2 text-xs">Full Name</label>
                      <input type="text" id="fullName" name="fullName" placeholder="Enter your full name"
                        className="w-full px-4 py-[11.5px] text-[15px] border border-gray-300 text-white rounded-md placeholder:text-lActive"
                      />
                    </div>
                    <div className="mb-4 md:mb-6" data-aos="fade-up">
                      <label htmlFor="phoneNumber" className="block mb-2 text-xs">Phone Number</label>
                      <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number"
                        className="w-full px-4 py-[11.5px] text-[15px] border border-gray-300 text-white rounded-md placeholder:text-lActive"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-4 md:mb-6" data-aos="fade-up">
                      <label htmlFor="email" className="block mb-2 text-xs">Email</label>
                      <input type="email" id="email" name="email" placeholder="Enter your email"
                        className="w-full px-4 py-[11.5px] text-[15px] border border-gray-300 text-white rounded-md placeholder:text-lActive"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Car Detail */}
              <div className="mt-6 md:mt-10">
                <h2 className="text-2xl font-semibold mb-4">Car Detail</h2>
                <div className="flex flex-col md:flex-row md:gap-8 lg:gap-[88px]">
                  <div className="w-full">
                    <div className="mb-4 md:mb-6" data-aos="fade-up">
                      <label htmlFor="vehicleType" className="block mb-2 text-xs">Vehicle Type</label>
                      <select id="vehicleType" name="vehicleType"
                        className="w-full px-4 py-[11.5px] text-[15px] border border-gray-300 text-white rounded-md"
                      >
                        <option value="" disabled>Select Vehicle Type</option>
                        <option value="sedan">Sedan</option>
                        <option value="small_SUV">Small SUV</option>
                        <option value="large_SUV">Large SUV</option>
                        <option value="truck">Truck</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-4 md:mb-6" data-aos="fade-up">
                      <label htmlFor="serviceType" className="block mb-2 text-xs">Service Type</label>
                      <select id="serviceType" name="serviceType"
                        className="w-full px-4 py-[11.5px] text-[15px] border border-gray-300 text-white rounded-md"
                      >
                        <option value="" disabled>Select Service Type</option>
                        <option value="interior">Interior Only</option>
                        <option value="exterior">Exterior Only</option>
                        <option value="full">Full Detail</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-8 lg:gap-[88px]">
                  <div className="w-full">
                    <div className="mb-4 md:mb-6" data-aos="fade-up">
                      <label htmlFor="date" className="block mb-2 text-xs">Date</label>
                      <input type="date" id="date" name="date"
                        className="w-full px-4 py-[11.5px] text-[15px] border border-gray-300 text-white rounded-md placeholder:text-lActive"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-4 md:mb-6" data-aos="fade-up">
                      <label htmlFor="time" className="block mb-2 text-xs">Time</label>
                      <input type="time" id="time" name="time"
                        className="w-full px-4 py-[11.5px] text-[15px] border border-gray-300 text-white rounded-md placeholder:text-lActive"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="mb-4 md:mb-6" data-aos="fade-up">
                    <label htmlFor="comments" className="block mb-2 text-xs">Comments</label>
                    <textarea
                      id="comments"
                      name="comments"
                      className="w-full px-4 py-[11.5px] text-[15px] h-[100px] border border-gray-300 text-white rounded-md placeholder:text-lActive"
                      placeholder="Any additional details..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="flex items-center justify-center px-4 py-2 rounded transition-colors focus:outline-none shadow-[3px_10px_25px_0px_#00000040] font-bold font-poppins bg-red-600 text-white hover:bg-red-700 w-full max-w-[356px] mx-auto h-[3.3125rem] text-[1.1875rem] mt-10 md:mt-12"
                >
                  <span className="btn-text">Get a Quote</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="ml-2 text-lg"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="48"
                      d="m184 112 144 144-144 144"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background SVG Decoration */}
      <img
        src={levelUpLeft}
        alt=""
        className="absolute left-0 top-[400px] -translate-y-1/2 py-4 px-2 font-bold font-montserrat text-red hidden md:block -z-0"
      />
    </div>
  );
};

export default Quote;
