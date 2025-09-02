import React from 'react'
import Navber from './navber'
import Header from './header'
import Footer from './footer';
import Services from './services';
import Faq from './faq';
import FooterCtr from './footerCtr';
import Reviews from './reviews';
import Step from './step';
import SarveArea from './sarveArea';
import WhyChooseUs from './whyChooseUs';
import LeadForm from './leadForm';
import ImageText from './imageText';
import TextImage from './textImage';

const page = () => {

  const headerImg =
    "/images/20250813_0152_image.png";


  return (
    <>
     <Navber />
     <Header headerImg={headerImg} />
     <LeadForm />
     <WhyChooseUs />
     <SarveArea />
     <ImageText />
     <Step />
     <Reviews />
     <Services />
     <TextImage />
     <Faq />
     <FooterCtr />
     <Footer />
    </>
  )
}

export default page
