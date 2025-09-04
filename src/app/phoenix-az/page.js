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
    "/images/phoenix1.png";
  const headerText1 = "Expert movers";
  const headerText2 = "in phoenix" ;
  const headerDesc = "Expert movers in Phoenix for homes, offices & long-distance moves" ;
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
  title: "Phoenix AZ | Making Moves Matter | Mesamovingexperts.com",
  description: "Are you looking for dependable and professional movers in Phoenix to handle your relocation? At Making Moves Matter we pride ourselves",
  
  metadataBase: new URL("https://mesamovingexperts.com"),
  
  alternates: {
    canonical: "/phoenix-az/",
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
    title: "Phoenix AZ | Making Moves Matter | Mesamovingexperts.com",
    description: "Are you looking for dependable and professional movers in Phoenix to handle your relocation? At Making Moves Matter we pride ourselves",
    url: "https://mesamovingexperts.com/phoenix-az/",
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
    publishedTime: "2022-06-06T19:54:27+00:00",
    modifiedTime: "2025-08-16T15:56:38+00:00",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Phoenix AZ | Making Moves Matter | Mesamovingexperts.com",
    description: "Are you looking for dependable and professional movers in Phoenix to handle your relocation? At Making Moves Matter we pride ourselves",
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
    "Phoenix AZ moving company",
    "Phoenix movers",
    "local movers Phoenix",
    "long distance movers Arizona",
    "professional movers Phoenix",
    "affordable moving services",
    "Phoenix relocation services",
    "residential movers Phoenix",
    "commercial movers Phoenix",
    "dependable movers",
  ],
  
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Moving Services",
};