import React from "react";
import Header from "@/app/components/header";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";
import Section9 from "./section9";
import Section10 from "./section10";
import Section11 from "./section11";
import Section12 from "./section12";
import Section13 from "./section13";
import TempeSchema from "./TempeSchema";

const TempePage = () => {
  const headerImg = "/images/tempe-truck-branded.jpg";
  const headerText1 = "Making Moves Matter";
  const headerText2 = "Tempe Moving AZ";
  const headerDesc =
    "Delivering Top-Tier, Stress-Free Relocation Services Across Tempe and the Surrounding Metro Area | Licensed & Insured";

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Search Engine Structured Data */}
      <TempeSchema />

      {/* Hero Header with Branded Truck Image and Multi-Step Quote System */}
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* 1. Introduction, Trusted Status & 4 Core Specialties */}
      <Section1 />

      {/* 2. How It Works Relocation Workflow */}
      <HowItWorksSection />

      {/* 3. Our Tempe Moving Services Include (5 Core Services Grid) */}
      <Section2 />

      {/* 4. Residential Moving: Reliable Local & Long-Distance for Houses, Condos & Apartments */}
      <Section3 />

      {/* 5. Commercial and Office Relocations in Tempe, AZ */}
      <Section4 />

      {/* 6. Specialty Item Moving, Packing & Secure Storage Options */}
      <Section5 />

      {/* 7. Long-Distance Moves with Confidence & Trust Stats */}
      <Section6 />

      {/* 8. Why Choose Our Tempe Moving Company? (5 Pillars & Verified Review) */}
      <Section7 />

      {/* 9. A Rich History of Tempe, AZ (Hohokam, Hayden's Ferry, ASU & Innovation) */}
      <Section8 />

      {/* 10. Fun Things to Do in Tempe, AZ (14 Filtered Attractions Across 4 Categories) */}
      <Section9 />

      {/* 11. Essential Moving Tips for Tempe Residents (ASU Rush, Elevators & Heat) */}
      <Section10 />

      {/* 12. Neighborhoods We Serve in Tempe, AZ (Downtown Tempe, Town Lake & 6 ZIP Codes) */}
      <Section11 />

      {/* 13. FAQ About Moving Services in Tempe, AZ (Interactive Framer Accordion) */}
      <Section12 />

      {/* 14. High-Conversion Bottom CTA Banner */}
      <Section13 />
    </main>
  );
};

export default TempePage;

export const metadata = {
  title: "Top Tempe Moving Company AZ | Making Moves Matter | Local & Long-Distance",
  description:
    "Planning a move to or from Tempe, AZ? Making Moves Matter delivers stress-free residential, commercial, packing, storage & long-distance moving. Call (480) 934-8218!",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/az/tempe",
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
    title: "Top Tempe Moving Company AZ | Making Moves Matter",
    description:
      "Expert Tempe movers for houses, apartments, student lofts, and office moves. Transparent flat-rate pricing with zero hidden fees. Call (480) 934-8218 for a free quote!",
    url: "https://mesamovingexperts.com/az/tempe",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/tempe-truck-branded.jpg",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter - Trusted Tempe Moving Company in Arizona",
      },
      {
        url: "/images/logo.png",
        width: 380,
        height: 256,
        alt: "Making Moves Matter Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Tempe Moving Company AZ | Making Moves Matter",
    description:
      "Planning a move in Tempe, AZ? Making Moves Matter provides licensed, insured, and professional moving services. Call (480) 934-8218 for a free quote!",
    images: ["/images/tempe-truck-branded.jpg"],
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
        sizes: "270x270",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "Tempe moving company",
    "movers in Tempe AZ",
    "best moving company in Tempe",
    "Tempe residential moving",
    "commercial movers Tempe",
    "ASU student movers Tempe",
    "Tempe apartment movers",
    "climate controlled storage Tempe",
    "long distance moving Tempe AZ",
    "Mill Avenue moving company",
    "Downtown Tempe movers"
  ],
};
