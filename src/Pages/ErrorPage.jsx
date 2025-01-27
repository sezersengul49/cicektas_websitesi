import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 mb-20 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl sm:text-6xl font-bold text-blue-500">404</h1>
        <p className="text-lg sm:text-xl text-gray-700 mt-4">
          Üzgünüz, aradığınız sayfa bulunamadı.
        </p>
        <p className="text-sm sm:text-md text-gray-500 mt-2">
          Aradığınız sayfa taşınmış, silinmiş veya yanlış bir URL yazmış
          olabilirsiniz.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white text-md sm:text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
