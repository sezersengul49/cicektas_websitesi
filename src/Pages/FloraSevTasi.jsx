import React from "react";
import { Helmet } from "react-helmet-async";

const FloraSevTasi = () => {
  return (
    <>
      <Helmet>
        <title>Flora Şev Taşı - Terra Blok | Çiçek Taş Beton Elemanları ,Şev Taşı</title>
        <meta
          name="description"
          content="Flora Şev Taşı (Terra Blok) ile kaliteli ve dayanıklı kaldırım taşı, barbekü taşı, kilitli taş ve oluk taşı çözümleri. Doğaya uyumlu beton elemanları ile peyzaj tasarımınızı zenginleştirin."
        />
        <meta
          name="keywords"
          content="flora şev taşı, terra blok, çiçek taş beton elemanları, kaldırım taşı, barbekü taşı, kilitli taş, oluk taşı, beton blok, peyzaj tasarımı, çiçek taş beton,flora şev taşı fiyatları"
        />
        <meta property="og:title" content="Flora Şev Taşı - Terra Blok | Çiçek Taş Beton" />
        <meta
          property="og:description"
          content="Flora Şev Taşı (Terra Blok) ile kaliteli ve dayanıklı kaldırım taşı, barbekü taşı, kilitli taş ve oluk taşı çözümleri. Doğaya uyumlu beton elemanları ile peyzaj tasarımınızı zenginleştirin."
        />
        <meta property="og:image" content="https://www.cicektasbeton.com/flora-sev-tası8.webp" />
        <meta property="og:url" content="https://www.cicektasbeton.com/flora-sev-tasi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cicektasbeton.com/flora-sev-tasi" />
      </Helmet>

      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Flora Şev Taşı - Terra Blok
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-8 leading-relaxed">
          Flora Şev Taşı (Terra Blok), yüksek dayanıklılığı ve mühendislik
          güvenliğiyle peyzaj tasarımlarınıza değer katıyor. Hatasız kitleme
          sistemi ile hızlı ve ekonomik çözüm sunuyor. Doğaya uyumlu farklı renk
          seçenekleriyle estetik ve fonksiyonel duvarlar oluşturun.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="/flora-sev-tası8.webp"
            alt="Flora Şev Taşı örneği, yuvarlak tasarım"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/flora-sev-tası2.webp"
            alt="Flora Şev Taşı, kırmızı ve yuvarlak"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/flora-sev-tası3.webp"
            alt="Flora Şev Taşı, farklı renk seçenekleri"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[40px]">
          Önemli Bilgiler
        </h2>
        <ul className="list-disc pl-[40px] text-gray-700 mb-10 leading-loose">
          <li>Terra blok taşı toprak kaymasını önler</li>
          <li>Metrekareye 15 adet terra blok kullanılır.</li>
          <li>Şev Taşı ağırlığı 23 kg’dır.</li>
          <li>Bir palette 60 adet flora şev taşı bulunmaktadır.</li>
          <li>Terra blok taşı ağırlığı 24 kg’dır.</li>
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
            src="/flora-sev-tası4.webp"
            alt="Flora Şev Taşı, farklı renk seçenekleri"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/flora-sev-tası5.webp"
            alt="Flora Şev Taşı, dayanıklı yapı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
          <img
            src="/flora-sev-tası1.webp"
            alt="Flora Şev Taşı, yuvarlak şekil"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default FloraSevTasi;