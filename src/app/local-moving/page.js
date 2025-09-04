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
    "/images/localmoving1.png";
  const headerText1 = "Local Moving";
  const headerText2 = "In AZ" ;
  const headerDesc = "Affordable local moving services in AZ for stress-free relocation." ;
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
  title: "Top Notch Local Moving Services in Mesa, AZ | Local Moving USA",
  description:
    "Make your local move stress-free and efficient with our professional movers in Mesa, AZ. Reliable, fast, and secure local moving services.",
  
  metadataBase: new URL("https://mesamovingexperts.com"),
  
  alternates: {
    canonical: "/local-moving/",
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
    title: "Top Notch Local Moving Services in Mesa, AZ | Local Moving USA",
    description:
      "Make your local move stress-free and efficient with our professional movers in Mesa, AZ. Reliable, fast, and secure local moving services.",
    url: "https://mesamovingexperts.com/local-moving/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 300,
        height: 198,
        alt: "Reliable Local Moving Services in Mesa, AZ",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-23T19:11:02+00:00",
    modifiedTime: "2025-08-16T18:27:55+00:00",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Top Notch Local Moving Services in Mesa, AZ | Local Moving USA",
    description:
      "Make your local move stress-free and efficient with our professional movers in Mesa, AZ. Reliable, fast, and secure local moving services.",
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
      { rel: "icon", url: "/images/logo.png", sizes: "270x270", type: "image/png" },
    ],
  },
  
  keywords: [
    "local moving services Mesa AZ",
    "local movers Mesa",
    "residential moving services",
    "apartment moving",
    "house moving",
    "local relocation",
    "Mesa moving company",
  ],
  
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Local Moving Services",
};
