import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    { title: 'Full Interior & Exterior', price: '$200‑$350', desc: 'Complete detail – inside & out.' },
    { title: 'Interior‑Only', price: '$150‑$250', desc: 'Deep cabin clean & protect.' },
    { title: 'Exterior‑Only', price: '$100', desc: 'Paint‑safe wash & wax.' }
  ];
  return (
    <>
      <Hero />
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="text-primary underline hover:text-accent">
            View detailed pricing →
          </Link>
        </div>
      </section>
    </>
  );
}
