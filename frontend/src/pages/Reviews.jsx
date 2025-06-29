export default function Reviews() {
  return (
    <section className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">Customer Reviews</h1>
      <p className="mb-8">Read 5‑star feedback from happy drivers on Google.</p>
      <a
        href="https://www.google.com/maps/place/VAS+Detailing/reviews"
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 focus-visible:ring"
      >
        View on Google
      </a>
    </section>
  );
}
