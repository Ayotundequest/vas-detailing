import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-red-600 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-[1000] hover:bg-red-700 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" />
        </svg>
      </div>
    )
  );
};

export default ScrollToTopButton;
