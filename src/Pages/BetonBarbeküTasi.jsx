import React from "react";
import { Helmet } from "react-helmet-async";

const BetonBarbeküTasi = () => {
  return (
    <>
      <Helmet>
        <title>Beton Barbekü Taşı- Çicek Taş Üst Yapı elemanları</title>
        <meta
          name="description"
          content="Çicek beton elemanları olarak kaldırım taşı, barbekü taşı, kilitli taş ve oluk taşı modellerimizle kaliteli ve dayanıklı çözümler sunuyoruz. Şimdi keşfedin!"
        />
      </Helmet>
      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
          Beton Barbekü Taşı
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-6 px-14 leading-relaxed">
          Hazır Beton Barbekü ürünümüz katkılı çimento ve içerisinde demir donatılarla üretilmekte olup uzun ömürlü dış ve iç mekan için uygun bir üründür.Beton barbekünün içerisinde ısıya dayanaklı ateş tuğlalar ile etin pişirme süresini azaltarak bunun yanı sıra lezzetli bir keyif sunmaktadır.
        </p>

        {/* Görseller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src="images/BETON BARBEKÜ TAŞI/beton-barbekü-tası3.webp"
            alt="Beton Barbekü Taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/BETON BARBEKÜ TAŞI/beton-barbekü-tası4.webp"
            alt="Beton Barbekü Taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/BETON BARBEKÜ TAŞI/beton-barbekü-tası5.webp"
            alt="Beton Barbekü Taşı"
            className="w-full max-w-[350px] h-[350px] rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Önemli Bilgiler */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 px-[110px]">
          Önemli Bilgiler
        </h2>
        <ul className="list-disc pl-[100px] text-gray-700 mb-10 leading-loose">
          <li>Beton, dış etkenlere karşı oldukça dayanıklıdır</li>
          <li>Doğru bakım yapıldığında yıllarca kullanılabilir</li>
          <li>
            {" "}
            Farklı tasarımlarla üretilebildiği için her türlü bahçe
            dekorasyonuna uyum sağlar.
          </li>
          <li>
            Yüksek sıcaklıklara dayanıklıdır, bu sayede uzun süreli pişirme
            işlemleri için idealdir.
          </li>
          <li>
            İsteğe göre farklı boyutlarda, şekillerde ve özelliklerde
            üretilebilir
          </li>
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
            src="images/BETON BARBEKÜ TAŞI/beton-barbekü-tası6.webp"
            alt="Beton Barbekü Taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/BETON BARBEKÜ TAŞI/beton-barbekü-tası9.webp"
            alt="Beton Barbekü Taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/BETON BARBEKÜ TAŞI/beton-barbekü-tası8.webp"
            alt="Beton Barbekü Taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/BETON BARBEKÜ TAŞI/beton-barbekü-tası2.webp"
            alt="Beton Barbekü Taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
          />
          <img
            src="images/BETON BARBEKÜ TAŞI/beton-barbekü-tası7.webp"
            alt="Beton Barbekü Taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
          />
           <img
            src="images/BETON BARBEKÜ TAŞI/beton-barbekü-tası1.webp"
            alt="Beton Barbekü Taşı"
            className="w-full max-w-[350px] h-[400px] rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default BetonBarbeküTasi;
