/**
 * Simple horizontal timeline for About page.
 */
export default function Timeline() {
  const milestones = [
    { year: 2020, text: 'Founded in Strongsville, OH' },
    { year: 2022, text: '500+ vehicles detailed' },
    { year: 2024, text: 'Expanded 30‑mile service radius' }
  ];
  return (
    <ol className="flex flex-col md:flex-row md:gap-8">
      {milestones.map(m => (
        <li key={m.year} className="relative pb-8 md:pb-0 md:flex-1">
          <div className="font-bold text-primary">{m.year}</div>
          <p className="text-sm">{m.text}</p>
        </li>
      ))}
    </ol>
  );
}
