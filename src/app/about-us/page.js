import React from 'react'
import Section1 from './section1'
import Section2 from './section2'
import Header from '../components/header';
import HowItWorksSection from '../components/home/HowItWorksSection';
import Faq from '../components/faq';

const page = () => {
  const headerImg =
    "/images/about.png";
  const headerText1 = "Moving";
  const headerText2 = "and Storage" ;
  const headerDesc = "We are a one stop solution and customized service provider for all moving need for our all customers" ;
  return (
    <div>
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc ={headerDesc} />
      <Section1 />
      <HowItWorksSection />
      <Section2 />
      <Faq />
    </div>
  )
}

export default page
