import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  // Galeri için görsellerin listesi
  const images = [
    { src: "/sev-tası3.webp", alt: "Şev Taşı-Çiçek Taş Beton", loading: "lazy"},
    { src: "/oluk-tası6.webp", alt: "Oluk Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/kilitli-parke-tası2.webp", alt: "Kilitli Parke Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/kilitli-parke-tası7.webp", alt: "Kilitli Parke Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/40x40-kare2.webp", alt: "Kare Parke Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/beton-barbekü-tası3.webp", alt: "Beton Barbekü Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/bahce-borduru4.webp", alt: "Bahçe Bordürü-Çiçek Taş Beton", loading: "lazy" },
    { src: "/yol-bordürü.webp", alt: "Yol Bordürü-Çiçek Taş Beton", loading: "lazy" },
    { src: "/kilitli-parke-tası3.webp", alt: "Kilitli Parke Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/beton-barbekü-tası3.webp", alt: "Beton Barbekü Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/sev-tası2.webp", alt: "Şev Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/oluk-tası6.webp", alt: "Oluk Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/kilitli-parke-tası4.webp", alt: "Kilitli Parke Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/30x30-kare3.webp", alt: "Kare Parke Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/beton-barbekü-tası9.webp", alt: "Beton Barbekü Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/bahce-borduru3.webp", alt: "Bahçe Bordürü-Çiçek Taş Beton", loading: "lazy" },
    { src: "/yol-bordürü.webp", alt: "Yol Bordürü-Çiçek Taş Beton", loading: "lazy" },
    { src: "/kilitli-parke-tası1.webp", alt: "Kilitli Parke Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/beton-barbekü-tası6.webp", alt: "Beton Barbekü Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/briket1.webp", alt: "Beton Barbekü Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/briket3.webp", alt: "Beton Barbekü Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/30x70-yol.webp", alt: "Beton Barbekü Taşı-Çiçek Taş Beton", loading: "lazy" },
    { src: "/briket5.webp", alt: "Beton Barbekü Taşı-Çiçek Taş Beton", loading: "lazy" },


    
  ];

  return (
    <>
      <Helmet>
        <title>Galeri - Çiçek Taş Beton Elemanları ,Şev Taşı</title>
        <meta
          name="description"
          content="Çiçek Taş Beton'un taş ürünlerinden oluşan galerisini inceleyin. Farklı model ve çeşitlerdeki ürünlerimizi keşfedin."
        />
        <meta
          name="keywords"
          content="Çiçek Taş, galeri, taş ürünler, beton taşlar, dekoratif taşlar,çiçek taş beton,flora şev taşı,beton barbekü,briket, oluk taşı"
        />
      </Helmet>
      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">
          Ürün Galerimiz
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed px-4 md:px-12 text-center">
          Çiçek Taş Beton Elemanları olarak en kaliteli ürünleri sunuyoruz.
          Galerimizi keşfederek farklı model ve çeşitlerdeki taş ürünlerimizi
          inceleyebilirsiniz.
        </p>

        {/* Galeri */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
