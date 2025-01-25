import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiSahibinden } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Sahibinden Icon */}
        <div className="flex flex-col items-center space-y-2">
          <a
            href="https://www.sahibinden.com/arama?userId=a_cuHJsJAPL3LCVK7TFhruw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-red-500 transition-all shadow-lg"
          >
            <SiSahibinden size={50} style={{ color: "yellow" }} />
            <span className="mt-2 text-base font-semibold text-white hover:underline">
              İlanlarımızı Görüntüleyin
            </span>
          </a>
        </div>

        {/* Ürünlerimiz */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-red-400">
            Ürünlerimiz
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base font-semibold">
            <a
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              href="/sev-tasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Şev Taşı
            </a>
            <a
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              href="/oluk-tasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oluk Taşları
            </a>
            <a
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              href="/kilitli-parke-tasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kilitli Parke Taşı
            </a>
            <a
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              href="/kare-parke-tasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kare Parke Taşı
            </a>
            <a
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              href="/flora-sev-tasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flora Şev Taşı
            </a>
            <a
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              href="/beton-barbeku-tasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beton Barbekü Taşı
            </a>
            <a
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              href="/bahce-borduru"
              target="_blank"
              rel="noopener noreferrer"
            >
              20x50 Bahçe Bordürü
            </a>
            <a
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              href="/yol-borduru"
              target="_blank"
              rel="noopener noreferrer"
            >
              30x70 Yol Bordürü
            </a>
          </ul>
        </div>

        {/* Other Social Icons */}
        <div className="flex justify-center space-x-6">
          {/* Facebook Icon */}

          <FaFacebook size={30} />

          {/* Twitter Icon */}

          <FaTwitter size={30} />

          {/* Instagram Icon */}

          <FaInstagram size={30} />
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center mt-4">
        <p className="text-sm">
          &copy; 2025 Çiçek Taş Üst Yapı Elemanları Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
