import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import SevTasi from "./Pages/SevTasi";
import Sidebar from "./Component/Sidebar";
import OlukTasi from "./Pages/OlukTasi";
import KilitliParkeTasi from "./Pages/KilitliParkeTasi";
import KareParkeTasi from "./Pages/KareParkeTasi";
import FloraSevTasi from "./Pages/FloraSevTasi";
import BetonBarbeküTasi from "./Pages/BetonBarbeküTasi";
import BahceBordürü from "./Pages/BahceBordürü";
import YolBordürü from "./Pages/YolBordürü";
import OlukTasi1 from "./Pages/OlukTasi1";
import OlukTasi3 from "./Pages/OlukTasi3";
import OlukTasi4 from "./Pages/OlukTasi4";
import OlukTasi5 from "./Pages/OlukTasi5";
import KareParkeTasi40x40 from "./Pages/KareParkeTasi40x40";
import Services from "./Component/Services";
import AboutUs from "./Component/AboutUs";
import Contact from "./Component/Contact";
import Gallery from "./Component/Gallery";
import ErrorPage from "./Pages/ErrorPage";
import Briket from "./Pages/Briket";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ürünler" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/sev-tasi" element={<SevTasi />} />
          <Route path="/oluk-tasi" element={<OlukTasi />} />

          <Route path="/kilitli-parke-tasi" element={<KilitliParkeTasi />} />
          <Route path="/30x30-kare-parke-tasi" element={<KareParkeTasi />} />
          <Route
            path="/40x40-kare-parke-tasi"
            element={<KareParkeTasi40x40 />}
          />
          <Route path="/flora-sev-tasi" element={<FloraSevTasi />} />
          <Route path="/beton-barbeku-tasi" element={<BetonBarbeküTasi />} />
          <Route path="/bahce-borduru" element={<BahceBordürü />} />
          <Route path="/yol-borduru" element={<YolBordürü />} />
          <Route path="/oluk-tasi-20x20" element={<OlukTasi1 />} />

          <Route path="/oluk-tasi-25x25" element={<OlukTasi3 />} />
          <Route path="/oluk-tasi-25x30" element={<OlukTasi4 />} />
          <Route path="/oluk-tasi-25x33" element={<OlukTasi5 />} />
          <Route path="/briket" element={<Briket />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
