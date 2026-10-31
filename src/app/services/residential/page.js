import React from "react";
import Header from "@/app/components/header";
import Section1 from "@/app/components/residential/section1";
import Section2 from "@/app/components/residential/section2";
import Section3About from "@/app/components/residential/section3";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import Section4 from "@/app/components/commercial/section4";
import ServiceSection from "@/app/components/servicesection";
import Section5 from "@/app/components/home/section5";
import Section3 from "@/app/components/home/section3";
import Faq from "@/app/components/faq";

export const metadata = {
  title: "Top Residential Movers in Mesa, AZ | Making Moves Matter",
  description:
    "Stress-free residential moving services in Mesa, AZ. We handle single-family homes, apartments, and condos with licensed, insured moving crews and upfront pricing.",
  keywords: [
    "residential movers Mesa AZ",
    "home moving company Mesa",
    "apartment movers Mesa Arizona",
    "condo moving services East Valley",
    "household movers Phoenix AZ",
    "Making Moves Matter residential moving",
  ],
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/residential",
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
    title: "Top Residential Movers in Mesa, AZ | Making Moves Matter",
    description:
      "Expert household and apartment moving in Mesa, Chandler, Gilbert, Scottsdale, and Phoenix. Careful packing, blanket wrapping, and 5-star service.",
    url: "https://mesamovingexperts.com/services/residential",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/mesa-moving-branded.png",
        width: 1200,
        height: 800,
        alt: "Making Moves Matter Residential Moving Services Mesa AZ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Residential Movers in Mesa, AZ | Making Moves Matter",
    description:
      "Stress-free residential moving in Mesa and East Valley. Honest pricing, licensed crews, and total furniture protection.",
    images: ["/images/mesa-moving-branded.png"],
    creator: "@MesaMoving",
  },
};

const residentialSchema = {
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
      "@id": "https://mesamovingexperts.com/services/residential/#service",
      "name": "Residential Moving Services in Mesa, AZ",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Residential Moving & Household Relocation",
      "description":
        "Full-service residential relocations for single-family homes, townhouses, and luxury apartments across Mesa and the Phoenix metro.",
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

const Residential = () => {
  const headerImg = "/images/mesa-moving-branded.png";
  const headerText1 = "Top Residential Movers";
  const headerText2 = "in Mesa, AZ";
  const headerDesc =
    "Stress-free relocations for homes, apartments, and condos. Making Moves Matter delivers exceptional care, licensed professional crews, and upfront pricing across the East Valley.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialSchema) }}
      />
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />
      <Section1 />
      <Section2 />
      <Section3About />
      <HowItWorksSection />
      <Section4
        title="Why Families Trust Making Moves Matter for Residential Moves"
        subtitle="15+ years of trusted service, certified moving crews, heavy-duty floor protection, and transparent pricing."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default Residential;
