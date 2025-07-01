import React from "react";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

const services = [
  {
    id: 1,
    title: "Full Interior & Exterior Detail",
    description:
      "Foam wash, wheels, tires, trim cleaned & dressed. Full interior vacuum, shampoo, steam clean, and conditioning.",
    image: s1,
    prices: [
      { label: "Sedan", amount: "$200" },
      { label: "Small SUV", amount: "$250" },
      { label: "Large SUV", amount: "$350" },
    ],
    reverse: false, // normal order → image left, text right
  },
  {
    id: 2,
    title: "Interior-Only Detail",
    description:
      "Deep vacuum, steam clean, carpet & seat shampoo, leather & trim conditioning.",
    image: s2,
    prices: [
      { label: "Sedan/Truck", amount: "$150" },
      { label: "Small SUV", amount: "$200" },
      { label: "Large SUV", amount: "$250" },
    ],
    reverse: true, // text first on wide screens
  },
  {
    id: 3,
    title: "Exterior-Only Detail",
    description: "Foam wash, tyre shine.",
    image: s3,
    prices: [
      { label: "Flat", amount: "$100" },
      { label: "Add Clay Bar/Wax", amount: "+$50–$100" },
    ],
    reverse: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="md:mt-16 mt-6 max-w-[1600px] mx-auto">
      {services.map(({ id, title, description, image, prices, reverse }) => (
        <div
          key={id}
          data-aos={reverse ? "fade-left" : "fade-right"}
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } justify-center md:max-h-[35.375rem]`}
        >
          {/* Service image */}
          <div className="w-full max-w-[652px]">
            <img src={image} alt={title} className="min-w-full" />
          </div>

          {/* Text block */}
          <div className="w-full bg-dActive px-4 md:px-10 flex justify-start text-white">
            <div className="py-8 md:py-[5.3125rem] max-w-[730px]">
              {/* Heading & description */}
              <h2 className="text-[1.5rem] md:text-5xl font-bold text-white text-center md:text-left">
                {title}
              </h2>
              <p className="text-sm md:text-2xl font-poppins text-white mt-3 text-center md:text-left">
                {description}
              </p>

              {/* Price list */}
              <div className="flex justify-between mt-8 gap-5 flex-wrap">
                {prices.map(({ label, amount }) => (
                  <div key={label}>
                    <div className="flex gap-[14px] items-start">
                      <div className="w-3 h-3 md:w-7 md:h-7 bg-[#7BB9D3] rotate-45 shrink-0" />
                      <div>
                        <h4 className="text-sm xl:text-[1.575rem] m-0 font-medium">
                          {label}
                        </h4>
                        {/* Desktop price */}
                        <p className="hidden md:block text-[1.3125rem] md:text-[2.9375rem] font-bold">
                          {amount}
                        </p>
                      </div>
                    </div>
                    {/* Mobile price */}
                    <p className="md:hidden text-[2.3125rem] font-bold">
                      {amount}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="mt-12 w-full">
                <a href="#quote">
                  <button className="flex justify-between items-center py-2 px-[1.5625rem] h-[3.3125rem] mx-auto md:mx-0 font-bold font-poppins rounded bg-red-600 text-white transition-colors hover:bg-red-700 shadow-[3px_10px_25px_0px_#00000040] focus:outline-none">
                    <span className="btn-text">Get a Quote</span>
                    <svg
                      viewBox="0 0 512 512"
                      className="ml-2 text-lg"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
