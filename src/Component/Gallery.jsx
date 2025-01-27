import React from "react";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  // Galeri için görsellerin listesi
  const images = [
    { src: "images/ŞEV TAŞI/sev-tası3.webp", alt: "Şev Taşı" },
    { src: "images/OLUK TAŞI/oluk-tası6.webp", alt: "Oluk Taşı" },
    { src: "images/KİLİTLİ PARKE TAŞI/kilitli-parke-tası2.webp", alt: "Kilitli Parke Taşı" },
    { src: "images/KİLİTLİ PARKE TAŞI/kilitli-parke-tası7.webp", alt: "Kilitli Parke Taşı" },
    { src: "images/KARE PARKE TAŞI/40x40-kare2.webp", alt: "Kare Parke Taşı" },
    { src: "images/BETON BARBEKÜ TAŞI/beton-barbekü-tası3.webp", alt: "Beton Barbekü Taşı" },
    { src: "images/BAHCE BORDURU/bahce-borduru4.webp", alt: "Bahçe Bordürü" },
    { src: "images/BAHCE BORDURU/yol-bordürü.webp", alt: "Yol Bordürü" },
    { src: "images/KİLİTLİ PARKE TAŞI/kilitli-parke-tası3.webp", alt: "Kilitli Parke Taşı" },
    { src: "images/BETON BARBEKÜ TAŞI/beton-barbekü-tası3.webp", alt: "Beton Barbekü Taşı" },
    { src: "images/ŞEV TAŞI/sev-tası2.webp", alt: "Şev Taşı" },
    { src: "images/OLUK TAŞI/oluk-tası6.webp", alt: "Oluk Taşı" },
    { src: "images/KİLİTLİ PARKE TAŞI/kilitli-parke-tası4.webp", alt: "Kilitli Parke Taşı" },
    { src: "images/KARE PARKE TAŞI/30x30-kare3.webp", alt: "Kare Parke Taşı" },
    { src: "images/BETON BARBEKÜ TAŞI/beton-barbekü-tası9.webp", alt: "Beton Barbekü Taşı" },
    { src: "images/BAHCE BORDURU/bahce-borduru3.webp", alt: "Bahçe Bordürü" },
    { src: "images/BAHCE BORDURU/yol-bordürü.webp", alt: "Yol Bordürü" },
    { src: "images/KİLİTLİ PARKE TAŞI/kilitli-parke-tası1.webp", alt: "Kilitli Parke Taşı" },
    { src: "images/BETON BARBEKÜ TAŞI/beton-barbekü-tası6.webp", alt: "Beton Barbekü Taşı" },
  ];

  return (
    <>
      <Helmet>
        <title>Galeri - Çiçek Taş Üst Yapı Elemanları</title>
        <meta
          name="description"
          content="Çiçek Taş Üst Yapı Elemanları'nın taş ürünlerinden oluşan galerisini inceleyin. Farklı model ve çeşitlerdeki ürünlerimizi keşfedin."
        />
        <meta
          name="keywords"
          content="Çiçek Taş, galeri, taş ürünler, beton taşlar, dekoratif taşlar"
        />
      </Helmet>
      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">
          Ürün Galerimiz
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed px-4 md:px-12 text-center">
          Çiçek Taş Üst Yapı Elemanları olarak en kaliteli ürünleri sunuyoruz.
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
                className="w-full h-[280px] object-cover"
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
