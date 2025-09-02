import React from 'react'
import Header from '../components/header';
import Section1 from './section1';
import Section2 from './section2';
import HowItWorksSection from '../components/home/HowItWorksSection';
import Faq from '../components/faq';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';
import Section7 from './section7';
import Section8 from './section8';
import Section9 from './section9';
import Section10 from './section10';

const page = () => {
  const headerImg =
    "/images/chendler1.png";
  const headerText1 = "Moving";
  const headerText2 = "and Storage" ;
  const headerDesc = "We are a one stop solution and customized service provider for all moving need for our all customers" ;
  return (
    <div>
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc ={headerDesc} />
      <Section1 />
      <HowItWorksSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section8 />
      <Faq />
    </div>
  )
}

export default page