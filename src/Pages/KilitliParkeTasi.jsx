import React from 'react';
import { Helmet } from 'react-helmet-async';

const KilitliParkeTasi = () => {
  return (
    <>
      <Helmet>
        <title>Kilitli Parke Taşı - Dayanıklı ve Estetik Zemin Çözümleri | Çiçek Taş Beton</title>
        <meta
          name="description"
          content="Kilitli Parke Taşı, Çiçek Taş Beton'un kaliteli ve dayanıklı beton taşları ile zemin döşemelerinizi güçlendirin. Kaldırım taşı, bahçe taşı ve daha fazlası için hemen keşfedin!"
        />
        <meta
          name="keywords"
          content="kilitli parke taşı, kaldırım taşı, beton parke taşı, kilitli taş, dış mekan taşı, dayanıklı parke, dekoratif parke taşı, şehir içi taş, çiçek taş beton"
        />
        <meta property="og:title" content="Kilitli Parke Taşı - Dayanıklı ve Estetik Zemin Çözümleri | Çiçek Taş Beton" />
        <meta
          property="og:description"
          content="Kilitli Parke Taşı, Çiçek Taş Beton'un kaliteli ve dayanıklı beton taşları ile zemin döşemelerinizi güçlendirin. Kaldırım taşı, bahçe taşı ve daha fazlası için hemen keşfedin!"
        />
        <meta property="og:image" content="https://www.cicektasbeton.com/kilitli-parke-tası2.webp" />
        <meta property="og:url" content="https://www.cicektasbeton.com/kilitli-parke-tasi" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cicektasbeton.com/kilitli-parke-tasi" />
      </Helmet>

      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Kilitli Parke Taşı
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-14 leading-relaxed">
          Genellikle kaldırım taşı olarak geçen kilitli parke taşları dekoratif yönü kuvvetli, uzun ömürlü kullanımı sunan ve doğru hizmet alınır ise uzun yıllar boyu sorun çıkartmayacak bir üründür.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="/kilitli-parke-tası2.webp"
            alt="Kilitli Parke Taşı - Dayanıklı ve estetik zemin döşemesi"
            className="w-full max-w-[350px] h-[380px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/kilitli-parke-tası3.webp"
            alt="Kilitli Parke Taşı - Pratik ve hızlı uygulanabilir"
            className="w-full max-w-[350px] h-[380px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/kilitli-parke-tası4.webp"
            alt="Kilitli Parke Taşı - Doğa dostu ve ekonomik"
            className="w-full max-w-[350px] h-[380px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[110px]">
          Kilitli Parke Taşı Nerelerde Kullanılabilir?
        </h2>
        <ul className="list-disc pl-[100px] text-gray-700 mb-10 leading-loose">
          <li>Şehir içi alanlar</li>
          <li>Park alanları</li>
          <li>Fabrika çevreleri</li>
          <li>Araç ve yaya trafiğinin bulunduğu alanlar</li>
          <li>Kaldırımlar</li>
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
                  11.5-16.5-20
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  6-8
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  35
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  3.5 mpa
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  23
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4 border border-gray-300">
                  515
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Diğer Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/kilitli-parke-tası1.webp"
            alt="Kilitli Parke Taşı - Çeşitli renk ve desen seçenekleri"
            className="w-full max-w-[350px] h-[380px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/kilitli-parke-tası5.webp"
            alt="Kilitli Parke Taşı - Estetik ve dayanıklı"
            className="w-full max-w-[350px] h-[380px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/kilitli-parke-tası6.webp"
            alt="Kilitli Parke Taşı - Doğa dostu ve ekonomik"
            className="w-full max-w-[350px] h-[380px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default KilitliParkeTasi;