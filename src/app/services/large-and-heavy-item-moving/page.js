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
  title: "Large & Heavy Item Moving Services in Mesa, AZ | Making Moves Matter",
  description:
    "Expert piano movers, gun safe movers, and heavy machinery transport in Mesa, AZ. Specialized rigging and professional equipment for heavy items.",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/large-and-heavy-item-moving",
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
    title: "Large & Heavy Item Moving Services in Mesa, AZ | Making Moves Matter",
    description:
      "Specialized heavy item moving in Mesa, AZ. Pianos, safes, gym equipment, and commercial appliances moved with zero damage.",
    url: "https://mesamovingexperts.com/services/large-and-heavy-item-moving",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/scottsdale-specialty-piano.jpg",
        width: 1200,
        height: 800,
        alt: "Large and Heavy Item Moving in Mesa AZ - Making Moves Matter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Large & Heavy Item Moving Services in Mesa, AZ | Making Moves Matter",
    description:
      "Safe, insured specialty and heavy item moving in Mesa, AZ. Free quotes.",
    images: ["/images/scottsdale-specialty-piano.jpg"],
    creator: "@MesaMoving",
  },
};

const heavySchema = {
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
      "@id": "https://mesamovingexperts.com/services/large-and-heavy-item-moving/#service",
      "name": "Large and Heavy Item Moving in Mesa, AZ",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Heavy Item & Specialty Moving",
      "description": "Specialized rigging and moving equipment for grand pianos, gun safes, industrial appliances, and oversized machinery in Mesa, AZ."
    }
  ]
};

const HeavyItemPage = () => {
  const headerImg = "/images/scottsdale-specialty-piano.jpg";
  const headerText1 = "Large & Heavy Item";
  const headerText2 = "Moving Services in AZ";
  const headerDesc = "Specialized equipment, heavy-duty rigging, and certified movers for pianos, gun safes, appliances, and oversized machinery.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heavySchema) }}
      />
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc={headerDesc} />
      <Section1 />
      <Section2 />
      <HowItWorksSection />
      <Section4
        title="Why Choose Making Moves Matter for Heavy Item Moving?"
        subtitle="Hydraulic liftgates, piano skids, safe jacks, and certified heavy rigging technicians."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default HeavyItemPage;
