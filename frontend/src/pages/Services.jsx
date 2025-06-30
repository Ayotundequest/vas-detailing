import React from 'react';

const services = [
  {
    title: "Full Interior & Exterior Detail",
    prices: "Sedan: $200 | Small SUV: $250 | Truck: $250 | Large SUV: $350",
  },
  {
    title: "Interior-Only Detail",
    prices: "Sedan/Truck: $150 | Small SUV: $200 | Large SUV: $250",
  },
  {
    title: "Exterior-Only Detail",
    prices: "Flat Rate: $100 (+$50–$100 for Wax/Clay Bar)",
  },
];

const addons = [
  "Headlight Restoration: $25/headlight",
  "Engine Bay Cleaning: $25",
  "Pet Hair/Stain Removal: $20–$40",
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">Our Services</h2>
        <div className="space-y-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white shadow p-6 rounded">
              <h3 className="text-2xl font-semibold text-pink-700 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.prices}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h4 className="text-xl font-bold text-pink-700 mb-2">Add-Ons:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {addons.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
