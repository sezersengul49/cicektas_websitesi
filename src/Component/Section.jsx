import React, { useState, useEffect } from "react";

const Section = () => {
  const images = [
    "images/sev-tas.webp",
    "images/anakapak3.webp",
    "images/flora-tas.webp",
    "images/anakapak4.webp",
    "images/oluk-tas.webp",
    "images/kareparke-tas.webp",
    "images/kilitli-tas.webp",
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fotoğraf geçişi için zamanlayıcı
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    // Zamanlayıcıyı temizlemek için
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative py-1  flex justify-center items-center">
      {/* Fotoğraf */}
      <div className="w-full h-[550px] overflow-hidden flex justify-center items-center">
        <img
          className="w-full h-full object-cover object-center rounded-lg shadow-lg"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>
    </section>
  );
};

export default Section;
