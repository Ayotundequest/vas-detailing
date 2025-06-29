import Timeline from '../components/Timeline.jsx';

export default function About() {
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">About VAS Detailing</h1>
      <p className="mb-4">
        Vas Detailing is a premium mobile car detailing service based in
        Strongsville, Ohio. We bring professional‑grade detailing to your
        doorstep, using top‑tier products and techniques. :contentReference[oaicite:6]{index=6}
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
      <blockquote className="border-l-4 border-accent pl-4 italic">
        At VAS Detailing, our mission is to elevate your vehicle's appearance
        with convenient, reliable, and meticulous detailing services. :contentReference[oaicite:7]{index=7}
      </blockquote>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Timeline</h2>
      <Timeline />
    </section>
  );
}
