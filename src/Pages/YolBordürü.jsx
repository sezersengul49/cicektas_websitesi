import React from "react";
import { Helmet } from "react-helmet-async";

const YolBordürü = () => {
  return (
    <>
      <Helmet>
        <title>30x70 Yol Bordürü- Çicek Taş Üst Yapı elemanları</title>
        <meta
          name="description"
          content="Çicek beton elemanları olarak kaldırım taşı, barbekü taşı, kilitli taş ve oluk taşı modellerimizle kaliteli ve dayanıklı çözümler sunuyoruz. Şimdi keşfedin!"
        />
      </Helmet>
      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
          30X70 YOL BORDÜRÜ
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-14 leading-relaxed">
          Karayolu Bordürü; cadde ve sokaklarda dayanımı yüksek yapısı ve
          kalitesiyle belli bir yükselti ile bölerek yolları ayırır. Her türlü
          bahçe, site, park, yol, kaldırım , otopark gibi alanlarda
          uygulanabilir. Yol Bordürü fiyat bilgisi için iletişime geçiniz.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="images/BAHCE BORDURU/yol-bordürü.webp"
            alt="30x70 yol Bordürü"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/BAHCE BORDURU/bahce-borduru3.webp"
            alt="30x70 yol Bordürü"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/BAHCE BORDURU/bahce-borduru2.webp"
            alt="30x70 yol Bordürü"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[110px]">
          Önemli Bilgiler
        </h2>
        <ul className="list-disc pl-[100px] text-gray-700 mb-10 leading-loose">
          <li>
          Belediye bordürü olarak da bilinmektedir.
          </li>
          <li>
          Üst genişliği 12 cm alt genişliği 15 cm yüksekliği 30 cm ve uzunluğu 70 cm’dir. 12X15X30X70
          </li>
          <li>Belediyenin ana yollarda yaya kaldırımları için kullandığı beton ürünüdür.</li>
          <li>Bir palette 24 adet yol bordür taşı bulunmaktadır.</li>
          <li>Yol bordürü ağırlığı 70 kg’dır.</li>
          <li>Gri ve kırmızı gibi farklı renk seçenekleri mevcuttur.</li>
          <li>Filmli ve düz yüzey olarak da üretilmektedir.</li>
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
            src="images/BAHCE BORDURU/bahce-borduru1.webp"
            alt="30x70 yol Bordürü"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/BAHCE BORDURU/20x70.webp"
            alt="30x70 yol Bordürü"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
        
        </div>
      </div>
    </>
  );
};

export default YolBordürü;
