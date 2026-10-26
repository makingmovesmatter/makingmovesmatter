import React from "react";
import Header from "@/app/components/header";
import Section1 from "@/app/components/moving-labor/section1";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import Section4 from "@/app/components/commercial/section4";
import ServiceSection from "@/app/components/servicesection";
import Section5 from "@/app/components/home/section5";
import Section3 from "@/app/components/home/section3";
import Faq from "@/app/components/faq";

export const metadata = {
  title: "Moving Labor Services in Mesa, AZ | Loading & Unloading Helpers | Making Moves Matter",
  description:
    "Need help loading or unloading your U-Haul, Penske truck, PODS, or storage container? Hire trusted moving labor in Mesa, AZ from Making Moves Matter.",
  keywords: [
    "moving labor Mesa AZ",
    "hire movers loading only Mesa",
    "unloading help Phoenix AZ",
    "PODS loading helpers Mesa",
    "U-Haul movers Mesa Arizona",
    "furniture rearranging labor East Valley",
    "Making Moves Matter moving labor",
  ],
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/moving-labor",
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
    title: "Moving Labor Services in Mesa, AZ | Loading & Unloading Helpers | Making Moves Matter",
    description:
      "Skilled moving labor for truck loading, PODS packing, container unloading, and in-home furniture staging in Mesa and Phoenix.",
    url: "https://mesamovingexperts.com/services/moving-labor",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/mesa-movers-team.jpg",
        width: 1200,
        height: 800,
        alt: "Making Moves Matter Professional Moving Labor Crew in Mesa AZ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moving Labor Services in Mesa, AZ | Making Moves Matter",
    description:
      "Reliable moving muscle in Mesa, AZ. We load and unload rental trucks, containers, and PODS with expert care.",
    images: ["/images/mesa-movers-team.jpg"],
    creator: "@MesaMoving",
  },
};

const laborSchema = {
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
      "@id": "https://mesamovingexperts.com/services/moving-labor/#service",
      "name": "Moving Labor & Loading/Unloading Services",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Moving Labor, Truck Packing, PODS Loading",
      "description":
        "Experienced moving crews to load, unload, and stage furniture for rental trucks, PODS, and on-site renovations across Mesa and the East Valley.",
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

const MovingLaborPage = () => {
  const headerImg = "/images/mesa-movers-team.jpg";
  const headerText1 = "Professional Moving Labor";
  const headerText2 = "in Mesa & East Valley, AZ";
  const headerDesc =
    "Have your own truck or storage container? Let our certified movers do all the heavy lifting. We load, unload, and rearrange your belongings safely and efficiently.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(laborSchema) }}
      />
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />
      <Section1 />
      <HowItWorksSection />
      <Section4
        title="Why Hire Making Moves Matter for Moving Labor?"
        subtitle="Save your back and time. Our skilled crews bring moving straps, dollies, and expert space-maximization techniques."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default MovingLaborPage;
