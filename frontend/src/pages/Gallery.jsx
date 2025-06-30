import React from 'react';

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  // add more as needed
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="rounded shadow hover:scale-105 transition-transform object-cover h-52 w-full"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
