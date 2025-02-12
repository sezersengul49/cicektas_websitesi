import React from "react";
import { Helmet } from "react-helmet-async";

const SevTasi = () => {
  return (
    <>
      <Helmet>
        <title>Şev Taşı - Toprak Kaymasını Önleyen Çözümler | Çiçek Taş Beton</title>
        <meta
          name="description"
          content="Şev Taşı, toprak kaymasını önler, bahçe düzenlemeleri ve yamaçlarda kullanılır. Çiçek Taş Beton kaliteli ve dayanıklı çözümler sunuyor. Hemen keşfedin!"
        />
        <meta
          name="keywords"
          content="şev taşı,duvar taşı,istinat duvar örme taşı, toprak kayması engelleyici taş, peyzaj taşları, beton taş, yamaç duvarı, şev taşı fiyatları, çiçek taş beton"
        />
        <meta property="og:title" content="Şev Taşı - Toprak Kaymasını Önleyen Çözümler | Çiçek Taş Beton" />
        <meta
          property="og:description"
          content="Şev Taşı, toprak kaymasını önler, bahçe düzenlemeleri ve yamaçlarda kullanılır. Çiçek Taş Beton kaliteli ve dayanıklı çözümler sunuyor. Hemen keşfedin!"
        />
        
        <meta property="og:image" content="https://www.cicektasbeton.com/sevtasi.webp" />
        <meta property="og:url" content="https://www.cicektasbeton.com/sev-tasi" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cicektasbeton.com/sev-tasi" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Şev Taşı - Toprak Kaymasını Önleyen Çözümler | Çiçek Taş Beton" />
        <meta
          name="twitter:description"
          content="Şev Taşı, toprak kaymasını önler, bahçe düzenlemeleri ve yamaçlarda kullanılır. Çiçek Taş Beton kaliteli ve dayanıklı çözümler sunuyor. Hemen keşfedin!"
        />
        <meta name="twitter:image" content="https://www.cicektasbeton.com/sevtasi.webp" />

         {/* Schema Markup */}
         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Şev Taşı",
            image: "https://cicektasbeton.com/sevtasi.webp",
            description:
              "Şev Taşı - Toprak Kaymasını Önleyen Çözümler.",
            brand: {
              "@type": "Brand",
              name: "Çiçek Taş Beton",
            },
            offers: {
              "@type": "Offer",
              url: "https://cicektasbeton.com/sev-tasi",
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
                author: "Ahmet Aksu",
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
                author: "Ayşe Kayarca",
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
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Şev Taşı - Toprak Kaymasını Önleyen Çözümler
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-8 leading-relaxed">
          Şev Taşı, otoyol veya bahçe gibi mekanlarda toprak kaymasını
          engellemek ve dik eğimli yamaçlarda oluşabilecek sel felaketlerini
          önlemede kullanılan beton ürünüdür. Toprak tutuculuğunun yanı sıra
          bahçe ve peyzaj çalışmalarında istinat duvarı amaçlı da kullanılabilir.
          Birbirine kitleme yapılarak uygulanan şev taşı, yüksek yamaçlardaki
          eğimlerde perde görevi sağlar. Şev Taşı fiyatları için firmamızla
          iletişime geçiniz.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="/sev-tası1.webp"
            alt="Şev Taşı - Toprak Kaymasını Önleyen Çözüm"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/sev-tası7.webp"
            alt="Şev Taşı - Peyzaj ve Bahçe Düzenlemeleri"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/sevtasi.webp"
            alt="Şev Taşı - Yamaçlarda Kullanım"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[40px]">
          Önemli Bilgiler
        </h2>
        <ul className="list-disc pl-[40px] text-gray-700 mb-10 leading-loose">
          <li>Şev Taşı toprak kaymasını önler.</li>
          <li>Metrekareye 22 adet şev taşı kullanılır.</li>
          <li>Şev Taşı ağırlığı 23 kg’dır.</li>
          <li>Bir palette 72 adet Şev Taşı bulunmaktadır.</li>
          <li>Gri ve kırmızı gibi çeşitli renklerde üretimi mevcuttur.</li>
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
            src="/sev-tası4.webp"
            alt="Şev Taşı - Estetik ve Dayanıklı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/sev-tası2.webp"
            alt="Şev Taşı - Yamaçlarda Kullanım Örneği"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/sev-tası5.webp"
            alt="Şev Taşı - Peyzaj Çözümleri"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default SevTasi;