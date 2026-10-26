import React from "react";
import Header from "@/app/components/header";
import Section1 from "@/app/components/in-state-moves/section1";
import Section2 from "@/app/components/in-state-moves/section2";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import Section4 from "@/app/components/commercial/section4";
import ServiceSection from "@/app/components/servicesection";
import Section5 from "@/app/components/home/section5";
import Section3 from "@/app/components/home/section3";
import Faq from "@/app/components/faq";

export const metadata = {
  title: "Arizona In-State Movers | Direct Point-to-Point Relocations | Making Moves Matter",
  description:
    "Fast, direct in-state moving services across Arizona. We move you between Phoenix, Mesa, Tucson, Flagstaff, Prescott, and Yuma with dedicated trucks and no shared loads.",
  keywords: [
    "Arizona in-state movers",
    "direct moving service Arizona",
    "Phoenix to Tucson movers",
    "Mesa to Flagstaff moving",
    "point to point Arizona movers",
    "Making Moves Matter in-state moves",
  ],
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/in-state-moves",
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
    title: "Arizona In-State Movers | Direct Point-to-Point Relocations | Making Moves Matter",
    description:
      "Direct in-state moving throughout Arizona. Dedicated trucks, guaranteed delivery windows, and the same crew from pickup to delivery.",
    url: "https://mesamovingexperts.com/services/in-state-moves",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/longdistances.png",
        width: 1200,
        height: 800,
        alt: "Making Moves Matter Arizona In-State Moving Truck",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arizona In-State Movers | Direct Relocations | Making Moves Matter",
    description:
      "Direct point-to-point moving across Arizona. Dedicated trucks, zero combined shipments, guaranteed delivery.",
    images: ["/images/longdistances.png"],
    creator: "@MesaMoving",
  },
};

const inStateSchema = {
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
        "Phoenix, AZ",
        "Tucson, AZ",
        "Flagstaff, AZ",
        "Prescott, AZ",
        "Yuma, AZ",
        "Chandler, AZ",
        "Gilbert, AZ",
        "Scottsdale, AZ",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://mesamovingexperts.com/services/in-state-moves/#service",
      "name": "In-State Moving Services Across Arizona",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "In-State Relocation & Direct Transport",
      "description":
        "Direct-service in-state moving throughout Arizona with dedicated trucks, no co-loading, and guaranteed delivery schedules.",
      "areaServed": {
        "@type": "State",
        "name": "Arizona",
      },
    },
  ],
};

const InStateMoves = () => {
  const headerImg = "/images/longdistances.png";
  const headerText1 = "Direct In-State Movers";
  const headerText2 = "Across Arizona";
  const headerDesc =
    "Moving anywhere in Arizona? Making Moves Matter provides direct point-to-point relocations. Dedicated trucks, no combined shipments, and guaranteed pickup and delivery dates.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inStateSchema) }}
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
        title="Why Choose Our Direct In-State Moving Service?"
        subtitle="Dedicated truck for your move only, same crew at pickup and delivery, and transparent flat or hourly pricing."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default InStateMoves;
