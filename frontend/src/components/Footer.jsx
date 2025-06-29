export default function Footer() {
  return (
    <footer className="bg-primary text-secondary text-center p-6">
      <p>© {new Date().getFullYear()} VAS Detailing · Strongsville, OH</p>
      <div className="flex justify-center gap-4 mt-2" aria-label="Social media">
        <a href="https://www.instagram.com/vas_detailingllc" className="hover:text-accent" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/@vas_detailing" className="hover:text-accent" target="_blank" rel="noreferrer">TikTok</a>
        <a href="https://www.facebook.com/share/15bAz3n1Ar/" className="hover:text-accent" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </footer>
  );
}
