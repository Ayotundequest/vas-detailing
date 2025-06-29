import ServiceCard from '../components/ServiceCard.jsx';

export default function Services() {
  const tiers = [
    { title: 'Full Interior & Exterior Detail – Sedan', price: '$200', desc: 'Complete inside & out.' },
    { title: 'Full Interior & Exterior Detail – Large SUV', price: '$350', desc: 'Showroom shine for big rides.' },
    // ...other rows from PRD
    { title: 'Headlight Restoration', price: '$25 / headlight', desc: 'Crystal‑clear lenses.' }
  ];
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Service Menu & Pricing</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {tiers.map(t => <ServiceCard key={t.title} {...t} />)}
      </div>
    </section>
  );
}
