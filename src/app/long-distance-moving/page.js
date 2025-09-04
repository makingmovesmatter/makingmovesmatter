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
    "/images/longdistance.png";
  const headerText1 = "Long Distance";
  const headerText2 = "Movers" ;
  const headerDesc = "Trusted long distance movers ensuring safe, smooth, stress-free relocation." ;
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



export const metadata= {
  title: "Affordable Long Distance Moving Services in Mesa AZ",
  description:
    "Are you planning to move out of state to the Southwest or across the country? Our affordable long distance moving services in Mesa AZ are here to help.",

  metadataBase: new URL("https://mesamovingexperts.com"),

  alternates: {
    canonical: "/long-distance-moving/",
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
    title: "Affordable Long Distance Moving Services in Mesa AZ",
    description:
      "Trusted Mesa AZ long distance movers. Professional, reliable, and affordable moving services for cross-country and interstate relocations.",
    url: "https://mesamovingexperts.com/long-distance-moving/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png", // ✅ your logo instead of WP uploads
        width: 600,
        height: 400,
        alt: "Affordable Long Distance Moving Services in Mesa AZ",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-23T19:16:29+00:00",
    modifiedTime: "2025-08-16T15:43:09+00:00",
  },

  twitter: {
    card: "summary_large_image",
    title: "Affordable Long Distance Moving Services in Mesa AZ",
    description:
      "Planning a long distance move? Mesa Moving Experts offer safe and affordable interstate and cross-country moving services.",
    images: ["/images/logo.png"],
    creator: "@MesaMoving",
  },

  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "icon", url: "/images/logo.png", sizes: "512x512", type: "image/png" },
    ],
  },

  keywords: [
    "long distance moving Mesa AZ",
    "cross country movers Mesa",
    "affordable long distance moving",
    "Mesa AZ interstate movers",
    "professional long distance movers",
    "moving out of state Mesa AZ",
    "reliable long distance moving company",
  ],

  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Long Distance Moving Services",
};
