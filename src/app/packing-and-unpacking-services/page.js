import React from 'react'
import Header from '../components/header';
import Section1 from './section1';
import Section2 from './section2';
import HowItWorksSection from '../components/home/HowItWorksSection';
import Section4 from '../components/commercial/section4';
import ServiceSection from '../components/servicesection';
import Section5 from '../components/home/section5';
import Section3 from '../components/home/section3';
import Faq from '../components/faq';

const page = () => {
  const headerImg =
    "/images/pakingunpaking1.png";
  const headerText1 = "Packing";
  const headerText2 = "And Unpacking" ;
  const headerDesc = "Efficient packing and unpacking services for safe, organized moves." ;
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
  )
}

export default page




export const metadata = {
  title: "Professional Packing and Unpacking Services in Mesa AZ",
  description: "If you find it hard to pack your things or you don't have time to do it, hire our professional packing and unpacking services in Mesa AZ.",
  
  metadataBase: new URL("https://mesamovingexperts.com"),
  
  alternates: {
    canonical: "/packing-and-unpacking-services/",
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
    title: "Professional Packing and Unpacking Services in Mesa AZ",
    description: "If you find it hard to pack your things or you don't have time to do it, hire our professional packing and unpacking services in Mesa AZ.",
    url: "https://mesamovingexperts.com/packing-and-unpacking-services/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 300,
        height: 198,
        alt: "Mesa Moving Experts - Professional Packing Services",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-23T19:17:54+00:00",
    modifiedTime: "2025-08-16T15:48:19+00:00",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Professional Packing and Unpacking Services in Mesa AZ",
    description: "If you find it hard to pack your things or you don't have time to do it, hire our professional packing and unpacking services in Mesa AZ.",
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
    "packing services Mesa AZ",
    "unpacking services",
    "professional packing",
    "moving packing services",
    "residential packing",
    "office packing services",
    "Mesa packing company",
  ],
  
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Packing and Unpacking Services",
};