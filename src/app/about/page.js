import React from 'react';
import Section1 from '../about-us/section1';
import Section2 from '../about-us/section2';
import Header from '../components/header';
import HowItWorksSection from '../components/home/HowItWorksSection';
import Faq from '../components/faq';

export { metadata } from '../about-us/page';

export default function AboutPage() {
  const headerImg = "/images/about.png";
  const headerText1 = "About";
  const headerText2 = "Our Service";
  const headerDesc = "Making Moves Matter provides safe, reliable, stress-free moving services across Mesa and Arizona.";

  return (
    <div>
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />
      <Section1 />
      <HowItWorksSection />
      <Section2 />
      <Faq />
    </div>
  );
}
