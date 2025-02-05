import React from "react";
import { Helmet } from "react-helmet-async";

const BahceBordürü = () => {
  return (
    <>
     <Helmet>
        <title>20x50 Bahçe Bordürü - Çiçek Taş Beton Elemanları</title>
        <meta
          name="description"
          content="Bahçe bordürü, beton çimen taşı ve bordür taşı modellerimizle bahçenizi güzelleştirin. Kırmızı, gri ve mozaikli seçeneklerle dayanıklı çözümler."
        />
        <meta
          name="keywords"
          content="bahçe bordürü, beton bordür, çimen bordürü, 20x50 bahce bordürü, bahçe taşları, bahçe düzenleme, bordür taşı, beton taş, dış mekan taşları, bahçe peyzaj, çiçek taş beton"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="20x50 Bahçe Bordürü - Çiçek Taş Beton" />
        <meta property="og:description" content="Bahçe bordürü, beton çimen taşı ve bordür taşı modellerimizle bahçenizi güzelleştirin. Kırmızı, gri ve mozaikli seçeneklerle dayanıklı çözümler." />
        <meta property="og:image" content="https://cicektasbeton.com/bahce-borduru7.webp" />
        <meta property="og:url" content="https://cicektasbeton.com/bahce-borduru" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "20x50 Bahçe Bordürü",
            "image": "https://cicektasbeton.com/bahce-borduru7.webp",
            "description": "Beton bahçe bordürü, kırmızı, gri ve mozaikli seçenekleriyle bahçenizi güzelleştirin.",
            "brand": {
              "@type": "Brand",
              "name": "Çiçek Taş Beton"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://cicektasbeton.com/bahce-borduru",
              "priceCurrency": "TRY",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          20X50 BAHÇE BORDÜRÜ
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-14 leading-relaxed">
          Bahçe Bordürü, genellikle bahçelerde ve dış mekanlarda kullanılan dayanıklı beton yapıdır. Kırmızı, gri ve mozaikli seçenekleriyle estetik görünüme sahip olan bu ürün, kaldırım taşları ve yollar için mükemmel bir seçenektir. Çimen sınırlarını belirlemek ve topraklı alanları yola ayırmak için ideal bir çözümdür.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="/bahce-borduru7.webp"
            alt="20x50 Bahçe Bordürü Kırmızı ve Gri Seçenekleriyle-Çiçek Taş Beton"
            loading="lazy"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="/bahce-borduru3.webp"
            alt="Çimen sınır bordürü 20x50 beton taş-Çiçek Taş Beton"
            loading="lazy"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="/30x70yol4.webp"
            alt="Mozaikli bahçe bordürü örneği-Çiçek Taş Beton"
            loading="lazy"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[110px]">
          Önemli Bilgiler
        </h2>
        <ul className="list-disc pl-[100px] text-gray-700 mb-10 leading-loose">
          <li>Bahçe bordürü genellikle belediye parkları, özel mülkler ve peyzaj alanlarında kullanılır.</li>
          <li>Üst genişliği 9 cm, alt genişliği 12 cm, yüksekliği 20 cm ve uzunluğu 50 cm olan modeller mevcuttur.</li>
          <li>Farklı renk seçenekleriyle, özellikle gri ve kırmızı, kullanıcılara estetik çözümler sunar.</li>
          <li>Bir palette 70 adet bahçe bordürü taşı bulunmaktadır ve her biri 25 kg ağırlığındadır.</li>
          <li>Filmli ve düz yüzey seçenekleri ile estetik ve dayanıklı alternatifler sunulmaktadır.</li>
        </ul>

        {/* Ölçü ve Boyut Bilgileri */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        20x50 Bahçe Bordürü Ölçü ve Boyut Bilgileri
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
            src="/bahce-borduru1.webp"
            alt="Beton bahçe bordürü detaylı görünümü-Çiçek Taş Beton"
            loading="lazy"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="/20x50.webp"
            alt="Çimen sınırlama bordürü 20x50-Çiçek Taş Beton"
            loading="lazy"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
           <img
            src="/30x70yol5.webp"
            alt="Mozaikli bahçe bordürü örneği-Çiçek Taş Beton"
            loading="lazy"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default BahceBordürü;
