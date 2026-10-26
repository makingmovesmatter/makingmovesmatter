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
import PhoenixSchema from "./PhoenixSchema";

const PhoenixPage = () => {
  const headerImg = "/images/phoenix-truck-branded.jpg";
  const headerText1 = "Making Moves Matter";
  const headerText2 = "Phoenix Moving AZ";
  const headerDesc =
    "Local Phoenix Movers with 15 Years of Experience, Licensed & Insured, with a Trained Crew";

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Search Engine Structured Data */}
      <PhoenixSchema />

      {/* Hero Header with Branded Truck Image and Multi-Step Quote System */}
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* 1. Introduction, 15 Years Experience, Mission & 4 Core Specialties */}
      <Section1 />

      {/* 2. How It Works Relocation Workflow */}
      <HowItWorksSection />

      {/* 3. Phoenix Moving Services Include (5 Core Services Grid) */}
      <Section2 />

      {/* 4. Residential Moving: Local & Long-Distance for Houses, Apartments & Condos */}
      <Section3 />

      {/* 5. Commercial and Office Relocations in Phoenix, AZ */}
      <Section4 />

      {/* 6. Specialty Item Moving, Full Packing & Climate-Controlled Storage */}
      <Section5 />

      {/* 7. Long-Distance Moves with Confidence & Trust Stats */}
      <Section6 />

      {/* 8. Why Choose Our Phoenix Moving Company? (5 Pillars & Verified Review) */}
      <Section7 />

      {/* 9. A Rich History of Phoenix, AZ (Hohokam, Swilling, Duppa, 5th-Largest City) */}
      <Section8 />

      {/* 10. Fun Things to Do in Phoenix (11 Filtered Attractions Across 4 Categories) */}
      <Section9 />

      {/* 11. Essential Moving Tips for Phoenix Residents (Heat, High-Rise & Sprawl) */}
      <Section10 />

      {/* 12. Neighborhoods We Serve in Phoenix, AZ (Downtown, Biltmore, Arcadia & 12 ZIPs) */}
      <Section11 />

      {/* 13. FAQ About Moving Services in Phoenix, AZ (Interactive Framer Accordion) */}
      <Section12 />

      {/* 14. High-Conversion Bottom CTA Banner with Free Quote Options */}
      <Section13 />
    </main>
  );
};

export default PhoenixPage;

export const metadata = {
  title: "Top Phoenix Moving Company AZ | Making Moves Matter | Local & Long-Distance",
  description:
    "Are you looking for dependable and professional movers in Phoenix to handle your relocation? Making Moves Matter delivers residential, commercial, packing, storage & specialty moves. Call (480) 934-8218!",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/az/phoenix",
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
    title: "Top Phoenix Moving Company AZ | Making Moves Matter",
    description:
      "Trusted local Phoenix movers with 15 years of experience, licensed & insured with a trained crew. Residential, commercial, packing, and secure climate storage in the Valley of the Sun.",
    url: "https://mesamovingexperts.com/az/phoenix",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/phoenix-truck-branded.jpg",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter - Trusted Phoenix Moving Company in Arizona",
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
    title: "Top Phoenix Moving Company AZ | Making Moves Matter",
    description:
      "Dependable Phoenix movers with 15 years experience, licensed & insured. Call (480) 934-8218 for a free quote!",
    images: ["/images/phoenix-truck-branded.jpg"],
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
    "Phoenix moving company",
    "movers in Phoenix AZ",
    "best moving company in Phoenix",
    "local Phoenix movers",
    "Phoenix residential moving",
    "commercial movers Phoenix",
    "specialty item moving Phoenix",
    "Downtown Phoenix movers",
    "Biltmore movers",
    "Arcadia moving company",
    "climate controlled storage Phoenix",
    "long distance moving Phoenix AZ",
  ],
};