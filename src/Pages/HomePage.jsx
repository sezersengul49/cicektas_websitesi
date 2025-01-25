import { Helmet } from "react-helmet-async";
import Section from "../Component/Section";
import Services from "../Component/Services";


const HomePage = () => (
  <>
    <Helmet>
      <title>Kilitli taş, Şev Taşı- Çicek beton elemanları</title>
      <meta
        name="description"
        content="Çicek beton elemanları olarak kaldırım taşı, barbekü taşı, kilitli taş ve oluk taşı modellerimizle kaliteli ve dayanıklı çözümler sunuyoruz. Şimdi keşfedin!"
      />
    </Helmet>
    <Section />
    <Services />
    
   
  </>
);

export default HomePage;
