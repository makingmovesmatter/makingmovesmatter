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
    "/images/mesa1.png";
  const headerText1 = "Moving Company";
  const headerText2 = "in Mesa, AZ" ;
  const headerDesc = "Your Trusted Partner for a Smooth, Safe & Hassle-Free Move" ;
  return (
    <div>
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc ={headerDesc} />
      <Section1 />
      <HowItWorksSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Faq />
    </div>
  )
}

export default page




export const metadata = {
  title: "Reliable Mesa AZ Moving Company | Local & Long-Distance Mover",
  description: "Looking for trusted movers in Mesa, AZ? We offer professional local and long-distance moving services at affordable rates. Contact us today!",
  
  metadataBase: new URL("https://mesamovingexperts.com"),
  
  alternates: {
    canonical: "/mesa-az/",
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
    title: "Reliable Mesa AZ Moving Company | Local & Long-Distance Movers",
    description: "Looking for trusted movers in Mesa, AZ? We offer professional local and long-distance moving services at affordable rates. Call now for a free quote!",
    url: "https://mesamovingexperts.com/mesa-az/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 380,
        height: 256,
        alt: "Mesa Moving Experts - Insured Moving Company",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-26T20:45:27+00:00",
    modifiedTime: "2025-08-16T15:52:56+00:00",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Reliable Mesa AZ Moving Company | Local & Long-Distance Movers",
    description: "Looking for trusted movers in Mesa, AZ? We offer professional local and long-distance moving services at affordable rates. Call now for a free quote!",
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
    "Mesa AZ moving company",
    "Mesa movers",
    "local movers Mesa",
    "long distance movers Arizona",
    "professional movers Mesa",
    "affordable moving services",
    "Mesa relocation services",
  ],
  
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Moving Services",
};