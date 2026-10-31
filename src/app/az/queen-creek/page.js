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
import QueenCreekSchema from "./QueenCreekSchema";

const QueenCreekPage = () => {
  const headerImg = "/images/queen-creek-truck-branded.png";
  const headerText1 = "Making Moves Matter";
  const headerText2 = "Queen Creek AZ";
  const headerDesc =
    "Professional, Full-Service Relocation Solutions for Queen Creek Homes, Equestrian Ranches & Businesses | Licensed & Insured";

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Search Engine Structured Data */}
      <QueenCreekSchema />

      {/* Hero Header with Branded Truck Image and Multi-Step Quote System */}
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* 1. Introduction, 15 Years Experience & 4 Core Specialties */}
      <Section1 />

      {/* 2. How It Works Relocation Workflow */}
      <HowItWorksSection />

      {/* 3. Queen Creek Moving Services Include (5 Core Services Grid) */}
      <Section2 />

      {/* 4. Residential Moving: Local & Long-Distance for Houses, Ranches & Condos */}
      <Section3 />

      {/* 5. Commercial and Office Relocations in Queen Creek, AZ */}
      <Section4 />

      {/* 6. Specialty Item Moving (Safes, Pianos, Spas), Packing & Climate-Controlled Storage */}
      <Section5 />

      {/* 7. Long-Distance Moves with Confidence & Trust Stats */}
      <Section6 />

      {/* 8. Why Choose Our Queen Creek Moving Company? (5 Pillars & Verified Review) */}
      <Section7 />

      {/* 9. A Rich History of Queen Creek, AZ (Akimel O'odham, Homesteaders, Town Incorporation) */}
      <Section8 />

      {/* 10. Fun Things to Do in Queen Creek (11 Filtered Attractions Across 4 Categories) */}
      <Section9 />

      {/* 11. Essential Moving Tips for Queen Creek Residents (HOA, Ranch Drives, Desert Heat) */}
      <Section10 />

      {/* 12. Neighborhoods We Serve in Queen Creek, AZ (Montelena, Hastings Farms & 3 ZIPs) */}
      <Section11 />

      {/* 13. FAQ About Moving Services in Queen Creek, AZ (Interactive Framer Accordion) */}
      <Section12 />

      {/* 14. High-Conversion Bottom CTA Banner with Free Quote Options */}
      <Section13 />
    </main>
  );
};

export default QueenCreekPage;

export const metadata = {
  title: "Top Queen Creek Moving Company AZ | Making Moves Matter | Local & Long-Distance",
  description:
    "Planning a move in Queen Creek, AZ? Making Moves Matter delivers premier residential, commercial, equestrian estate, packing & climate storage. Call (480) 934-8218!",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/az/queen-creek",
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
    title: "Top Queen Creek Moving Company AZ | Making Moves Matter",
    description:
      "Trusted local Queen Creek movers with 15+ years of experience. Licensed & insured with a trained crew for homes, ranches, and offices across Queen Creek, AZ.",
    url: "https://mesamovingexperts.com/az/queen-creek",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/queen-creek-truck-branded.png",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter - Trusted Queen Creek Moving Company in Arizona",
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
    title: "Top Queen Creek Moving Company AZ | Making Moves Matter",
    description:
      "Dependable Queen Creek movers with 15+ years experience, licensed & insured. Call (480) 934-8218 for a free quote!",
    images: ["/images/queen-creek-truck-branded.png"],
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
    "Queen Creek moving company",
    "movers in Queen Creek AZ",
    "best moving company in Queen Creek",
    "local Queen Creek movers",
    "Queen Creek residential moving",
    "commercial movers Queen Creek",
    "heavy item movers Queen Creek",
    "equestrian estate moving Queen Creek",
    "Montelena movers",
    "Hastings Farms moving company",
    "climate controlled storage Queen Creek",
    "long distance moving Queen Creek AZ",
  ],
};
