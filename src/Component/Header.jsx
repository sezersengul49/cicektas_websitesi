import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Başlık = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const konum = useLocation();

  const isActive = (yol) => konum.pathname === yol;

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="overflow-x-hidden"> {/* Yatay kaydırmayı engelle */}
      <header className="relative bg-white shadow-xl text-gray-900 max-w-screen overflow-hidden">
        {/* Animasyonlu Arka Plan */}
        <div className="absolute inset-0"></div>

        {/* Ana Başlık */}
        <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-4 relative z-20">
          {/* Logo Alanı */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link to={"/"}>
              <div className="w-[50px] h-[50px] md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl">
                <img
                  className="w-full h-full object-contain rounded-full"
                  src="/logo1.webp"
                  alt="Çiçektaş beton Logo-Çiçek Taş Beton "
                  loading="lazy"
                />
              </div>
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold text-black tracking-wide">
              ÇİÇEK TAŞ BETON
            </h1>
          </div>

          {/* Hamburger Menü Butonu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black focus:outline-none"
            aria-label="Menüyü Aç"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Gezinme Menüsü */}
          <nav
            className={`${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } md:translate-x-0 md:opacity-100 ${
              isMenuOpen
                ? "transition-all duration-850 ease-in-out" // Açılırken 1000ms
                : "transition-all duration-1000 ease-in-out" // Kapanırken 1500ms
            } fixed md:static top-[83px] bottom-[240px] right-0 w-[150px] md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10 rounded-lg md:rounded-none`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-8 text-lg font-semibold text-black px-6 py-8 md:py-0">
              <li
                className={`${
                  isActive("/")
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-400"
                } cursor-pointer transition duration-300 transform hover:scale-105`}
                onClick={handleMenuClick}
              >
                <Link to="/" className="text-gray-900 hover:text-gray-700">
                  Ana Sayfa
                </Link>
              </li>
              <li
                className={`${
                  isActive("/about")
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-400"
                } cursor-pointer transition duration-300 transform hover:scale-105`}
                onClick={handleMenuClick}
              >
                <Link to={"/about"}>Hakkımızda</Link>
              </li>
              <li
                className={`${
                  isActive("/products")
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-400"
                } cursor-pointer transition duration-300 transform hover:scale-105`}
                onClick={handleMenuClick}
              >
                <Link to={"/ürünler"}>Ürünlerimiz</Link>
              </li>
              <li
                className={`${
                  isActive("/photo")
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-400"
                } cursor-pointer transition duration-300 transform hover:scale-105`}
                onClick={handleMenuClick}
              >
                <Link to={"/galeri"}>Galeri</Link>
              </li>
              <li
                className={`${
                  isActive("/contact")
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-400"
                } cursor-pointer transition duration-300 transform hover:scale-105`}
                onClick={handleMenuClick}
              >
                <Link to={"/iletisim"}>İletişim</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Başlık;