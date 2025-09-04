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
    "/images/hottubbanner.png";
  const headerText1 = "hot tub";
  const headerText2 = "relocation" ;
  const headerDesc = "Professional hot tub relocation with safe handling and secure transport." ;
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
  title: "Reliable Hot Tub Relocation Services in Mesa AZ | Moving Matter",
  description:
    "Whether you want to move your hot tub within your garden or relocate it to a new home, we provide reliable hot tub relocation services in Mesa AZ.",

  metadataBase: new URL("https://mesamovingexperts.com"),

  alternates: {
    canonical: "/hot-tub-relocation/",
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
    title: "Reliable Hot Tub Relocation Services in Mesa AZ | Moving Matter",
    description:
      "Professional hot tub movers in Mesa AZ. Safe, efficient, and stress-free relocation services for your hot tub.",
    url: "https://mesamovingexperts.com/hot-tub-relocation/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 600,
        height: 400,
        alt: "Reliable Hot Tub Relocation Services in Mesa AZ - Mesa Moving Experts",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2022-05-26T14:22:58+00:00",
    modifiedTime: "2025-08-16T18:24:06+00:00",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reliable Hot Tub Relocation Services in Mesa AZ | Moving Matter",
    description:
      "Expert hot tub relocation services in Mesa AZ. Get your hot tub moved safely and professionally.",
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
    "hot tub relocation Mesa AZ",
    "spa movers Mesa AZ",
    "hot tub moving services Mesa",
    "professional hot tub movers",
    "jacuzzi relocation Mesa AZ",
    "backyard spa moving Mesa",
    "heavy spa movers Mesa AZ",
  ],

  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Hot Tub Relocation Services",
};
