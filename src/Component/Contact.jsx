import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>İletişim - Çiçek Taş Beton | Şev Taşı, Bordür Taşı, Kilitli Taş</title>
        <meta
          name="description"
          content="Çiçek Taş Beton olarak bizimle iletişime geçin! Şev taşı, bordür taşı, kilitli taş ve diğer beton ürünlerimiz hakkında bilgi alın. Güvenilir ve hızlı çözümler sunuyoruz."
        />
        <meta
          name="keywords"
          content="çiçek taş, iletişim, şev taşı, bordür taşı, kilitli taş, beton taşlar, üst yapı elemanları, beton blok, müşteri hizmetleri"
        />
        <meta property="og:title" content="İletişim - Çiçek Taş Beton | Şev Taşı, Bordür Taşı, Kilitli Taş" />
        <meta
          property="og:description"
          content="Çiçek Taş Beton olarak bizimle iletişime geçin! Şev taşı, bordür taşı, kilitli taş ve diğer beton ürünlerimiz hakkında bilgi alın. Güvenilir ve hızlı çözümler sunuyoruz."
        />
         <meta property="og:image" content="https://www.cicektasbeton.com/flora-sev-tası8.webp" />
        <meta property="og:url" content="https://www.cicektasbeton.com/iletisim" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.cicektasbeton.com/iletisim" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İletişim - Çiçek Taş Beton | Şev Taşı, Bordür Taşı, Kilitli Taş" />
        <meta name="twitter:description" content="Çiçek Taş Beton ile iletişime geçerek ürünlerimiz hakkında detaylı bilgi alabilirsiniz." />
        <meta name="twitter:image" content="https://www.cicektasbeton.com/flora-sev-tası8.webp" />
      </Helmet>

      <div className="container mx-auto p-6 md:p-10 bg-gray-50">
        {/* Başlık */}
        <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">
          İletişim
        </h1>

        {/* Açıklama */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed px-4 md:px-12 text-center">
          Sorularınız veya ihtiyaçlarınız için bizimle iletişime geçin. Çiçek Taş
          Beton Elemanları olarak en iyi hizmeti sunmak için buradayız!
        </p>

        {/* İletişim Bilgileri */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-500 pb-2">
            İletişim Bilgilerimiz
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-4">
              <span className="font-bold">Telefon:</span>
              <a
                href="tel:+905348990618"
                className="text-green-600 hover:underline"
              >
                +90 534 899 0618
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="font-bold">Yetkili:</span>
              <h2 className="font-bold">Hüseyin Çiçek</h2>
            </li>
            <li className="flex items-center gap-4">
              <span className="font-bold">Adres:</span>
              Haraççı Mahallesi, Arnavutköy, İstanbul, Türkiye
            </li>
          </ul>
        </div>

        {/* Harita ve Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Harita */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe
              title="Harita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5306.081816206797!2d28.730653!3d41.185327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa6df3810cb8b%3A0x2cf158d1af9ddc0!2sHara%C3%A7%C3%A7%C4%B1%2C%20Arnavutk%C3%B6y%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1689553201234!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* İletişim Formu */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Bize Ulaşın
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Adınızı ve Soyadınızı girin"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="E-posta adresinizi girin"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Mesajınızı buraya yazın"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
