import React from "react";
import { Helmet } from "react-helmet-async";

const OlukTasi = () => {
  return (
    <>
      <Helmet>
        <title>Oluk Taşları - Çiçek Taş Üst Yapı Elemanları</title>
        <meta
          name="description"
          content="Oluk Taşları ile bahçe, kaldırım ve yol düzenlemesi için kaliteli ve dayanıklı drenaj çözümleri sunuyoruz. 20x20, 20x30, 25x25 gibi farklı ölçülerde oluk taşlarını şimdi keşfedin!"
        />
        <meta
          name="keywords"
          content="oluk taşı, drenaj taşı, bahçe taşları, yol taşı, kaldırım taşı, Çiçek Taş"
        />
        <meta name="author" content="Çiçek Taş" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Oluk Taşları - Çiçek Taş Üst Yapı Elemanları"
        />
        <meta
          property="og:description"
          content="Oluk Taşları ile bahçe, kaldırım ve yol düzenlemesi için kaliteli ve dayanıklı drenaj çözümleri sunuyoruz. 20x20, 20x30, 25x25 gibi farklı ölçülerde oluk taşlarını şimdi keşfedin!"
        />
        <meta property="og:image" content="/images/OLUK TAŞI/oluk-tası3.webp" />
        <meta property="og:url" content="https://cicektas.com/oluk-tasi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="container mx-auto p-6 md:p-10 bg-gray-100">
        {/* Başlık */}
        <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">
          Oluk Taşları
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-12 leading-relaxed px-8 text-center bg-white p-6 rounded-lg shadow-md">
          Oluk Taşı; bahçe, yol, kaldırım gibi peyzaj düzenlemesi yapılan
          alanlarda, yağan yağmur sularının birikmesi, tahliyesi, suyun
          yönlendirilmesi ve drenaj sağlaması için ideal bir çözümdür. Dere taşı
          olarak da bilinen bu ürün yüksek kalite standartlarına uygun olarak
          üretilmektedir. Oluk Taşı fiyatları için bizimle iletişime
          geçebilirsiniz.
        </p>

        {/* Çeşitler */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Oluk Taşı Çeşitleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "20X20 Oluk Taşı", href: "/20x20-oluk-tasi" },
            { name: "20X30 Oluk Taşı", href: "/20x30-oluk-tasi" },
            { name: "25X25 Oluk Taşı", href: "/25x25-oluk-tasi" },
            { name: "25X30 Oluk Taşı", href: "/25x30-oluk-tasi" },
            { name: "25X33 Oluk Taşı", href: "/25x33-oluk-tasi" },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <span className="text-2xl font-semibold text-white bg-gray-700 mb-4 block rounded-lg text-center">
                {item.name}
              </span>
              <div className="overflow-hidden rounded-lg shadow-md">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src="images/OLUK TAŞI/oluk-tası3.webp"
                    alt={`${item.name} - kaliteli drenaj taşı`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OlukTasi;
