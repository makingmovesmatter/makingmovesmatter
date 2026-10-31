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
import SanTanValleySchema from "./SanTanValleySchema";

const SanTanValleyPage = () => {
  const headerImg = "/images/san-tan-valley-truck-branded.png";
  const headerText1 = "Making Moves Matter";
  const headerText2 = "San Tan Valley AZ";
  const headerDesc =
    "Dependable Residential, Commercial & Long-Distance Movers in San Tan Valley, AZ | Licensed, Insured & 15+ Years Experience";

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Search Engine Structured Data */}
      <SanTanValleySchema />

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

      {/* 3. San Tan Valley Moving Services Include (5 Core Services Grid) */}
      <Section2 />

      {/* 4. Residential Moving: Local & Long-Distance for Houses, Golf Communities & Condos */}
      <Section3 />

      {/* 5. Commercial and Office Relocations in San Tan Valley, AZ */}
      <Section4 />

      {/* 6. Specialty Item Moving (Safes, Pianos, Spas), Packing & Climate-Controlled Storage */}
      <Section5 />

      {/* 7. Long-Distance Moves with Confidence & Trust Stats */}
      <Section6 />

      {/* 8. Why Choose Our San Tan Valley Moving Company? (5 Pillars & Verified Review) */}
      <Section7 />

      {/* 9. A Rich History of San Tan Valley, AZ (Foothills, Poston Butte, Modern Metropolis) */}
      <Section8 />

      {/* 10. Fun Things to Do in San Tan Valley (11 Filtered Attractions Across 4 Categories) */}
      <Section9 />

      {/* 11. Essential Moving Tips for San Tan Valley Residents (Hunt Hwy, HOA, Heat) */}
      <Section10 />

      {/* 12. Neighborhoods We Serve in San Tan Valley, AZ (Johnson Ranch, San Tan Heights & 3 ZIPs) */}
      <Section11 />

      {/* 13. FAQ About Moving Services in San Tan Valley, AZ (Interactive Framer Accordion) */}
      <Section12 />

      {/* 14. High-Conversion Bottom CTA Banner with Free Quote Options */}
      <Section13 />
    </main>
  );
};

export default SanTanValleyPage;

export const metadata = {
  title: "Top San Tan Valley Moving Company AZ | Making Moves Matter | Local & Long-Distance",
  description:
    "Looking for dependable movers in San Tan Valley, AZ? Making Moves Matter provides residential, golf estate, commercial, heavy items & storage. Call (480) 934-8218!",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/az/san-tan-valley",
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
    title: "Top San Tan Valley Moving Company AZ | Making Moves Matter",
    description:
      "Trusted local San Tan Valley movers with 15+ years experience, licensed & insured with trained crews. Residential, golf villa, commercial & climate storage across San Tan Valley, AZ.",
    url: "https://mesamovingexperts.com/az/san-tan-valley",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/san-tan-valley-truck-branded.png",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter - Trusted San Tan Valley Moving Company in Arizona",
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
    title: "Top San Tan Valley Moving Company AZ | Making Moves Matter",
    description:
      "Dependable San Tan Valley movers with 15+ years experience, licensed & insured. Call (480) 934-8218 for a free quote!",
    images: ["/images/san-tan-valley-truck-branded.png"],
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
    "San Tan Valley moving company",
    "movers in San Tan Valley AZ",
    "best moving company in San Tan Valley",
    "local San Tan Valley movers",
    "San Tan Valley residential moving",
    "commercial movers San Tan Valley",
    "Johnson Ranch movers",
    "San Tan Heights moving company",
    "Copper Basin movers",
    "heavy item movers San Tan Valley",
    "climate controlled storage San Tan Valley",
    "long distance moving San Tan Valley AZ",
  ],
};
