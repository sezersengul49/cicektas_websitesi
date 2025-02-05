import { Helmet } from "react-helmet-async";
import Section from "../Component/Section";
import Services from "../Component/Services";

const HomePage = () => (
  <>
    <Helmet>
    <title>Çiçek Taş Beton | Şev Taşı, Parke Taşı,Flora Şev Taşı Bordür ve Oluk Taşları</title>
      <meta
        name="description"
        content="Çiçek Taş Beton olarak kilitli taş, şev taşı, kaldırım taşı, barbekü taşı ve oluk taşı modellerimizle kaliteli ve dayanıklı çözümler sunuyoruz. Şimdi keşfedin!"
      />
      <meta
        name="keywords"
        content="kilitli taş, şev taşı, çiçek taş beton, kaldırım taşı, barbekü taşı, oluk taşı, beton elemanları, peyzaj tasarımı, dayanıklı beton ürünler"
      />
      <meta property="og:title" content="Kilitli Taş, Şev Taşı - Çiçek Taş Beton Elemanları" />
      <meta
        property="og:description"
        content="Çiçek Taş Beton olarak kilitli taş, şev taşı, kaldırım taşı, barbekü taşı ve oluk taşı modellerimizle kaliteli ve dayanıklı çözümler sunuyoruz. Şimdi keşfedin!"
      />
      <meta property="og:image" content="https://www.cicektasbeton.com/kilitli-tas.webp" />
      <meta property="og:url" content="https://www.cicektasbeton.com" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.cicektasbeton.com" />
    </Helmet>
    <Section />
    <Services />
  </>
);

export default HomePage;