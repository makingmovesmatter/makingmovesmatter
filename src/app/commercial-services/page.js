import React from "react";
import Section2 from "../components/commercial/section2";
import Header from "../components/header";
import Section1 from "../components/commercial/section1";
import ServiceSection from "../components/servicesection";
import Section4 from "../components/commercial/section4";
import HowItWorksSection from "../components/home/HowItWorksSection";
import Faq from "../components/faq";
import Section5 from "../components/home/section5";
import Section3 from "../components/home/section3";

const Commercial = () => {

  const headerImg =
    "/images/commarcial1.png";
  const headerText1 = "Commercial";
  const headerText2 = "Moving Services" ;
  const headerDesc = "Efficient, reliable commercial moving, safely relocating offices, equipment, and furniture with minimal downtime." ;
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
  );
};

export default Commercial;




export const metadata = {
  title: "Commercial Moving Services in Mesa AZ | Making Moves Matter",
  description:
    "Looking to move your business or office in Mesa, AZ? Mesa Moving Experts provides professional commercial moving, office relocation, and corporate moving services to ensure a stress-free transition.",
  keywords: [
    "commercial moving services Mesa AZ",
    "office relocation Mesa",
    "business movers Arizona",
    "corporate relocation Mesa AZ",
    "professional office movers",
    "Mesa commercial moving company",
    "business relocation services",
  ],
  category: "Commercial Moving Services",
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  creator: "Mesa Moving Experts",
  publisher: "Mesa Moving Experts",

  metadataBase: new URL("https://mesamovingexperts.com"),

  alternates: {
    canonical: "/commercial-services/",
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
    title: "Commercial Moving Services in Mesa AZ | Making Moves Matter",
    description:
      "Mesa Moving Experts provides reliable commercial moving services in Mesa, AZ — from office relocations to corporate moves. Get a stress-free moving experience for your business.",
    url: "https://mesamovingexperts.com/commercial-services/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png", // replace WP paths with clean logo
        width: 500,
        height: 300,
        alt: "Mesa Moving Experts - Commercial Moving Services",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2021-11-15T15:56:39+00:00",
    modifiedTime: "2025-08-18T17:55:29+00:00",
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Moving Services in Mesa AZ | Making Moves Matter",
    description:
      "Need commercial movers in Mesa, AZ? Hire Mesa Moving Experts for office relocation, business moves, and corporate moving services you can trust.",
    images: ["/images/logo.png"],
    creator: "@MesaMoving",
  },

  other: {
    "article:modified_time": "2025-08-18T17:55:29+00:00",
    "twitter:label1": "Est. reading time",
    "twitter:data1": "4 minutes",
    "business:contact_data:street_address": "Mesa, AZ",
    "business:contact_data:locality": "Mesa",
    "business:contact_data:region": "Arizona",
    "business:contact_data:postal_code": "85201", // update if you have real ZIP
    "business:contact_data:country_name": "USA",
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
        rel: "manifest",
        url: "/favicon/site.webmanifest",
      },
      {
        rel: "mask-icon",
        url: "/images/logo.png",
        color: "#5bbad5",
      },
      {
        rel: "msapplication-TileImage",
        url: "/images/logo.png",
      },
    ],
  },

  themeColor: "#ffffff",
};

