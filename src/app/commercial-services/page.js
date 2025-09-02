import React from "react";
import Section2 from "../components/commercial/section2";
import Header from "../components/header";
import Section1 from "../components/commercial/section1";
import ServiceSection from "../components/servicesection";
import Section4 from "../components/commercial/section4";
import HowItWorksSection from "../components/home/HowItWorksSection";
import Faq from "../components/faq";
import Section5 from "../components/home/section5";
import Section3 from "../components/home/section3";

const Commercial = () => {

  const headerImg =
    "/images/commarcial1.png";
  const headerText1 = "Commercial";
  const headerText2 = "Moving Services" ;
  const headerDesc = "Efficient, reliable commercial moving, safely relocating offices, equipment, and furniture with minimal downtime." ;
  return (
    <div>
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc ={headerDesc} />
      <Section1 />
      <Section2 />
      <HowItWorksSection />
      <Section4 />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default Commercial;
