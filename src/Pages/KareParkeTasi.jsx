import React from "react";
import { Helmet } from "react-helmet-async";

const KareParkeTasi = () => {
  return (
    <>
      <Helmet>
        <title>Kare Parke Taşı- Çicek Taş Üst Yapı elemanları</title>
        <meta
          name="description"
          content="Çicek beton elemanları olarak kaldırım taşı, barbekü taşı, kilitli taş ve oluk taşı modellerimizle kaliteli ve dayanıklı çözümler sunuyoruz. Şimdi keşfedin!"
        />
      </Helmet>
      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
          Kare Parke Taşı
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-14 leading-relaxed">
          30×30 Kare Parke Taşı Beton parke taşları, pratik, hızlı uygulanabilir
          ve tamiratı kolay zemin döşemeleridir. Dayanıklı, sürekli kullanım
          özelliği olan ve toprağın nefes alabilmesine izin veren yapısıyla doğa
          dostudur, ekonomiktir. Estetik yapısı ile çeşitli renk ve desen
          uygulamaya olanak sağlar.30 a 30 Kare Parke Taşı fiyatları için
          firmamızla iletişime geçiniz.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="images/KARE PARKE TAŞI/kare-parke-tası2.webp"
            alt="Kare Parke Taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/KARE PARKE TAŞI/kare-parke-tası3.webp"
            alt="Kare Parke Taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/KARE PARKE TAŞI/kare-parke-tası4.webp"
            alt="Kare Parke Taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[110px]">
        Önemli Bilgiler
        </h2>
        <ul className="list-disc pl-[100px] text-gray-700 mb-10 leading-loose">
          <li>Teknolojik makinalarla belirli standartlara uygun reçetelerle üretilen beton ürünüdür. </li>
          <li>Kumlamalı ve ya mineralli olarak da üretilmektedir.</li>
          <li>Metrekarede 11 adet 30X30 kare parke taşı bulunmaktadır.</li>
          <li>Bir palette 10m2 30X30 kare parke bulunmaktadır.</li>
          <li>6 cm- 8 cm olarak tercih edebilirsiniz.</li>
          <li>Gri, kırmızı, siyah, beyaz gibi farklı renk seçenekleri mevcuttur.</li>
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
            src="images/KARE PARKE TAŞI/kare-parke-tası8.webp"
            alt="Kare Parke Taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/KARE PARKE TAŞI/kare-parke-tası5.webp"
            alt="Kare Parke Taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/KARE PARKE TAŞI/kare-parke-tası6.webp"
            alt="Kare Parke Taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default KareParkeTasi;
