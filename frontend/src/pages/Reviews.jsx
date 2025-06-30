import React from 'react';

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Customer Reviews</h2>
        <p className="mb-4 text-lg text-gray-700">
          Check out what our satisfied customers are saying on Google!
        </p>
        <a
          href="https://www.google.com/search?q=vas+detailing+strongsville+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-pink-700 text-white px-6 py-3 rounded hover:bg-pink-900"
        >
          Read Reviews on Google
        </a>
      </div>
    </section>
  );
}
