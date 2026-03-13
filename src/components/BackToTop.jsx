import { useState, useEffect } from "react";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
  }, []);

  return (
    showButton && (
      <a
        href="#home"
        className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg transition"
      >
        ⬆ Back to Home
      </a>
    )
  );
}

export default BackToTop;