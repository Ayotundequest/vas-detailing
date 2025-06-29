/**
 * Re‑usable card for service tiers.
 * @component
 * @prop {string} title
 * @prop {string} price
 * @prop {string} desc
 */
export default function ServiceCard({ title, price, desc }) {
  return (
    <article
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
      tabIndex="0"
    >
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-3xl font-extrabold text-accent mb-2">{price}</p>
      <p className="text-sm leading-relaxed">{desc}</p>
    </article>
  );
}
