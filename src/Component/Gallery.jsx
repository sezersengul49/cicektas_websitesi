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
        {/* Sayfa Başlığı */}
        <title>Galeri - Çiçek Taş Beton | Şev Taşı, Kilitli Parke Taşı, Barbekü Taşı</title>
        
        {/* Meta Açıklaması */}
        <meta
          name="description"
          content="Çiçek Taş Beton'un taş ürünlerinden oluşan galerimizi keşfedin. Şev taşı, kilitli parke taşı, barbekü taşı ve daha fazlasını inceleyin."
        />
        
        {/* Anahtar Kelimeler */}
        <meta
          name="keywords"
          content="Çiçek Taş, galeri, taş ürünler, beton taşlar, dekoratif taşlar, şev taşı, flora şev taşı, beton barbekü, briket, oluk taşı, kilitli parke taşı"
        />
        
        {/* Open Graph (Facebook için) */}
        <meta property="og:title" content="Galeri - Çiçek Taş Beton | Şev Taşı ve Beton Elemanları" />
        <meta
          property="og:description"
          content="Çiçek Taş Beton'un galerisi: Şev taşı, kilitli parke taşı, oluk taşı ve barbekü taşı modellerimizi keşfedin."
        />
        <meta property="og:image" content="https://www.cicektasbeton.com/beton-barbekü-tası9.webp" />
        <meta property="og:url" content="https://www.cicektasbeton.com/galeri" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card (Twitter için) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galeri - Çiçek Taş Beton | Şev Taşı ve Beton Elemanları" />
        <meta
          name="twitter:description"
          content="Çiçek Taş Beton'un galerisi: Şev taşı, kilitli parke taşı, oluk taşı ve barbekü taşı modellerimizi keşfedin."
        />
        <meta name="twitter:image" content="https://www.cicektasbeton.com/kilitli-parke-tası2.webp" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.cicektasbeton.com/galeri" />

        {/* SEO Robot Ayarları */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">
          Ürün Galerimiz
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed px-4 md:px-12 text-center">
          Çiçek Taş Beton Elemanları olarak en kaliteli ürünleri sunuyoruz.
          Galerimizi keşfederek farklı model ve çeşitlerdeki taş ürünlerimizi inceleyebilirsiniz.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img src={image.src} alt={image.alt} className="w-full h-40 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;