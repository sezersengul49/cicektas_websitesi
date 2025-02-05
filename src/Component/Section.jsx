import React, { useState, useEffect } from "react";

const Section = () => {
  const images = [
    "/bordur1.webp",
    "/kilittasi1.webp",
    "/sev-tas.webp",
    "/flora-tas.webp",
   "/kareparke-tas.webp",
    "/kilitli-tas.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fotoğraf geçişi için zamanlayıcı
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
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
    <section className="relative py-1 flex justify-center items-center">
      {/* Sol Ok */}
      <button
        onClick={handlePrev}
        className="absolute left-0 z-10 bg-black bg-opacity-50 text-white p-2 px-4 rounded-full hover:bg-opacity-75 transition duration-300"
        style={{ top: "50%", transform: "translateY(-50%)" ,fontSize:"24px" }}
      >
        &#10094; {/* Sol ok işareti */}
      </button>

      {/* Fotoğraf */}
      <div className="w-full h-[550px] overflow-hidden flex justify-center items-center">
        <img
          className="w-full h-full object-cover object-center rounded-lg shadow-lg"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      {/* Sağ Ok */}
      <button
        onClick={handleNext}
        className="absolute right-0 z-10 bg-black bg-opacity-50 text-white p-2 px-4 rounded-full hover:bg-opacity-75 transition duration-300"
        style={{ top: "50%", transform: "translateY(-50%)",fontSize:"24px" }}
      >
        &#10095; {/* Sağ ok işareti */}
      </button>
    </section>
  );
};

export default Section;