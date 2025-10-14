import React from 'react';
import Header from '../components/header';
import Section1 from './section1';
import Section2 from './section2';
import HowItWorksSection from '../components/home/HowItWorksSection';
import Faq from '../components/faq';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';

const page = () => {
  const headerImg = "/images/queen-creek1.png";
  const headerText1 = "Expert movers";
  const headerText2 = "in Queen Creek";
  const headerDesc = "Expert movers in Queen Creek for homes, offices & long-distance moves";

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
      <Section3 />
      <Section4 />
      <Section5 />
      <Faq />
    </div>
  );
};

export default page;

export const metadata = {
  title: "Queen Creek AZ | Making Moves Matter | Mesamovingexperts.com",
  description:
    "Are you looking for dependable and professional movers in Queen Creek to handle your relocation? At Making Moves Matter we pride ourselves on providing top-notch moving services across Arizona.",
  
  metadataBase: new URL("https://mesamovingexperts.com"),
  
  alternates: {
    canonical: "/queen-creek-az/",
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
    title: "Queen Creek AZ | Making Moves Matter | Mesamovingexperts.com",
    description:
      "Are you looking for dependable and professional movers in Queen Creek to handle your relocation? At Making Moves Matter we pride ourselves on providing reliable, affordable moving services.",
    url: "https://mesamovingexperts.com/queen-creek-az/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 300,
        height: 201,
        alt: "Queen Creek AZ - Mesa Moving Experts",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-06-06T19:54:27+00:00",
    modifiedTime: "2025-08-16T15:56:38+00:00",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Queen Creek AZ | Making Moves Matter | Mesamovingexperts.com",
    description:
      "Need professional movers in Queen Creek? Making Moves Matter delivers dependable, affordable, and stress-free relocation services.",
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
    "Queen Creek AZ moving company",
    "Queen Creek movers",
    "local movers Queen Creek",
    "long distance movers Arizona",
    "professional movers Queen Creek",
    "affordable moving services",
    "Queen Creek relocation services",
    "residential movers Queen Creek",
    "commercial movers Queen Creek",
    "dependable movers",
  ],
  
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Moving Services",
};
