import { useEffect } from 'react';

/**
 * Very light toast that auto‑dismisses.
 */
export default function Toast({ show, message, onClose }) {
  useEffect(() => {
    if (!show) return;
    const id = setTimeout(onClose, 4000);
    return () => clearTimeout(id);
  }, [show]);
  if (!show) return null;
  return (
    <div
      className="fixed bottom-4 right-4 bg-accent text-white px-4 py-2 rounded shadow-lg"
      role="status"
    >
      {message}
    </div>
  );
}
