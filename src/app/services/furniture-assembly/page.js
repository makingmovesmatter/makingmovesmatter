import React from 'react'
import Header from '@/app/components/header';
import Section1 from './section1';
import Section2 from './section2';
import HowItWorksSection from '@/app/components/home/HowItWorksSection';
import Section4 from '@/app/components/commercial/section4';
import ServiceSection from '@/app/components/servicesection';
import Section5 from '@/app/components/home/section5';
import Section3 from '@/app/components/home/section3';
import Faq from '@/app/components/faq';

export const metadata = {
  title: "Reliable Furniture Assembly Services in Mesa, AZ | Making Moves Matter",
  description:
    "Save time and avoid hassle with Making Moves Matter. Professional furniture disassembly and assembly services in Mesa, AZ for beds, desks, and home units.",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/furniture-assembly",
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
    title: "Reliable Furniture Assembly Services in Mesa, AZ | Making Moves Matter",
    description:
      "Expert furniture assembly and disassembly in Mesa, AZ. Fast, reliable setup for home and office furniture.",
    url: "https://mesamovingexperts.com/services/furniture-assembly",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/furniture-assembly-brand.jpg",
        width: 1200,
        height: 800,
        alt: "Furniture Assembly Services in Mesa AZ - Making Moves Matter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Furniture Assembly Services in Mesa, AZ | Making Moves Matter",
    description:
      "Professional disassembly and reassembly in Mesa, AZ. Free upfront quotes.",
    images: ["/images/furniture-assembly-brand.jpg"],
    creator: "@MesaMoving",
  },
};

const assemblySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": "https://mesamovingexperts.com/#organization",
      "name": "Making Moves Matter",
      "url": "https://mesamovingexperts.com",
      "telephone": "+1-480-934-8218",
      "areaServed": ["Mesa, AZ", "Chandler, AZ", "Scottsdale, AZ", "Gilbert, AZ", "Phoenix, AZ"]
    },
    {
      "@type": "Service",
      "@id": "https://mesamovingexperts.com/services/furniture-assembly/#service",
      "name": "Furniture Assembly Services in Mesa, AZ",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Furniture Disassembly & Assembly",
      "description": "Professional furniture disassembly and reassembly in Mesa, AZ for modular beds, executive desks, shelving, and home entertainment units."
    }
  ]
};

const FurnitureAssemblyPage = () => {
  const headerImg = "/images/furniture-assembly-brand.jpg";
  const headerText1 = "Furniture Assembly";
  const headerText2 = "Services in AZ";
  const headerDesc = "Precision teardown and rebuild of bed frames, modular desks, workout equipment, and storage units in Mesa, AZ.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(assemblySchema) }}
      />
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc={headerDesc} />
      <Section1 />
      <Section2 />
      <HowItWorksSection />
      <Section4
        title="Why Choose Making Moves Matter for Furniture Assembly?"
        subtitle="Full tool kits, hardware containment bags, and seasoned assembly technicians."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default FurnitureAssemblyPage;
