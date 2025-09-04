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
    "/images/storage1.png";
  const headerText1 = "Storage";
  const headerText2 = "Service" ;
  const headerDesc = "Secure, convenient storage solutions for short or long-term needs." ;
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
  title: "Secure Storage Services in Mesa AZ | Equipped Storage Facility",
  description: "If you are in search of a world-class secure storage services in Mesa AZ facility for temporarily storing your goods during transportation.",
  
  metadataBase: new URL("https://mesamovingexperts.com"),
  
  alternates: {
    canonical: "/storage/",
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
    title: "Secure Storage Services in Mesa AZ | Equipped Storage Facility",
    description: "If you are in search of a world-class secure storage services in Mesa AZ facility for temporarily storing your goods during transportation.",
    url: "https://mesamovingexperts.com/storage/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 300,
        height: 198,
        alt: "Mesa Moving Experts - Secure Storage Services",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-26T14:20:21+00:00",
    modifiedTime: "2025-08-16T15:49:55+00:00",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Secure Storage Services in Mesa AZ | Equipped Storage Facility",
    description: "If you are in search of a world-class secure storage services in Mesa AZ facility for temporarily storing your goods during transportation.",
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
    "secure storage services Mesa AZ",
    "storage facility Mesa",
    "temporary storage",
    "moving storage solutions",
    "climate controlled storage",
    "warehouse storage",
    "Mesa storage units",
  ],
  
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Storage Services",
};