import React, { useState } from "react";
import levelUPLeft from "../assets/levelUpLeft.svg"
const Quote = () => {
  const [vehicleType, setVehicleType] = useState("");
const [serviceType, setServiceType] = useState("");
  return (
    <div className="mt-[3.375rem] md:mt-[5.75rem] relative" id="quote">
      <div className="z-10 relative">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <h2 className="text-[1.875rem] md:text-[4.25rem] font-bold text-[#FF1744]">
              Book Now
            </h2>
            <p className="text-sm md:text-2xl max-w-[72.125rem] mx-auto text-gray-600">
              Your next-level detail starts here. Request a free quote and we'll do the rest.
            </p>
          </div>

          {/* FORM SECTION */}
          <div className="mt-6 md:mt-14 bg-gray-900 rounded-xl md:px-16 md:py-14 py-8 px-4 w-full text-white">
            <form>
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">
                  Contact Info
                </h2>

                <div className="flex flex-col md:flex-row md:gap-8 lg:gap-[88px]">
                  <div className="w-full">
                    <div className="mb-4" data-aos="fade-up">
                      <label htmlFor="fullName" className="block mb-2 text-xs">Full Name</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-red-500 rounded-md text-white placeholder:text-gray-400 bg-gray-900"
                      />
                      <p className="mt-1 text-sm text-red-500">Required</p>
                    </div>

                    <div className="mb-4" data-aos="fade-up">
                      <label htmlFor="phoneNumber" className="block mb-2 text-xs">Phone Number</label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 border border-red-500 rounded-md text-white placeholder:text-gray-400 bg-gray-900"
                      />
                      <p className="mt-1 text-sm text-red-500">Required</p>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="mb-4" data-aos="fade-up">
                      <label htmlFor="email" className="block mb-2 text-xs">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border  border-red-500 rounded-md text-white placeholder:text-gray-400 bg-gray-900"
                      />
                      <p className="mt-1 text-sm text-red-500">Required</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Car Detail Section */}
              <div className="mt-6 md:mt-10">
                <h2 className="text-2xl font-semibold mb-4">Car Detail</h2>
                <div className="flex flex-col md:flex-row md:gap-8 lg:gap-[88px]">
                  <div className="w-full">
                    <div className="mb-4" data-aos="fade-up">
                      <label htmlFor="vehicleType" className="block mb-2 text-xs">Vehicle Type</label>
                      <select
                        name="vehicleType"
                        id="vehicleType"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md text-white bg-gray-900"
                          value={vehicleType}
                          onChange={(e) => setVehicleType(e.target.value)}
                      >
                  
                        <option value="">Select Vehicle Type</option>
                        <option value="sedan">Sedan</option>
                        <option value="small_SUV">Small SUV</option>
                        <option value="large_SUV">Large SUV</option>
                        <option value="truck">Truck</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="mb-4" data-aos="fade-up">
                      <label htmlFor="serviceType" className="block mb-2 text-xs">Service Type</label>
                      <select
                        name="serviceType"
                        id="serviceType"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md text-white bg-gray-900"
                          value={serviceType}
                          onChange={(e) => setServiceType(e.target.value)}
                      >
                        <option value="">Select Service Type</option>
                        <option value="Full Detail">Full Detail</option>
                        <option value="Interior Only">Interior Only</option>
                        <option value="Exterior Only">Exterior Only</option>
                      </select>
                    </div>
                      {vehicleType && serviceType && (
                    <div className="mt-2 mb-4">
                      <label className="block font-medium mb-2" htmlFor="addOns">Add-ons</label>
                      <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" value="Headlight Restoration" name="addOns" /> Headlight Restoration
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" value="Engine Bay Cleaning" name="addOns" /> Engine Bay Cleaning
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" value="Pet Hair & Heavy Stain Removal" name="addOns" /> Pet Hair & Heavy Stain Removal
                        </label>
                      </div>
                    </div>
                    )}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="flex flex-col md:flex-row md:gap-8 lg:gap-[88px]">
                  <div className="w-full mb-4" data-aos="fade-up">
                    <label htmlFor="date" className="block mb-2 text-xs">Date</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-white bg-transparent"
                    />
                  </div>
                  <div className="w-full mb-4" data-aos="fade-up">
                    <label htmlFor="time" className="block mb-2 text-xs">Time</label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md text-white bg-transparent"
                    />
                  </div>
                </div>

                {/* Comments */}
                <div className="w-full mb-6" data-aos="fade-up">
                  <label htmlFor="comments" className="block mb-2 text-xs">Comments</label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-white bg-transparent"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center w-full max-w-[356px] mx-auto h-[3.3125rem] mt-10 md:mt-12 px-4 py-2 text-white bg-[#FF1744] hover:bg-red-700 font-bold rounded transition"
              >
                <span>Book Now</span>
                <svg
                  className="ml-2"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M184 112l144 144-144 144"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <img
        src={levelUPLeft}
        alt="decoration"
        className="absolute left-0 top-[350px] -translate-y-1/2 hidden md:block -z-0"
      />

      
    </div>
  );
};

export default Quote;
