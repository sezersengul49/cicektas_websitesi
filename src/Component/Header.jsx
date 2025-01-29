import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="relative bg-white shadow-xl">
      {/* Animated Background */}
      <div className="absolute inset-0 "></div>
      
      {/* Main Header */}
      <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-4 relative z-20">
        {/* Logo Area */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to={"/"}>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 p-2 flex items-center justify-center shadow-xl">
              <img
                className="w-full h-full object-contain rounded-full"
                src="/logo.jpeg"
                alt="Çiçektaş Logo"
              />
            </div>
          </Link>
          <h1 className=" text-2xl md:text-4xl font-bold text-black tracking-wide">
            ÇİÇEKTAŞ ÜST YAPI ELEMANLARI
          </h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
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

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:static top-[100px] right-0 bg-white text-white md:bg-transparent shadow-md md:shadow-none z-10 rounded-lg md:rounded-none`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-lg font-semibold text-black px-4 py-4 md:py-0">
            <li
              className={`${
                isActive("/")
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-400"
              } cursor-pointer transition duration-300 transform hover:scale-105`}
            >
              <Link to={"/"}>Anasayfa</Link>
            </li>
            <li
              className={`${
                isActive("/about")
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-400"
              } cursor-pointer transition duration-300 transform hover:scale-105`}
            >
              <Link to={"/about"}>Hakkımızda</Link>
            </li>
            <li
              className={`${
                isActive("/products")
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-400"
              } cursor-pointer transition duration-300 transform hover:scale-105`}
            >
              <Link to={"/products"}>Ürünlerimiz</Link>
            </li>
            <li
              className={`${
                isActive("/photo")
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-400"
              } cursor-pointer transition duration-300 transform hover:scale-105`}
            >
              <Link to={"/photo"}>Galeri</Link>
            </li>
            <li
              className={`${
                isActive("/contact")
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-400"
              } cursor-pointer transition duration-300 transform hover:scale-105`}
            >
              <Link to={"/contact"}>İletişim</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
