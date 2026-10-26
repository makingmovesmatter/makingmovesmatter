import React from "react";
import Header from "@/app/components/header";
import Section1 from "./section1";
import Section2 from "./section2";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import Section4 from "@/app/components/commercial/section4";
import ServiceSection from "@/app/components/servicesection";
import Section5 from "@/app/components/home/section5";
import Section3 from "@/app/components/home/section3";
import Faq from "@/app/components/faq";

export const metadata = {
  title: "Trusted Local Movers in Mesa, AZ | Making Moves Matter",
  description:
    "Looking for dependable local movers in Mesa, AZ? Making Moves Matter offers stress-free, affordable, and fully licensed local moving services across the East Valley.",
  keywords: [
    "local movers Mesa AZ",
    "local moving company Mesa",
    "Mesa residential movers",
    "apartment movers Mesa Arizona",
    "short distance moving Phoenix",
    "local moving services Mesa",
  ],
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/local-moving",
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
    title: "Trusted Local Movers in Mesa, AZ | Making Moves Matter",
    description:
      "Affordable, 5-star local moving services across Mesa, Chandler, Gilbert, Tempe, and Phoenix. Experienced crews, fully licensed and insured.",
    url: "https://mesamovingexperts.com/services/local-moving",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/localmoving1.png",
        width: 1200,
        height: 800,
        alt: "Making Moves Matter Local Movers in Mesa AZ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Local Movers in Mesa, AZ | Making Moves Matter",
    description:
      "Stress-free local moves in Mesa & East Valley. Fast, safe, and transparent pricing with zero hidden fees.",
    images: ["/images/localmoving1.png"],
    creator: "@MesaMoving",
  },
};

const localSchema = {
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
      ],
    },
    {
      "@type": "Service",
      "@id": "https://mesamovingexperts.com/services/local-moving/#service",
      "name": "Local Moving Services in Mesa, AZ",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Local Moving & Residential Relocation",
      "description":
        "Professional local moving services in Mesa, AZ tailored to homes, apartments, condos, and small offices with experienced moving crews.",
      "areaServed": [
        { "@type": "City", "name": "Mesa" },
        { "@type": "City", "name": "Gilbert" },
        { "@type": "City", "name": "Chandler" },
        { "@type": "City", "name": "Tempe" },
        { "@type": "City", "name": "Scottsdale" },
        { "@type": "City", "name": "Phoenix" },
      ],
    },
  ],
};

const LocalMovingPage = () => {
  const headerImg = "/images/localmoving1.png";
  const headerText1 = "Trusted Local Movers";
  const headerText2 = "in Mesa, AZ";
  const headerDesc =
    "Looking for reliable local movers in Mesa, AZ? Making Moves Matter provides stress-free, affordable, and efficient moving services across the East Valley.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

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
        title="Why Choose Making Moves Matter for Your Local Move?"
        subtitle="Vetted moving crews, clean modern trucks, and transparent rates with no surprise travel fees."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default LocalMovingPage;
