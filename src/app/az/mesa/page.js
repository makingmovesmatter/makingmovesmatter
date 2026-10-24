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
import MesaSchema from "./MesaSchema";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

const MesaPage = () => {
  const headerImg = "/images/mesa-truck-branded.jpg";
  const headerText1 = "Making Moves Matter";
  const headerText2 = "Movers in Mesa, AZ";
  const headerDesc =
    "Your Trusted Partner for a Smooth, Safe & Hassle-Free Move | Local & Nationwide Relocations";

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Search Engine Structured Data */}
      <MesaSchema />

      {/* Hero Header with Branded Truck Image and Quick Quote Form */}
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      <Section1 />

      {/* 2. How It Works Relocation Workflow */}
      <HowItWorksSection />

      {/* 3. Packing and Movers Services Include */}
      <Section2 />

      {/* 4. Local Moving Services & Long-Distance Moving */}
      <Section3 />

      {/* 5. Residential & Apartment Moves + Commercial & Office Moves */}
      <Section4 />

      {/* 6. Professional Packing Services & Secure Storage Solutions */}
      <Section5 />

      {/* 7. Comprehensive Moving Service in Mesa, AZ (15 Years Experience & Stats) */}
      <Section6 />

      {/* 8. Why Choose Our Mesa Moving Company? (5 Core Pillars & Reviews) */}
      <Section7 />

      {/* 9. A Brief History of Mesa, AZ (2,000-Year Heritage & Timeline) */}
      <Section8 />

      {/* 10. Fun Things to Do in Mesa, AZ (Interactive Filtered Attractions) */}
      <Section9 />

      {/* 11. Essential Moving Tips for Mesa Residents */}
      <Section10 />

      {/* 12. Neighborhoods We Serve in Mesa, AZ */}
      <Section11 />

      {/* 13. FAQ About Moving Services in Mesa, AZ (Interactive Accordion) */}
      <Section12 />

      {/* 14. High-Conversion Bottom CTA Banner */}
      <Section13 />
    </main>
  );
};

export default MesaPage;

export const metadata = {
  title: "Movers in Mesa AZ | Making Moves Matter | Local & Long-Distance",
  description:
    "Trusted Mesa AZ movers. Making Moves Matter provides residential, commercial, local & nationwide moving, packing & secure storage. Upfront pricing, licensed & insured. Call (480) 934-8218!",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/az/mesa",
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
    title: "Movers in Mesa AZ | Making Moves Matter | Local & Nationwide Relocations",
    description:
      "Expert movers in Mesa, AZ for residential and commercial moves. Transparent pricing with zero hidden fees. Call (480) 934-8218 for a free quote!",
    url: "https://mesamovingexperts.com/az/mesa",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/mesa-truck-branded.jpg",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter - Trusted Moving Company in Mesa AZ",
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
    title: "Movers in Mesa AZ | Making Moves Matter | Local & Long-Distance",
    description:
      "Planning a move in Mesa, AZ? Making Moves Matter provides licensed, insured, and affordable moving services. Call (480) 934-8218 for a free estimate!",
    images: ["/images/mesa-truck-branded.jpg"],
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
    "Mesa AZ moving company",
    "movers in Mesa AZ",
    "Mesa movers",
    "local movers Mesa AZ",
    "long distance movers Arizona",
    "commercial movers Mesa",
    "professional movers Mesa",
    "packing and moving services Mesa",
    "affordable moving services Mesa",
    "residential moving company Mesa",
    "Making Moves Matter Mesa AZ",
  ],
  authors: [{ name: "Making Moves Matter", url: "https://mesamovingexperts.com" }],
  category: "Moving Services",
};