import Image from "next/image";
import Header from "./components/header";
import Section2 from "./components/home/section2";
import Section1 from "./components/home/section1";
import Section3 from "./components/home/section3";
import Section4 from "./components/home/section4";
import Section5 from "./components/home/section5";
import Section6 from "./components/home/section6";
import Section8 from "./components/home/section8";
import Section9 from "./components/home/section9";
import Section10 from "./components/home/section10";
import PopupBox from "./components/popupbox";
import Faq from "./components/faq";
import Section7 from "./components/home/section7";
import ServiceSection from "./components/servicesection";
import ServiceGrid from "./components/servicegrid";
import HowItWorksSection from "./components/home/HowItWorksSection";

export default function Home() {
  const headerImg =
    "/images/20250813_0152_image.png";
  return (
    <div>
      <Header headerImg={headerImg} />
      <Section2 />
      <ServiceGrid />
      <ServiceSection />
      <Section3 />
      <Section1 />
      <Section7 />
      <HowItWorksSection />
      <Section5 />
      <Faq />
    </div>
  );
}
