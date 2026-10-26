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
import ChandlerSchema from "./ChandlerSchema";

const ChandlerPage = () => {
  const headerImg = "/images/chandler-truck-branded.jpg";
  const headerText1 = "Making Moves Matter";
  const headerText2 = "Chandler, AZ";
  const headerDesc =
    "Your Go-To Chandler Moving Company for a Smooth Move | Local & Nationwide Relocations";

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Search Engine Structured Data */}
      <ChandlerSchema />

      {/* Hero Header with Branded Truck Image and Quick Quote Form */}
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* 1. Introduction & Core Relocation Specialties */}
      <Section1 />

      {/* 2. How It Works Relocation Workflow */}
      <HowItWorksSection />

      {/* 3. Packing and Movers Services Include */}
      <Section2 />

      {/* 4. Full-Service Residential Moving in Chandler, AZ */}
      <Section3 />

      {/* 5. Efficient Commercial Moving Services & Tech Campus Logistics */}
      <Section4 />

      {/* 6. Specialty Moving for Fragile Items & Secure Storage Solutions */}
      <Section5 />

      {/* 7. Long-Distance Moves with Confidence & Trust Stats */}
      <Section6 />

      {/* 8. Why Choose Us as Your Chandler Movers? (5 Pillars & Verified Reviews) */}
      <Section7 />

      {/* 9. A Brief History of Chandler, AZ (1912 Dr. Chandler, Irrigation, Intel & Silicon Desert) */}
      <Section8 />

      {/* 10. Fun Things to Do in Chandler, AZ (Interactive Filtered Attractions) */}
      <Section9 />

      {/* 11. Essential Moving Tips for Chandler Residents */}
      <Section10 />

      {/* 12. Neighborhoods We Serve in Chandler, AZ (Ocotillo, Fulton Ranch & ZIPs) */}
      <Section11 />

      {/* 13. FAQ About Moving Services in Chandler, AZ (Interactive Accordion) */}
      <Section12 />

      {/* 14. High-Conversion Bottom CTA Banner */}
      <Section13 />
    </main>
  );
};

export default ChandlerPage;

export const metadata = {
  title: "Best Chandler Moving Company AZ | Making Moves Matter | Local & Long-Distance",
  description:
    "Top-rated Chandler AZ moving company. Making Moves Matter provides residential, commercial, packing, climate-controlled storage & interstate relocations. Call (480) 934-8218!",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/az/chandler",
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
    title: "Best Chandler Moving Company AZ | Making Moves Matter | Local & Nationwide",
    description:
      "Expert movers in Chandler, AZ for residential and commercial moves. Transparent pricing with zero hidden fees. Call (480) 934-8218 for a free quote!",
    url: "https://mesamovingexperts.com/az/chandler",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/chandler-truck-branded.jpg",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter - Trusted Moving Company in Chandler AZ",
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
    title: "Best Chandler Moving Company AZ | Making Moves Matter | Local & Long-Distance",
    description:
      "Planning a move in Chandler, AZ? Making Moves Matter provides licensed, insured, and affordable moving services. Call (480) 934-8218 for a free estimate!",
    images: ["/images/chandler-truck-branded.jpg"],
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
    "Chandler moving company",
    "movers in Chandler AZ",
    "best Chandler moving company",
    "local movers Chandler",
    "Chandler residential moving",
    "Chandler commercial moving services",
    "specialty movers Chandler piano antique",
    "climate controlled storage Chandler AZ",
    "long distance moving Chandler AZ",
    "Silicon Desert movers Chandler",
    "Ocotillo Chandler movers",
    "Fulton Ranch moving company"
  ],
};