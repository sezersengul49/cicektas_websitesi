import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { SiSahibinden } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className=''>
         <a
     href="tel:+905348990618"
     className="fixed right-4 bottom-0 transform -translate-y-1/2 bg-green-600 text-white text-3xl p-4 rounded-full shadow-lg z-50 hover:scale-110 transition-all duration-300"
     aria-label="Telefon ile ara"
    >
      <FaPhoneAlt size={33} />
    </a>

    <a
        href="https://www.sahibinden.com/arama?userId=a_cuHJsJAPL3LCVK7TFhruw"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-0 transform -translate-y-1/2 text-white text-3xl shadow-lg z-50 hover:scale-110 transition-all duration-300"
      
    >
      <SiSahibinden
        size={65}
        className="bg-black  rounded-full"
        style={{ color: "yellow" }}
      />
    </a>
    </div>
  )
}

export default Sidebar