/**
 * Responsive image grid.
 * Images can be fetched from a CMS / local assets.
 */
export default function GalleryGrid({ images = [] }) {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4" role="list">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Detail job ${i + 1}`}
          className="rounded-lg object-cover aspect-square"
          role="listitem"
        />
      ))}
    </div>
  );
}
