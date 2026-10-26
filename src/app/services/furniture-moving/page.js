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
  title: "Reliable Furniture Moving Services in Mesa, AZ | Making Moves Matter",
  description:
    "Protect your cherished furniture with Making Moves Matter. Professional furniture moving, blanket wrapping, disassembly and assembly in Mesa, AZ.",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/furniture-moving",
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
    title: "Reliable Furniture Moving Services in Mesa, AZ | Making Moves Matter",
    description:
      "Expert furniture movers in Mesa, AZ. Heavy couches, delicate antiques, and bedroom suites moved safely.",
    url: "https://mesamovingexperts.com/services/furniture-moving",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/scottsdale-luxury-moving.jpg",
        width: 1200,
        height: 800,
        alt: "Furniture Moving Services in Mesa AZ - Making Moves Matter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Furniture Moving Services in Mesa, AZ | Making Moves Matter",
    description:
      "Safe and affordable furniture moving in Mesa, AZ. Free upfront estimates.",
    images: ["/images/scottsdale-luxury-moving.jpg"],
    creator: "@MesaMoving",
  },
};

const furnitureSchema = {
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
      "@id": "https://mesamovingexperts.com/services/furniture-moving/#service",
      "name": "Furniture Moving Services in Mesa, AZ",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Furniture Relocation & Protection",
      "description": "Professional furniture moving in Mesa, AZ featuring heavy-duty padding, careful disassembly, transport, and room-of-choice placement."
    }
  ]
};

const FurnitureMovingPage = () => {
  const headerImg = "/images/scottsdale-luxury-moving.jpg";
  const headerText1 = "Furniture Moving";
  const headerText2 = "Services in AZ";
  const headerDesc = "Reliable, white-glove furniture moving in Mesa, AZ for treasured antiques, oversized sofas, and home suites.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(furnitureSchema) }}
      />
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc={headerDesc} />
      <Section1 />
      <Section2 />
      <HowItWorksSection />
      <Section4
        title="Why Choose Making Moves Matter for Your Furniture Move?"
        subtitle="Full padded protection, trained lifting technicians, and upfront quotes with zero surprises."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default FurnitureMovingPage;
