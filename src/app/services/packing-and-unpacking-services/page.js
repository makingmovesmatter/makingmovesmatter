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
  title: "Professional Packing and Unpacking Services in Mesa, AZ | Making Moves Matter",
  description:
    "Protect your valuables with Making Moves Matter. Top-rated full and partial packing and unpacking services in Mesa, AZ using commercial-grade supplies.",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/packing-and-unpacking-services",
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
    title: "Professional Packing and Unpacking Services in Mesa, AZ | Making Moves Matter",
    description:
      "Stress-free packing and unpacking in Mesa, AZ. China, artwork, wardrobes, and furniture wrapped with utmost care.",
    url: "https://mesamovingexperts.com/services/packing-and-unpacking-services",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/mesa_packing_care.jpg",
        width: 1200,
        height: 800,
        alt: "Packing and Unpacking Services in Mesa AZ - Making Moves Matter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Packing and Unpacking Services in Mesa, AZ | Making Moves Matter",
    description:
      "Safe and affordable packing in Mesa, AZ. Free upfront estimates.",
    images: ["/images/mesa_packing_care.jpg"],
    creator: "@MesaMoving",
  },
};

const packingSchema = {
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
      "@id": "https://mesamovingexperts.com/services/packing-and-unpacking-services/#service",
      "name": "Packing and Unpacking Services in Mesa, AZ",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Packing & Unpacking Services",
      "description": "Full-service and partial packing with heavy-duty boxes, custom crating, bubble wrap, and systematic unpacking in Mesa, AZ."
    }
  ]
};

const PackingPage = () => {
  const headerImg = "/images/mesa_packing_care.jpg";
  const headerText1 = "Packing & Unpacking";
  const headerText2 = "Services in AZ";
  const headerDesc = "Protect valuable business and household assets with professional packing and unpacking services in Mesa, ensuring everything arrives safely.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packingSchema) }}
      />
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc={headerDesc} />
      <Section1 />
      <Section2 />
      <HowItWorksSection />
      <Section4
        title="Why Choose Making Moves Matter for Packing & Unpacking?"
        subtitle="Commercial-grade boxes, custom crating for breakables, and careful room-by-room unpacking."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default PackingPage;