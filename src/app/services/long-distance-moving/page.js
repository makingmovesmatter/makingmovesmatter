import React from "react";
import Header from "@/app/components/header";
import Section1 from "./section1";
import Section2 from "./section2";
import LongDistanceScamGuide from "./LongDistanceScamGuide";
import LongDistanceWhyChoose from "./LongDistanceWhyChoose";
import SectionThree from "./sectionthree";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import LongDistanceAreasServed from "./LongDistanceAreasServed";
import LongDistanceCta from "./LongDistanceCta";
import ServiceSection from "@/app/components/servicesection";
import Faq from "@/app/components/faq";

export const metadata = {
  title: "Top-Rated Long-Distance Movers in Mesa, AZ – Making Moves Matter",
  description:
    "Planning a move across the state or country? Making Moves Matter is a trusted long-distance moving company in Mesa, AZ. Safe, efficient cross-country relocation, full packing, storage & transparent pricing.",
  keywords: [
    "long distance movers Mesa AZ",
    "cross country movers Mesa",
    "interstate movers Mesa Arizona",
    "long distance moving company Mesa",
    "residential long distance movers",
    "apartment movers Mesa",
    "state to state movers Arizona",
    "affordable long distance moving",
  ],
  category: "Long Distance Moving Services",
  authors: [{ name: "Making Moves Matter", url: "https://mesamovingexperts.com" }],
  creator: "Making Moves Matter",
  publisher: "Making Moves Matter",

  metadataBase: new URL("https://mesamovingexperts.com"),

  alternates: {
    canonical: "/services/long-distance-moving",
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
    title: "Top-Rated Long-Distance Movers in Mesa, AZ – Making Moves Matter",
    description:
      "Trusted Mesa, AZ long-distance movers. Full-service packing, residential, apartment, office & secure storage solutions for cross-country moves.",
    url: "https://mesamovingexperts.com/services/long-distance-moving",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/longdistance.png",
        width: 1200,
        height: 800,
        alt: "Making Moves Matter - Long Distance Moving Truck in Mesa AZ",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top-Rated Long-Distance Movers in Mesa, AZ – Making Moves Matter",
    description:
      "Reliable long-distance moving services in Mesa. Full-service packing, direct transport, and storage solutions with zero hidden fees.",
    images: ["/images/longdistance.png"],
    creator: "@MesaMoving",
  },

  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

const longDistanceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": "https://mesamovingexperts.com/#organization",
      "name": "Making Moves Matter",
      "url": "https://mesamovingexperts.com",
      "logo": "https://mesamovingexperts.com/images/logo.png",
      "telephone": "+1-480-934-8218",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mesa",
        "addressRegion": "AZ",
        "postalCode": "85201",
        "addressCountry": "US"
      },
      "areaServed": [
        "Mesa, AZ",
        "Gilbert, AZ",
        "Chandler, AZ",
        "Tempe, AZ",
        "Scottsdale, AZ",
        "Phoenix, AZ"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://mesamovingexperts.com/services/long-distance-moving/#service",
      "name": "Long-Distance Moving Services in Mesa, AZ",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Interstate & Cross-Country Relocation",
      "description": "Top-rated long-distance movers in Mesa, AZ providing full-service packing, residential, apartment, office, and furniture relocations nationwide.",
      "areaServed": [
        { "@type": "City", "name": "Mesa" },
        { "@type": "City", "name": "Gilbert" },
        { "@type": "City", "name": "Chandler" },
        { "@type": "City", "name": "Tempe" },
        { "@type": "City", "name": "Scottsdale" },
        { "@type": "City", "name": "Phoenix" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Long-Distance Moving Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full-Service Packing and Moving" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Long-Distance Movers in Mesa" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Apartment and Condo Moving" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office and Commercial Long-Distance Moving" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture Movers in Mesa, AZ" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storage Solutions for Long-Distance Moves" } }
        ]
      }
    }
  ]
};

const LongDistanceMovingPage = () => {
  const headerImg = "/images/longdistance.png";
  const headerText1 = "Top-Rated Long-Distance Movers";
  const headerText2 = "in Mesa, AZ";
  const headerDesc =
    "Planning a move across the state or country? Making Moves Matter is a trusted long-distance moving company in Mesa, AZ, offering professional and stress-free relocation services.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(longDistanceSchema) }}
      />

      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* 1. Executive Overview & Reliable Long-Distance Services */}
      <Section1 />

      {/* 2. Comprehensive 6 Long-Distance Moving Services */}
      <Section2 />

      {/* 3. Consumer Advisory: How to Avoid Long-Distance Moving Scams */}
      <LongDistanceScamGuide />

      {/* 4. Why Choose Making Moves Matter for Your Long-Distance Move? (6 Pillars) */}
      <LongDistanceWhyChoose />

      {/* 5. Popular Interstate Moving Routes (Arizona to CA, CO, TX, NM, NV, UT) */}
      <SectionThree />

      {/* 6. Step-by-Step Relocation Process */}
      <HowItWorksSection />

      {/* 7. Serving Mesa and Surrounding Areas for Long-Distance Moves */}
      <LongDistanceAreasServed />

      {/* 8. High-CTR Free Quote CTA Banner */}
      <LongDistanceCta />

      {/* 9. Cross-Linking Other Moving Services */}
      <ServiceSection />

      {/* 10. Frequently Asked Questions */}
      <Faq />
    </div>
  );
};

export default LongDistanceMovingPage;
