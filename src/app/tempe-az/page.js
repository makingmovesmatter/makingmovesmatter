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
    "/images/temp1.png";
  const headerText1 = "Movers in";
  const headerText2 = "tempe, az" ;
  const headerDesc = "Click to Schedule Your Move" ;
  return (
    <div>
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc ={headerDesc} />
      <Section1 />
      <HowItWorksSection />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Faq />
    </div>
  )
}

export default page



export const metadata = {
  title: "Tempe AZ Moving Services | Making Moves Matter | Mesa Moving Experts",
  description:
    "Planning a move to or from Tempe, AZ? Mesa Moving Experts provides professional, affordable, and stress-free moving services including residential, commercial, and packing solutions.",

  metadataBase: new URL("https://mesamovingexperts.com"),

  alternates: {
    canonical: "/tempe-az/",
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
    title: "Tempe AZ Moving Services | Making Moves Matter",
    description:
      "Trusted Tempe AZ movers offering residential, office relocation, packing, and storage services. Get stress-free moving with Mesa Moving Experts.",
    url: "https://mesamovingexperts.com/tempe-az/",
    siteName: "Mesa Moving Experts",
    images: [
      {
        url: "/images/logo.png",
        width: 400,
        height: 400,
        alt: "Mesa Moving Experts Logo",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-26T20:23:24+00:00",
    modifiedTime: "2025-08-16T15:55:27+00:00",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tempe AZ Moving Services | Mesa Moving Experts",
    description:
      "Mesa Moving Experts provides top-quality moving services in Tempe, AZ including residential, commercial, packing, and storage solutions.",
    images: ["/images/logo.png"],
    creator: "@MesaMoving",
  },

  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  keywords: [
    "Tempe AZ movers",
    "moving company Tempe Arizona",
    "Mesa Moving Experts",
    "residential moving Tempe",
    "commercial moving Tempe AZ",
    "packing services Tempe",
    "affordable movers Tempe AZ",
    "long distance moving Tempe",
  ],

  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Moving Services",
};
