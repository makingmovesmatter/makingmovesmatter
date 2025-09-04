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
    "/images/scottedeal1.png";
  const headerText1 = "movers in";
  const headerText2 = "scottsdale, az" ;
  const headerDesc = "Click Now to Book Your Move" ;
  return (
    <div>
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc ={headerDesc} />
      <Section1 />
      <HowItWorksSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Faq />
    </div>
  )
}

export default page



export const metadata = {
  title: "Scottsdale AZ | Making Moves Matter | Mesamovingexperts.com",
  description: "Are you planning a move to or from Scottsdale, AZ? At Making Moves Matter, we specialize in delivering top-notch moving services",
  
  metadataBase: new URL("https://mesamovingexperts.com"),
  
  alternates: {
    canonical: "/scottsdale-az/",
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
    title: "Scottsdale AZ | Making Moves Matter | Mesamovingexperts.com",
    description: "Are you planning a move to or from Scottsdale, AZ? At Making Moves Matter, we specialize in delivering top-notch moving services",
    url: "https://mesamovingexperts.com/scottsdale-az/",
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
    publishedTime: "2022-05-26T20:27:33+00:00",
    modifiedTime: "2025-08-16T15:54:47+00:00",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Scottsdale AZ | Making Moves Matter | Mesamovingexperts.com",
    description: "Are you planning a move to or from Scottsdale, AZ? At Making Moves Matter, we specialize in delivering top-notch moving services",
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
    "Scottsdale AZ moving company",
    "Scottsdale movers",
    "local movers Scottsdale",
    "long distance movers Arizona",
    "professional movers Scottsdale",
    "affordable moving services",
    "Scottsdale relocation services",
    "residential movers Scottsdale",
    "commercial movers Scottsdale",
  ],
  
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Moving Services",
};