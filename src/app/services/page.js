import React from "react";
import Header from "@/app/components/header";
import ServicesListGrid from "./ServicesListGrid";
import { ALL_SERVICES } from "./servicesData";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import Section4 from "@/app/components/commercial/section4";
import Section3 from "@/app/components/home/section3";
import Section5 from "@/app/components/home/section5";
import Faq from "@/app/components/faq";

export const metadata = {
  title: "Professional Moving Services in Arizona | Making Moves Matter",
  description:
    "Explore our complete range of moving services in Mesa, Phoenix, and across Arizona: local, long-distance, commercial, residential, packing, storage, and piano moving.",
  keywords: [
    "moving services Mesa AZ",
    "Arizona moving company",
    "Making Moves Matter services",
    "residential movers Mesa",
    "commercial moving East Valley",
    "long distance movers Arizona",
    "packing and storage Phoenix",
  ],
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services",
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
    title: "Professional Moving Services in Arizona | Making Moves Matter",
    description:
      "Explore all professional moving services by Making Moves Matter. Fast, licensed, and insured movers in Mesa, Phoenix, and the East Valley.",
    url: "https://mesamovingexperts.com/services",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/az-fleet-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter Moving Services Arizona",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Moving Services in Arizona | Making Moves Matter",
    description:
      "Full-service residential, commercial, local, and cross-country moving solutions across Arizona.",
    images: ["/images/az-fleet-hero.jpg"],
    creator: "@MesaMoving",
  },
};

export default function ServicesPage() {
  const headerImg = "/images/az-fleet-hero.jpg";
  const headerText1 = "Our Moving";
  const headerText2 = "Services";
  const headerDesc =
    "From local residential moves to corporate relocations and white-glove specialty handling, Making Moves Matter provides reliable, stress-free moving solutions across Arizona with licensed crews and upfront pricing.";

  const servicesSchema = {
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
          "addressCountry": "US",
        },
        "areaServed": [
          "Mesa, AZ",
          "Gilbert, AZ",
          "Chandler, AZ",
          "Tempe, AZ",
          "Scottsdale, AZ",
          "Phoenix, AZ",
          "Queen Creek, AZ",
          "San Tan Valley, AZ",
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://mesamovingexperts.com/services/#list",
        "name": "Moving Services by Making Moves Matter",
        "itemListElement": ALL_SERVICES.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": service.title,
          "description": service.description,
          "url": `https://mesamovingexperts.com${service.slug}`,
        })),
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* 1. Branded Fleet Hero Header */}
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* 2. 12 Services Cards Grid (Brand Styling, --accent-color Buttons, font-semibold Titles, No Shadows) */}
      <ServicesListGrid />

      {/* 3. Why Choose Us (5 Brand Value Pillars) */}
      <Section4
        title="Why Choose Making Moves Matter for Your Arizona Move?"
        subtitle="Vetted moving crews, clean modern trucks, and transparent rates with no surprise travel fees."
      />

      {/* 4. How It Works - Step by Step Workflow */}
      <HowItWorksSection />

      {/* 5. Areas We Serve (8 Arizona Cities with Brand Photography) */}
      <Section3 />

      {/* 6. Quote & Contact CTA Banner */}
      <Section5 />

      {/* 7. Frequently Asked Questions */}
      <Faq />
    </div>
  );
}
