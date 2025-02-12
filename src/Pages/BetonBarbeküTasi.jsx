import React from "react";
import { Helmet } from "react-helmet-async";

const BetonBarbeküTasi = () => {
  return (
    <>
      <Helmet>
        <title> Barbekü Beton Taş Ocaklık Çeşitleri- Çiçek Taş Beton Elemanları</title>
        <meta
          name="description"
          content="Beton barbekü taşı, dayanıklı ve uzun ömürlü dış mekan barbekü çözümleri. Çeşitli boyutlar ve tasarımlarla bahçenize estetik katın. Farklı model seçenekleriyle pişirme keyfinizi artırın!"
        />
        <meta
          name="keywords"
          content="beton barbekü taşı, barbekü taşı, dış mekan barbekü, dayanıklı barbekü taşları, bahçe barbeküsü, beton taşları, ısıya dayanıklı barbekü, barbekü taşları fiyat, çiçek taş beton, Barbekü Beton Taş Ocaklık Çeşitleri,barbekü beton fiyatları.bahçe barbekü modelleri,beton barbekü"
        />
        <meta property="og:title" content="Beton Barbekü Taşı - Çiçek Taş Beton" />
        <meta
          property="og:description"
          content="Beton barbekü taşı, dayanıklı ve uzun ömürlü dış mekan barbekü çözümleri. Çeşitli boyutlar ve tasarımlarla bahçenize estetik katın."
        />
        <meta property="og:image" content="https://www.cicektasbeton.com/beton-barbekü-tası3.webp" />
        <meta property="og:url" content="https://www.cicektasbeton.com/beton-barbeku-tasi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cicektasbeton.com/beton-barbeku-tasi" />
         {/* Schema Markup */}
         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Beton Barbekü Taşı",
            image: "https://cicektasbeton.com/beton-barbekü-tası3.webp",
           description: "Beton barbekü taşı, dayanıklı ve uzun ömürlü dış mekan barbekü çözümleri. Çeşitli boyutlar ve tasarımlarla bahçenize estetik katın.",
            brand: {
              "@type": "Brand",
              name: "Çiçek Taş Beton",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.cicektasbeton.com/beton-barbeku-tasi",
              priceCurrency: "TRY",
              price: 100.0,
              availability: "https://schema.org/InStock",
              priceValidUntil: "2024-12-31",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.5", // Ürünün ortalama puanı (1 ile 5 arasında)
              reviewCount: "120", // Toplam inceleme sayısı
            },
            review: [
              {
                "@type": "Review",
                author: "Ahmet Yılmaz",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                reviewBody:
                  "Harika bir ürün, kalitesi ve dayanıklılığı çok iyi. Tavsiye ederim!",
                datePublished: "2023-10-01",
              },
              {
                "@type": "Review",
                author: "Ayşe Kaya",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "4",
                },
                reviewBody: "Ürün güzel, ancak teslimat biraz gecikti.",
                datePublished: "2023-09-25",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
          Barbekü Beton Taş Ocaklık Çeşitleri
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-8 leading-relaxed">
          Hazır beton barbekü taşı, katkılı çimento ve demir donatılarla üretilmiş, uzun ömürlü ve ısıya dayanıklı dış mekan kullanımına uygun bir üründür. Beton barbekü taşı, ateşe dayanıklı özel tuğlalar sayesinde pişirme süresini azaltarak daha lezzetli yemekler hazırlamanıza olanak tanır.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="/beton-barbekü-tası3.webp"
            alt="Beton Barbekü Taşı - Dış mekan barbekü taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/beton-barbekü-tası4.webp"
            alt="Beton Barbekü Taşı - Estetik dış mekan tasarımı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/beton-barbekü-tası5.webp"
            alt="Beton Barbekü Taşı - Dayanıklı barbekü taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[40px]">
          Önemli Bilgiler
        </h2>
        <ul className="list-disc pl-[40px] text-gray-700 mb-10 leading-loose">
          <li>Beton barbekü taşı dış etkenlere karşı oldukça dayanıklıdır ve uzun yıllar kullanılabilir.</li>
          <li>Farklı tasarımlar ve renk seçenekleri ile her türlü bahçe dekorasyonuna uyum sağlar.</li>
          <li>Yüksek sıcaklıklara dayanıklı olup, uzun süreli pişirme işlemleri için idealdir.</li>
          <li>İsteğe göre özel boyutlarda ve şekillerde üretilebilir.</li>
          <li>Bakımı kolaydır ve dış mekan koşullarına uygun olarak tasarlanmıştır.</li>
        </ul>

        {/* Ölçü ve Boyut Bilgileri */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Ölçü ve Boyut Bilgileri
        </h3>

        {/* Tablo */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-6 md:mx-[100px] lg:mx-[95px]">
          <table className="min-w-full text-sm md:text-base table-auto text-gray-700 break-words border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left border border-gray-300">
                  Yükseklik (cm)
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left border border-gray-300">
                  Genişlik (cm)
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left border border-gray-300">
                  Uzunluk (cm)
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left border border-gray-300">
                  M² (Adet)
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left border border-gray-300">
                  Adet (kg)
                </th>
                <th className="px-4 py-2 md:px-6 md:py-4 text-left border border-gray-300">
                  Palet (Adet)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  198
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  115-90-180
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300"></td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300"></td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300"></td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Diğer Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/beton-barbekü-tası6.webp"
            alt="Beton Barbekü Taşı - Estetik ve dayanıklı barbekü taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/beton-barbekü-tası9.webp"
            alt="Beton Barbekü Taşı - Dış mekan barbekü taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/beton-barbekü-tası8.webp"
            alt="Beton Barbekü Taşı - Farklı tasarımlarda barbekü taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/beton-barbekü-tası2.webp"
            alt="Beton Barbekü Taşı - Bahçe dekorasyonuna uygun barbekü taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/beton-barbekü-tası7.webp"
            alt="Beton Barbekü Taşı - Bahçe için ideal barbekü taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/beton-barbekü-tası1.webp"
            alt="Beton Barbekü Taşı - Estetik barbekü taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default BetonBarbeküTasi;