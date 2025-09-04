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
  const headerText1 = "Top-Rated Chandler";
  const headerText2 = "Moving Company" ;
  const headerDesc = "Get Affordable Moving Solutions Tailored to Your Needs for a Stress-Free Move" ;
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








export const metadata = {
  title: "Chandler Moving Companies | Making Moves Matter | Call Now",
  description: "Looking for the best movers in Chandler, AZ? Making Moves Matter offers reliable residential & commercial, Local & Long moving services. Book Now",
  
  metadataBase: new URL("https://mesamovingexperts.com"),
  
  alternates: {
    canonical: "/chandler-az/",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  
  openGraph: {
    title: "Chandler Moving Companies | Making Moves Matter | Call Now",
    description: "Looking for the best movers in Chandler, AZ? Making Moves Matter offers reliable residential & commercial, Local & Long moving services. Book Now",
    url: "https://mesamovingexperts.com/chandler-az/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 300,
        height: 201,
        alt: "Phoenix AZ - Mesa Moving Experts",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-26T20:31:39+00:00",
    modifiedTime: "2025-08-16T18:13:09+00:00",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Chandler Moving Companies | Making Moves Matter | Call Now",
    description: "Looking for the best movers in Chandler, AZ? Making Moves Matter offers reliable residential & commercial, Local & Long moving services. Book Now",
    images: ["/images/logo.png"],
    creator: "@MesaMoving",
  },
  
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/images/logo.png",
        sizes: "270x270",
        type: "image/png",
      },
    ],
  },
  
  keywords: [
    "Chandler AZ moving company",
    "Chandler movers",
    "local movers Chandler",
    "long distance movers Arizona",
    "professional movers Chandler",
    "affordable moving services",
    "Chandler relocation services",
    "residential movers",
    "commercial movers",
  ],
  
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Moving Services",
};