import React from 'react';
import { Helmet } from 'react-helmet-async';

const OlukTasi3 = () => {
  return (
    <>
      <Helmet>
        <title> Oluk Taşı 25x25 - Dayanıklı ve Estetik Drenaj Çözümleri | Çiçek Taş Beton</title>
        <meta
          name="description"
          content="25x25 Oluk Taşı, Çiçek Taş Beton'un kaliteli ve dayanıklı beton taşları ile drenaj çözümleri sunar. Bahçe, yol ve kaldırım düzenlemeleri için ideal bir seçenek. Hemen keşfedin!"
        />
        <meta
          name="keywords"
          content="25x25 oluk taşı, oluk taşı, drenaj taşı, kaldırım taşı, bahçe taşı, Çiçek Taş, beton elemanları, çiçek taş beton"
        />
        <meta property="og:title" content="25x25 Oluk Taşı - Dayanıklı ve Estetik Drenaj Çözümleri | Çiçek Taş Beton" />
        <meta
          property="og:description"
          content="25x25 Oluk Taşı, Çiçek Taş Beton'un kaliteli ve dayanıklı beton taşları ile drenaj çözümleri sunar. Bahçe, yol ve kaldırım düzenlemeleri için ideal bir seçenek. Hemen keşfedin!"
        />
        <meta property="og:image" content="https://www.cicektasbeton.com/oluk-tası6.webp" />
        <meta property="og:url" content="https://www.cicektasbeton.com/oluk-tasi-25x25" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cicektasbeton.com/oluk-tasi-25x25" />
      </Helmet>

      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
           Oluk Taşı 25x25
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-14 leading-relaxed">
          Oluk Taşı; bahçe, yol, kaldırım gibi peyzaj düzenlemesi yapılan
          alanlarda, yağan yağmur sularının birikmesi, tahliyesi, suyun
          yönlendirilmesi ve drenaj sağlaması için ideal bir çözümdür. 25X25
          oluk taşı fiyatları için firmamızla iletişime geçiniz.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="/oluk-tası6.webp"
            alt="25x25 Oluk Taşı - Dayanıklı ve estetik drenaj çözümü"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/oluk-tası4.webp"
            alt="25x25 Oluk Taşı - Pratik ve hızlı uygulanabilir"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[110px]">
          Önemli Bilgiler
        </h2>
        <ul className="list-disc pl-[100px] text-gray-700 mb-10 leading-loose">
          <li>
            Yağmur oluk taşı tahliye etme özelliği sayesinde su taşkınlarını
            önler.
          </li>
          <li>Metreye 4 adet 25X25 yağmur oluğu kullanılır.</li>
          <li>Bir palette 180 adet 25X25 yağmur oluğu bulunmaktadır.</li>
          <li>Gri ve kırmızı gibi çeşitli renklerde üretimi mevcuttur.</li>
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
            src="/oluk-tası2.webp"
            alt="25x25 Oluk Taşı - Çeşitli renk ve desen seçenekleri"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/oluk-tası4.webp"
            alt="25x25 Oluk Taşı - Estetik ve dayanıklı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default OlukTasi3;