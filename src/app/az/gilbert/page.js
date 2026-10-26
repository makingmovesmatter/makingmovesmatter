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
import GilbertSchema from "./GilbertSchema";

const GilbertPage = () => {
  const headerImg = "/images/gilbert-truck-branded.jpg";
  const headerText1 = "Making Moves Matter";
  const headerText2 = "Gilbert Moving AZ";
  const headerDesc =
    "Professional, Full-Service Relocation Solutions for Gilbert Homeowners & Businesses | Licensed & Insured";

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Search Engine Structured Data */}
      <GilbertSchema />

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

      {/* 3. Gilbert Moving Services Include (7 Core Services Grid) */}
      <Section2 />

      {/* 4. Residential Moving: Local & Long-Distance for Houses, Apartments & Condos */}
      <Section3 />

      {/* 5. Commercial and Office Relocations in Gilbert, AZ */}
      <Section4 />

      {/* 6. Specialty & Heavy Item Moving (Safes, Spas), Packing & Clean Storage */}
      <Section5 />

      {/* 7. Long-Distance Moves with Confidence & Trust Stats */}
      <Section6 />

      {/* 8. Why Choose Our Gilbert Moving Company? (4 Offerings & Verified Review) */}
      <Section7 />

      {/* 9. A Rich History of Gilbert, AZ (Hay Shipping Capital, Railway & Heritage) */}
      <Section8 />

      {/* 10. Fun Things to Do in Gilbert, AZ (12 Filtered Attractions Across 4 Categories) */}
      <Section9 />

      {/* 11. Essential Moving Tips for Gilbert Residents (HOA Rules, Heat & Heavy Prep) */}
      <Section10 />

      {/* 12. Neighborhoods We Serve in Gilbert, AZ (Agritopia, Morrison Ranch & 6 ZIPs) */}
      <Section11 />

      {/* 13. FAQ About Moving Services in Gilbert, AZ (Interactive Framer Accordion) */}
      <Section12 />

      {/* 14. High-Conversion Bottom CTA Banner */}
      <Section13 />
    </main>
  );
};

export default GilbertPage;

export const metadata = {
  title: "Top Gilbert Moving Company AZ | Making Moves Matter | Local & Long-Distance",
  description:
    "Planning a move in or to Gilbert, AZ? Making Moves Matter delivers professional residential, commercial, heavy items, packing & storage. Call (480) 934-8218!",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/az/gilbert",
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
    title: "Top Gilbert Moving Company AZ | Making Moves Matter",
    description:
      "Expert Gilbert movers for houses, master-planned estates, apartments, and commercial offices. Transparent flat-rate pricing with no hidden fees. Call (480) 934-8218 for a free quote!",
    url: "https://mesamovingexperts.com/az/gilbert",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/gilbert-truck-branded.jpg",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter - Trusted Gilbert Moving Company in Arizona",
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
    title: "Top Gilbert Moving Company AZ | Making Moves Matter",
    description:
      "Planning a move in Gilbert, AZ? Making Moves Matter provides licensed, insured, and professional moving services. Call (480) 934-8218 for a free quote!",
    images: ["/images/gilbert-truck-branded.jpg"],
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
    "Gilbert moving company",
    "movers in Gilbert AZ",
    "best moving company in Gilbert",
    "Gilbert residential moving",
    "commercial movers Gilbert",
    "heavy item movers Gilbert",
    "hot tub moving Gilbert",
    "safe moving Gilbert",
    "Morrison Ranch movers",
    "Agritopia moving company",
    "climate controlled storage Gilbert",
    "long distance moving Gilbert AZ"
  ],
};