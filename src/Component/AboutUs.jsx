import React from "react";

const AboutUs = () => {
  return (
    <div className="py-8 px-4 md:px-14">
      {/* Ana Başlık */}
      <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-red-600">
        HAKKIMIZDA
      </h1>

      {/* Hakkımızda İçeriği */}
      <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md">
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Çiçek Üst Yapı Elemanları olarak, 2 yıldır sektörde faaliyet göstermekteyiz ve 
          peyzaj ile çevre düzenleme çalışmalarında kullanılan taş çeşitleri konusunda uzmanlaşmış durumdayız. 
          Yüksek kaliteli ve dayanıklı ürünlerimizle, müşterilerimizin projelerine değer katmayı hedefliyoruz.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Ürün yelpazemiz arasında; şev taşı, flora şev taşı, terra blok, beton bariyer, oluk taşları, 
          bordür taşları, parke taşları, briket, çim taşı, park mantarı ve beton dubalar gibi birçok farklı ürün bulunmaktadır. 
          Tüm ürünlerimiz, uzun ömürlü ve dayanıklı yapıları ile sektörde fark yaratmaktadır.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Faaliyetlerimizde müşteri memnuniyetine büyük önem veriyor ve kaliteli hizmet sunmayı ilke ediniyoruz. 
          Çevre dostu üretim yöntemlerini benimseyerek, doğaya duyarlı bir yaklaşım sergiliyoruz. 
          İnovatif çözümlerimiz ve uygun fiyat politikamız ile her zaman yanınızdayız.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Bizimle çalışmayı tercih eden müşterilerimiz, ürünlerimizin sağlamlığı ve estetik görünümü ile 
          projelerine değer kattıklarını deneyimlemektedir. Siz de kaliteli ürünlerimizden faydalanmak ve 
          projelerinize yenilik katmak için bizimle iletişime geçebilirsiniz.
        </p>
      </div>

      {/* İletişim Çağrısı */}
      <div className="mt-8 text-center">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Daha fazla bilgi almak veya ürünlerimiz hakkında detaylı bilgiye ulaşmak için bizimle iletişime geçin.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          İletişime Geçin
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
