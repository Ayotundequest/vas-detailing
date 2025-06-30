import React from 'react';

export default function ContactBookingForm() {
  return (
    <section id="book" className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">Book Now</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Full Name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="tel" placeholder="Phone Number" className="input" />
          <select className="input">
            <option>Vehicle Type</option>
            <option>Sedan</option>
            <option>Small SUV</option>
            <option>Truck</option>
            <option>Large SUV</option>
          </select>
          <fieldset className="border p-4 rounded">
            <legend className="text-sm text-gray-600">Service Type</legend>
            <label className="block"><input type="checkbox" /> Full Detail</label>
            <label className="block"><input type="checkbox" /> Interior Only</label>
            <label className="block"><input type="checkbox" /> Exterior Only</label>
          </fieldset>
          <fieldset className="border p-4 rounded">
            <legend className="text-sm text-gray-600">Add-ons</legend>
            <label className="block"><input type="checkbox" /> Headlight Restoration</label>
            <label className="block"><input type="checkbox" /> Engine Bay Cleaning</label>
            <label className="block"><input type="checkbox" /> Pet Hair/Stain Removal</label>
          </fieldset>
          <input type="datetime-local" className="input" />
          <textarea rows="4" placeholder="Comments" className="input" />
          <button type="submit" className="bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
