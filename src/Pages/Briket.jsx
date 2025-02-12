import React from "react";
import { Helmet } from "react-helmet-async";

const Briket = () => {
  return (
    <>
      <Helmet>
      <title>Beton Briket | Dayanıklı ve Estetik Beton Yapı Malzemeleri - Çiçek Taş Beton</title>
        <meta
          name="description"
          content="Briket, duvar, bina, sığınak gibi alanlarda kullanılan, estetik ve dayanıklı bir beton yapı malzemesidir. Çiçek Taş Beton olarak kaliteli briket taşları sunuyoruz."
        />
        <meta
          name="keywords"
          content="briket, şev taşı, toprak kayması engelleyici taş, peyzaj taşları, beton taş, yamaç duvarı, şev taşı fiyatları, çiçek taş beton,briket fiyatları,duvar briket"
        />
        <meta property="og:title" content="Briket - Çiçek Taş Beton" />
        <meta
          property="og:description"
          content="Briket, duvar, bina, sığınak gibi alanlarda kullanılan, estetik ve dayanıklı bir beton yapı malzemesidir. Çiçek Taş Beton olarak kaliteli briket taşları sunuyoruz."
        />
        <meta property="og:image" content="https://www.cicektasbeton.com/briket1.webp" />
        <meta property="og:url" content="https://www.cicektasbeton.com/briket" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cicektasbeton.com/briket" />
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Briket",
            image: "https://cicektasbeton.com/briket1.webp",
            description:
              "Dayanıklı ve Estetik Beton Yapı Malzemeleri",
            brand: {
              "@type": "Brand",
              name: "Çiçek Taş Beton",
            },
            offers: {
              "@type": "Offer",
              url: "https://cicektasbeton.com/briket",
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
                author: "Ahmet Yılmazdogan",
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
                author: "Ayşe Kara",
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
          Briket
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-8 leading-relaxed">
          Briket; duvar, bina, sığınak gibi alanlarda kullanılan briket taşı,
          sunduğu estetik görselliğin yanı sıra kolay kullanımı uygulayıcıların
          dikkatini çeken beton yapı malzemesidir. Briket fiyatları için
          firmamızla iletişime geçebilirsiniz.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="/briket1.webp"
            alt="Briket - Duvar ve bina inşasında kullanılan beton yapı malzemesi"
            className="w-full max-w-[350px] h-[430px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/briket3.webp"
            alt="Briket - Peyzaj ve bahçe düzenlemelerinde kullanılan taş"
            className="w-full max-w-[350px] h-[430px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/briket4.webp"
            alt="Briket - Dayanıklı ve estetik beton yapı malzemesi"
            className="w-full max-w-[350px] h-[430px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[40px]">
          Önemli Bilgiler
        </h2>
        <ul className="list-disc pl-[40px] text-gray-700 mb-10 leading-loose">
          <li>Genellikle bahçe duvarı, bina, sığınak, kulübe gibi mekanların inşasında kullanılır.</li>
          <li>Ürünümüz pres beton baskı ile üretilmektedir.</li>
          <li>15cm yüksekliğinde, 15cm kalınlığında ve 33cm genişliğindedir. (15x15x33)</li>
          <li>Metrekareye 20 adet briket taşı kullanılır.</li>
          <li>Bir palette 150 adet beton briket bulunmaktadır.</li>
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
                  15
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  15
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  33
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  20
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  23
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  150
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Diğer Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/briket5.webp"
            alt="Briket - Bahçe duvarı ve peyzaj düzenlemelerinde kullanılan taş"
            className="w-full max-w-[350px] h-[430px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Briket;