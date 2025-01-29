import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiSahibinden } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
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
        <div className="text-center">
          <h3 className="text-2xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-red-400">
            Ürünlerimiz
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base font-semibold">
            <li>
              <a
                className="block bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                href="/40x40-kare-parke-tasi"
              >
                40x40 Kare Parke Taşı
              </a>
            </li>
            <li>
              <a
                className="block bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                href="/kilitli-parke-tasi"
              >
                Kilitli Parke Taşı
              </a>
            </li>
            <li>
              <a
                className="block bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                href="/30x30-kare-parke-tasi"
              >
                30x30 Kare Parke Taşı
              </a>
            </li>

            <li>
              <a
                className="block bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                href="/beton-barbeku-tasi"
              >
                Beton Barbekü Taşı
              </a>
            </li>
            <li>
              <a
                className="block bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                href="/bahce-borduru"
              >
                20x50 Bahçe Bordürü
              </a>
            </li>
            <li>
              <a
                className="block bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                href="/yol-borduru"
              >
                30x70 Yol Bordürü
              </a>
            </li>
            <li>
              <a
                className="block bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                href="/flora-sev-tasi"
              >
                Flora Şev Taşı
              </a>
            </li>
            <li>
              <a
                className="block bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                href="/sev-tasi"
              >
                Şev Taşı
              </a>
            </li>

            <li>
              <a
                className="block bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                href="/oluk-tasi"
              >
                Oluk Taşları
              </a>
            </li>
            <li>
              <a
                className="block bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                href="/briket"
              >
                Briket
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:scale-110 transition-all"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:scale-110 transition-all"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-all"
          >
            <FaInstagram size={30} />
          </a>
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
