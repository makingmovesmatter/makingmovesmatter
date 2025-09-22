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
    "/images/homebanne.png";
  const headerText1 = "Moving";
  const headerText2 = "and Storage" ;
  const headerDesc = "We are a one stop solution and customized service provider for all moving need for our all customers" ;


  return (
    <div>
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc ={headerDesc} />
      <Section2 />
      <ServiceGrid />
      <ServiceSection />
      <Section3 />
      <Section1 />
      <HowItWorksSection />
      <Section7 />
      <Section5 />
      <Faq />
    </div>
  );
}
