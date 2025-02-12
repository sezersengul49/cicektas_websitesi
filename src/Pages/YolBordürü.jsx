import React from "react";
import { Helmet } from "react-helmet-async";

const YolBordürü = () => {
  return (
    <>
      <Helmet>
        <title>30x70 Yol Bordürü - Dayanıklı ve Estetik Çözümler | Çiçek Taş Beton</title>
        <meta
          name="description"
          content="30x70 Yol Bordürü, cadde ve sokaklarda dayanımı yüksek yapısı ve kalitesiyle belli bir yükselti ile bölerek yolları ayırır. Çiçek Taş Beton kaliteli ve dayanıklı çözümler sunuyor. Hemen keşfedin!"
        />
        <meta
          name="keywords"
          content="yol bordürü, 30x70 yol bordürü, beton yol bordürü, belediye bordürü, yol taşları, kaldırım taşı, taş, beton elemanları, çiçek taş beton,yol bordürü fiyatları"
        />
        <meta property="og:title" content="30x70 Yol Bordürü - Dayanıklı ve Estetik Çözümler | Çiçek Taş Beton" />
        <meta
          property="og:description"
          content="30x70 Yol Bordürü, cadde ve sokaklarda dayanımı yüksek yapısı ve kalitesiyle belli bir yükselti ile bölerek yolları ayırır. Çiçek Taş Beton kaliteli ve dayanıklı çözümler sunuyor. Hemen keşfedin!"
        />
         <meta name="robots" content="index, follow" />
        <meta property="og:image" content="https://www.cicektasbeton.com/yol-bordürü.webp" />
        <meta property="og:url" content="https://www.cicektasbeton.com/yol-borduru" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cicektasbeton.com/yol-borduru" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="30x70 Yol Bordürü - Dayanıklı ve Estetik Çözümler | Çiçek Taş Beton" />
        <meta
          name="twitter:description"
          content="30x70 Yol Bordürü, cadde ve sokaklarda dayanımı yüksek yapısı ve kalitesiyle belli bir yükselti ile bölerek yolları ayırır. Çiçek Taş Beton kaliteli ve dayanıklı çözümler sunuyor. Hemen keşfedin!"
        />
        <meta name="twitter:image" content="https://www.cicektasbeton.com/yol-bordürü.webp" />

         {/* Schema Markup */}
         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "30x70 yol bordürü",
            image: "https://cicektasbeton.com/yol-bordürü.webp",
           description: "30x70 Yol Bordürü, cadde ve sokaklarda dayanımı yüksek yapısı ve kalitesiyle belli bir yükselti ile bölerek yolları ayırır.",
            brand: {
              "@type": "Brand",
              name: "Çiçek Taş Beton",
            },
            offers: {
              "@type": "Offer",
              url: "https://cicektasbeton.com/yol-borduru",
              priceCurrency: "TRY",
              price: 145.0,
              availability: "https://schema.org/InStock",
              priceValidUntil: "2025-12-31",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7", // Ürünün ortalama puanı (1 ile 5 arasında)
              reviewCount: "140", // Toplam inceleme sayısı
            },
            review: [
              {
                "@type": "Review",
                author: "Ahmet Yilmazar",
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
                author: "Ayşe Kaynarca",
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
          30x70 Yol Bordürü - Dayanıklı ve Estetik Çözümler
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-8 leading-relaxed">
          Karayolu Bordürü; cadde ve sokaklarda dayanımı yüksek yapısı ve
          kalitesiyle belli bir yükselti ile bölerek yolları ayırır. Her türlü
          bahçe, site, park, yol, kaldırım, otopark gibi alanlarda
          uygulanabilir. Yol Bordürü fiyat bilgisi için iletişime geçiniz.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="/yol-bordürü.webp"
            alt="30x70 Yol Bordürü - Dayanıklı ve Estetik"
            className="w-full max-w-[450px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/30x70yol1.webp"
            alt="30x70 Yol Bordürü - Cadde ve Sokaklarda Kullanım"
            className="w-full max-w-[450px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/30x70-yol3.webp"
            alt="30x70 Yol Bordürü - Park ve Bahçe Düzenlemeleri"
            className="w-full max-w-[450px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/30x70yolbordur.webp"
            alt="30x70 Yol Bordürü - Otopark ve Yaya Yolları"
            className="w-full h-full object-contain rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[50px]">
          Önemli Bilgiler
        </h2>
        <ul className="list-disc pl-[50px] text-gray-700 mb-10 leading-loose">
          <li>Belediye bordürü olarak da bilinmektedir.</li>
          <li>
            Üst genişliği 12 cm alt genişliği 15 cm yüksekliği 30 cm ve uzunluğu
            70 cm’dir. 12X15X30X70
          </li>
          <li>
            Belediyenin ana yollarda yaya kaldırımları için kullandığı beton
            ürünüdür.
          </li>
          <li>Bir palette 24 adet yol bordür taşı bulunmaktadır.</li>
          <li>Yol bordürü ağırlığı 70 kg’dır.</li>
          <li>Gri ve kırmızı gibi farklı renk seçenekleri mevcuttur.</li>
          <li>Filmli ve düz yüzey olarak da üretilmektedir.</li>
        </ul>

        {/* Ölçü ve Boyut Bilgileri */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Ölçü ve Boyut Bilgileri
        </h2>

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
                  20
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  26
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  36
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  22
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  23
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  72
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Diğer Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/30x70-yol2.webp"
            alt="30x70 Yol Bordürü - Yaya Yolları ve Kaldırımlar"
            className="w-full h-full object-contain rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
       
        </div>
      </div>
    </>
  );
};

export default YolBordürü;