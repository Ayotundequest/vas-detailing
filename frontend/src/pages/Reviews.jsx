import React from "react";
import user1 from '../assets/p_1.png';
import user2 from '../assets/p_2.png';
import user3 from '../assets/p_3.png';

const reviews = [
  {
    name: "Peter Breis",
    image: user1,
    rating: 5,
    time: "3 days ago",
    text: "VAS Detailing exceeded my expectations from start to finish. They arrived on time, fully equipped, and turned my dull car into something that looked straight out of a showroom. I could not believe the difference.",
  },
  {
    name: "Sarah Johnson",
    image: user2,
    rating: 5,
    time: "1 week ago",
    text: "Incredible attention to detail! My car hasn't looked this good since I bought it. The team was professional, thorough, and the results are amazing. Highly recommend their services.",
  },
  {
    name: "Mike Anderson",
    image: user3,
    rating: 5,
    time: "2 weeks ago",
    text: "Outstanding service! They took care of every little detail inside and out. The paint correction made a huge difference, and the interior looks brand new. Worth every penny.",
  },
];

const ReviewCard = ({ name, image, rating, time, text }) => (
  <div
    className="w-full rounded-xl bg-gray-900 py-5 pl-4 pr-5 md:pr-6 md:pl-6 max-w-[646px] flex items-start gap-[0.875rem] text-white text-[0.9375rem]"
    data-aos="fade-up"
    style={{ boxShadow: "rgba(0, 0, 0, 0.07) 0px 2px 25px 0px" }}
  >
    <img
      src={image}
      alt={`${name}'s avatar`}
      className="md:w-10 md:h-10 h-6 w-6 rounded-full"
    />
    <div className="flex items-start justify-between w-full pb-[10px]">
      <div className="w-full">
        <div className="flex items-center gap-2">
          <p className="text-[0.9375rem] font-roboto">{name}</p>
          <p className="flex items-center gap-[0.125rem] text-yellow-500">
            {Array.from({ length: rating }, (_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                className="text-yellow-550"
                fill="currentColor"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12.672.668 3.059 6.197 6.838.993a.75.75 0 0 1 .416 1.28l-4.948 4.823 1.168 6.812a.75.75 0 0 1-1.088.79L12 18.347l-6.116 3.216a.75.75 0 0 1-1.088-.791l1.168-6.811-4.948-4.823a.749.749 0 0 1 .416-1.279l6.838-.994L11.327.668a.75.75 0 0 1 1.345 0Z" />
              </svg>
            ))}
          </p>
        </div>
        <p className="font-roboto text-sm">{time}</p>
        <p className="text-[10px] md:text-[0.9375rem] mt-[0.375rem] max-w-[29.5rem] text-justify">
          {text}
        </p>
      </div>
      <div className="text-right hidden md:block">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 533.5 544.3"
    className="w-6 h-6"
  >
    <path fill="#4285F4" d="M533.5 278.4c0-18.7-1.5-37.4-4.6-55.6H272v105.2h147.3c-6.4 34.7-25.5 64.4-54.3 84.2l87.7 68.2c51.4-47.3 80.8-117.1 80.8-201.9z"/>
    <path fill="#34A853" d="M272 544.3c73.5 0 135.2-24.3 180.2-66.2l-87.7-68.2c-24.4 16.3-55.4 25.9-92.5 25.9-71.1 0-131.3-48-152.8-112.4l-89.8 69.5c43.3 86 132.7 151.4 242.6 151.4z"/>
    <path fill="#FBBC05" d="M119.2 323.4c-10.4-30.7-10.4-63.8 0-94.5l-89.8-69.5c-39.1 77.4-39.1 168.1 0 245.5l89.8-69.5z"/>
    <path fill="#EA4335" d="M272 107.7c39.9 0 75.9 13.7 104.1 40.5l78.1-78.1C403.3 24.8 342.1 0 272 0 162.1 0 72.7 65.4 29.4 151.4l89.8 69.5C140.7 155.7 200.9 107.7 272 107.7z"/>
  </svg>
</div>
    </div>
  </div>
);

const Reviews = () => {
  return (
    <div className="pt-[3.375rem] md:pt-[8.75rem] relative z-20" id="review">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 md:gap-[3.1875rem] justify-between">
        {/* Left Heading */}
        <div className="w-full max-w-[36.4375rem]">
          <div className="w-full" data-aos="fade-right">
            <h2 className="text-[1.875rem] md:text-[4.25rem] font-bold text-[#FF1744] text-center md:text-left">
              Client Reviews
            </h2>
            <p className="text-sm md:text-2xl max-w-[72.125rem] mx-auto text-gray-700 text-center md:text-left">
              Our customers are at the heart of everything we do. See what real clients are saying about their experience with VAS Detailing and why they trust us to care for their vehicles every time.
            </p>
          </div>
        </div>

        {/* Review Cards */}
        <div
          className="w-full flex flex-col items-center gap-2 md:gap-[2.0625rem]"
          data-aos="fade-up"
        >
          {reviews.map((r, index) => (
            <ReviewCard key={index} {...r} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
