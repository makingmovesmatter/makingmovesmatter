import React from "react";
import Header from "../components/header";
import Section1 from "./section1";
import Section2 from "./section2";
import HowItWorksSection from "../components/home/HowItWorksSection";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Faq from "../components/faq";

const page = () => {
  const headerImg = "/images/santan1.png";
  const headerText1 = "Expert Movers";
  const headerText2 = "in San Tan Valley";
  const headerDesc =
    "Professional movers in San Tan Valley for homes, offices & long-distance moves";

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

// --- SEO metadata for San Tan Valley ---
export const metadata = {
  title: "San Tan Valley AZ | Making Moves Matter | Mesamovingexperts.com",
  description:
    "Looking for dependable and professional movers in San Tan Valley? Making Moves Matter delivers stress-free local and long-distance moving services.",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/san-tan-valley-az/",
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
    title: "San Tan Valley AZ | Making Moves Matter | Mesamovingexperts.com",
    description:
      "Looking for dependable and professional movers in San Tan Valley? Making Moves Matter delivers stress-free local and long-distance moving services.",
    url: "https://mesamovingexperts.com/san-tan-valley-az/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 300,
        height: 201,
        alt: "San Tan Valley AZ - Mesa Moving Experts",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Tan Valley AZ | Making Moves Matter | Mesamovingexperts.com",
    description:
      "Looking for dependable and professional movers in San Tan Valley? Making Moves Matter delivers stress-free local and long-distance moving services.",
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
    "San Tan Valley AZ moving company",
    "San Tan Valley movers",
    "local movers San Tan Valley",
    "long distance movers Arizona",
    "professional movers San Tan Valley",
    "affordable moving services",
    "San Tan Valley relocation services",
    "residential movers San Tan Valley",
    "commercial movers San Tan Valley",
    "dependable movers",
  ],
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Moving Services",
};
