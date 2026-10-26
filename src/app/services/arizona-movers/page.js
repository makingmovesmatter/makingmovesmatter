import React from "react";
import Header from "@/app/components/header";
import Section1 from "@/app/components/arizona-movers/section1";
import Section2 from "@/app/components/arizona-movers/section2";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import Section4 from "@/app/components/commercial/section4";
import ServiceSection from "@/app/components/servicesection";
import Section5 from "@/app/components/home/section5";
import Section3 from "@/app/components/home/section3";
import Faq from "@/app/components/faq";

export const metadata = {
  title: "Professional Arizona Movers | Licensed & Insured | Making Moves Matter",
  description:
    "Looking for the best movers in Arizona? Making Moves Matter provides statewide residential, commercial, local, and long-distance moving solutions. Get your free quote!",
  keywords: [
    "Arizona movers",
    "best moving company Arizona",
    "Mesa movers",
    "Phoenix moving company",
    "statewide Arizona moving",
    "Making Moves Matter",
  ],
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/arizona-movers",
  },
  openGraph: {
    title: "Professional Arizona Movers | Licensed & Insured | Making Moves Matter",
    description:
      "Statewide moving services across Arizona. Top-rated, licensed, and insured movers in Mesa, Phoenix, Chandler, Gilbert, Scottsdale, and Tempe.",
    url: "https://mesamovingexperts.com/services/arizona-movers",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/az-fleet-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter Arizona Moving Fleet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const ArizonaMovers = () => {
  const headerImg = "/images/az-fleet-hero.jpg";
  const headerText1 = "Licensed Arizona Movers";
  const headerText2 = "Making Moves Matter";
  const headerDesc =
    "Dependable moving services across Mesa, the East Valley, and the entire state of Arizona. Over 15 years of excellence and 5-star customer reviews.";

  return (
    <div>
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />
      <Section1 />
      <Section2 />
      <HowItWorksSection />
      <Section4
        title="Why Making Moves Matter is Arizona's Top Moving Choice"
        subtitle="Transparent pricing, prompt communication, and a dedicated team that cares for your items like their own."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default ArizonaMovers;
