import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>
          Çiçek Taş Beton | Şev Taşı, Parke Taşı, Flora Şev Taşı Bordür ve Oluk
          Taşları
        </title>
        <meta
          name="description"
          content="Çicek Taş Beton, kaliteli üst yapı elemanları ile çevre düzenleme ve peyzaj projelerinizde en iyi çözümleri sunar. Şev taşı, parke taşları, bordür taşları gibi ürünlerimizle güvenli ve dayanıklı yapılar inşa edin."
        />
        <meta
          name="keywords"
          content="üst yapı elemanları, şev taşı, flora şev taşı, terra blok, beton bariyer, oluk taşları, bordür taşları, parke taşları, briket, çim taşı, park mantarı, beton dubalar,çiçek taş beton,çiçek beton"
        />
        <meta
          property="og:title"
          content="Çicek Taş Beton - Kaliteli Taş Beton Ürünleri"
        />
        <meta
          property="og:description"
          content="Çicek Taş Beton, kaliteli üst yapı elemanları ile çevre düzenleme ve peyzaj projelerinizde en iyi çözümleri sunar. Şev taşı, parke taşları, bordür taşları gibi ürünlerimizle güvenli ve dayanıklı yapılar inşa edin."
        />
        <meta
          property="og:image"
          content="https://www.cicektasbeton.com/sevtasi.webp"
        />
        <meta
          property="og:url"
          content="https://www.cicektasbeton.com/services"
        />
        <meta name="robots" content="index, follow" />
        
      </Helmet>
      <div className="py-8 px-4 md:px-14">
        {/* Ana Başlık */}
        <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-red-600">
          HİZMETLERİMİZ
        </h1>

        {/* Hizmet Bölümü */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md">
          {/* Alt Başlık */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">
            Üst Yapı Elemanları
          </h2>

          {/* İçerik Paragrafı */}
          <p className="text-gray-700 leading-relaxed">
            Üst yapı elemanları; çevre düzenleme ve peyzaj çalışmalarında sıkça
            kullanılan beton ürünlerini kapsamaktadır. Şev taşı, flora şev taşı,
            terra blok, beton bariyer, oluk taşları, bordür taşları, parke
            taşları, briket, çim taşı, park mantarı ve beton dubalar gibi
            çeşitli ürünleri içerir. Ürünlerimiz genellikle buhar kürü ile
            üretilmekte ve sağlamlık ile dayanıklılık sağlamaktadır. Çiçek Taş
            Beton olarak uygun fiyat avantajlarıyla kaliteli ürünler sunuyoruz.
          </p>
        </div>

        {/* Görsel Alanı */}
        <div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {/* Görseller */}
          {[
            {
              title: "ŞEV TAŞI",
              imgSrc: "/sevtasi9.webp",
              path: "/sev-tasi",
            },
            {
              title: "OLUK TAŞLARI",
              imgSrc: "/oluk-tası6.webp",
              path: "/oluk-tasi",
            },
            {
              title: "30X30 KARE PARKE TAŞI",
              imgSrc: "/30x30karetas.webp",
              path: "/30x30-kare-parke-tasi",
            },
            {
              title: "KİLİTLİ PARKE TAŞI",
              imgSrc: "/kilitli-parke-tası7.webp",
              path: "/kilitli-parke-tasi",
            },
            {
              title: "40X40 KARE PARKE TAŞI",
              imgSrc: "/30x30-kare-parke.webp",
              path: "/40x40-kare-parke-tasi",
            },
            {
              title: "FLORA ŞEV TAŞI-TERRA BLOK",
              imgSrc: "/flora-sev-tası8.webp",
              path: "/flora-sev-tasi",
            },
            {
              title: "BETON BARBEKÜ TAŞI",
              imgSrc: "/beton-barbekü-tası3.webp",
              path: "/beton-barbeku-tasi",
            },
            {
              title: "20X50 BAHÇE BORDÜRÜ",
              imgSrc: "/bahce-borduru7.webp",
              path: "/bahce-borduru",
            },
            {
              title: "30X70 YOL BORDÜRÜ",
              imgSrc: "/yol-bordürü.webp",
              path: "/yol-borduru",
            },
            {
              title: "BRİKET",
              imgSrc: "/briket2.webp",
              path: "/briket",
            },
          ].map((item, index) => (
            <div key={index} className="relative text-center cursor-pointer ">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-transparent bg-clip-text bg-black ">
                {item.title}
              </h3>
              <div className=" overflow-hidden max-w-[400px] h-[400px] rounded-lg shadow-lg group relative ">
                <a href={item.path} className="block">
                  <img
                    src={item.imgSrc}
                    alt={`${item.title} - yüksek kaliteli ürünler`}
                    loading="lazy"
                    className="w-full max-w-[400px] h-[400px] rounded-lg shadow-lg mx-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover İçin Animasyonlu Yazı */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">
                      Detayları Gör
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
