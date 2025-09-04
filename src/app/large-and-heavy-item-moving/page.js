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
    "/images/largehavy1.png";
  const headerText1 = "Large and Heavy";
  const headerText2 = "Item Moving" ;
  const headerDesc = "Safe, reliable moving service for large and heavy household items." ;
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
  title: "Large and Heavy Item Moving Services in Mesa AZ | Making Moves",
  description:
    "If you find it hard to pack your heavy items and load them onto the truck, hire our large and heavy item moving services in Mesa AZ.",

  metadataBase: new URL("https://mesamovingexperts.com"),

  alternates: {
    canonical: "/large-and-heavy-item-moving/",
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
    title: "Large and Heavy Item Moving Services in Mesa AZ | Making Moves",
    description:
      "Hire expert movers in Mesa AZ for large and heavy items. Safe, efficient, and reliable moving solutions tailored to your needs.",
    url: "https://mesamovingexperts.com/large-and-heavy-item-moving/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png", // ✅ using your logo instead of WP uploads
        width: 600,
        height: 400,
        alt: "Large and Heavy Item Moving Services in Mesa AZ - Mesa Moving Experts",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-23T19:14:04+00:00",
    modifiedTime: "2025-08-16T18:25:47+00:00",
  },

  twitter: {
    card: "summary_large_image",
    title: "Large and Heavy Item Moving Services in Mesa AZ | Making Moves",
    description:
      "Need help moving heavy furniture or bulky equipment? Mesa Moving Experts provides professional large and heavy item moving services in Mesa AZ.",
    images: ["/images/logo.png"], // ✅ same logo
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
    "heavy item moving Mesa AZ",
    "large furniture movers Mesa",
    "professional heavy movers Mesa",
    "bulky item relocation Mesa AZ",
    "large item moving services Mesa",
    "Mesa AZ heavy furniture transport",
    "appliance moving services Mesa AZ",
  ],

  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Large and Heavy Item Moving Services",
};
