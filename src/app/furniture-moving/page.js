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
    "/images/farniturMovindBanner.png";
  const headerText1 = "Furniture";
  const headerText2 = "Moving" ;
  const headerDesc = "We are a one stop solution and customized service provider for all moving need for our all customers" ;
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
  title: "Reliable Furniture Moving Services in Mesa AZ | Furniture Moving",
  description:
    "Looking for trusted furniture moving services in Mesa AZ? Our experts specialize in moving office equipment, home furniture, and fragile items safely and efficiently.",

  metadataBase: new URL("https://mesamovingexperts.com"),

  alternates: {
    canonical: "/furniture-moving/",
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
    title: "Reliable Furniture Moving Services in Mesa AZ | Furniture Moving",
    description:
      "Need professional furniture movers in Mesa AZ? We handle residential and commercial furniture moving with care, reliability, and efficiency.",
    url: "https://mesamovingexperts.com/furniture-moving/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png", // ✅ using your logo
        width: 600,
        height: 400,
        alt: "Professional Furniture Moving Services in Mesa AZ - Mesa Moving Experts",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-23T19:09:40+00:00",
    modifiedTime: "2025-08-16T18:17:56+00:00",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reliable Furniture Moving Services in Mesa AZ | Furniture Moving",
    description:
      "Hire expert furniture movers in Mesa AZ. Mesa Moving Experts provides professional office, home, and fragile furniture moving services.",
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
    "furniture moving services Mesa AZ",
    "professional furniture movers Mesa",
    "office furniture moving Mesa",
    "residential furniture moving Mesa",
    "furniture relocation services Mesa AZ",
    "furniture transport services Mesa",
    "safe furniture moving company Mesa AZ",
  ],

  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Furniture Moving Services",
};
