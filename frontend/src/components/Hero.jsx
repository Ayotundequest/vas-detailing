/**
 * Home‑page hero section.
 */
import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <section className="bg-secondary py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
        Premium Mobile Detailing – We Come to You
      </h1>
      <p className="max-w-xl mx-auto leading-relaxed mb-8">
        Time to Level Up – book a detail that protects your investment &
        gives your ride the showroom shine it deserves.
      </p>
      <Link
        to="/quote"
        className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold focus-visible:ring"
      >
        Get a Quote
      </Link>
    </section>
  );
}
