import GalleryGrid from '../components/GalleryGrid.jsx';

export default function Gallery() {
  // Placeholder images; replace with real before/after shots
  const imgs = Array.from({ length: 8 }, (_, i) => `/images/gallery/${i+1}.jpg`);
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <GalleryGrid images={imgs} />
    </section>
  );
}
