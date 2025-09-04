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
    "/images/furnitureassemblybanner.png";
  const headerText1 = "Furniture";
  const headerText2 = "Assembly" ;
  const headerDesc = "Our professional furniture assembly service provides fast, reliable, and hassle-free setup for beds, tables, wardrobes, and more, ensuring every piece is sturdy, safe, and ready to use." ;
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
  title: "Reliable Furniture Assembly Services in Mesa AZ | Moving Service",
  description:
    "Looking for professional furniture assembly services in Mesa AZ? We provide expert furniture disassembly, reassembly, and installation to make your move stress-free.",

  metadataBase: new URL("https://mesamovingexperts.com"),

  alternates: {
    canonical: "/furniture-assembly/",
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
    title: "Reliable Furniture Assembly Services in Mesa AZ | Moving Service",
    description:
      "Need reliable furniture assembly in Mesa AZ? Our experts handle disassembly, reassembly, and setup for a seamless moving experience.",
    url: "https://mesamovingexperts.com/furniture-assembly/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png", // ✅ using your logo
        width: 600,
        height: 400,
        alt: "Furniture Assembly Services in Mesa AZ by Mesa Moving Experts",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-23T19:11:55+00:00",
    modifiedTime: "2025-08-16T18:16:29+00:00",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reliable Furniture Assembly Services in Mesa AZ | Moving Service",
    description:
      "Hire Mesa Moving Experts for professional furniture assembly services in Mesa AZ. Disassembly, reassembly, and installation done right.",
    images: ["/images/logo.png"], // ✅ consistent with OG
    creator: "@MesaMoving",
  },

  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  keywords: [
    "furniture assembly services Mesa AZ",
    "furniture assembly Mesa",
    "furniture disassembly and reassembly",
    "furniture installation Mesa",
    "IKEA furniture assembly Mesa AZ",
    "professional furniture assembly Mesa",
    "furniture setup services Mesa AZ",
  ],

  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Furniture Assembly Services",
};
