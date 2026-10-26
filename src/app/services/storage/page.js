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
  title: "Secure Storage Services in Mesa, AZ | Making Moves Matter",
  description:
    "Clean, climate-controlled, and secure short-term and long-term storage solutions in Mesa, AZ with 24/7 video surveillance. Making Moves Matter.",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/storage",
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
    title: "Secure Storage Services in Mesa, AZ | Making Moves Matter",
    description:
      "Temperature-controlled storage units and warehouse vaults in Mesa, AZ. Safe, clean, and flexible leases.",
    url: "https://mesamovingexperts.com/services/storage",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/chandler-commercial-moving.jpg",
        width: 1200,
        height: 800,
        alt: "Storage Services in Mesa AZ - Making Moves Matter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Storage Services in Mesa, AZ | Making Moves Matter",
    description:
      "Safe, climate-controlled storage in Mesa, AZ. Free upfront quotes.",
    images: ["/images/chandler-commercial-moving.jpg"],
    creator: "@MesaMoving",
  },
};

const storageSchema = {
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
      "@id": "https://mesamovingexperts.com/services/storage/#service",
      "name": "Storage Services in Mesa, AZ",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Climate-Controlled Storage & Warehousing",
      "description": "Secure, climate-controlled residential and commercial storage facilities with 24/7 surveillance in Mesa, AZ."
    }
  ]
};

const StoragePage = () => {
  const headerImg = "/images/chandler-commercial-moving.jpg";
  const headerText1 = "Secure Storage";
  const headerText2 = "Services in AZ";
  const headerDesc = "Clean, temperature-controlled, secure storage facilities in Mesa, AZ for short-term transitions or extended warehousing.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storageSchema) }}
      />
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc={headerDesc} />
      <Section1 />
      <Section2 />
      <HowItWorksSection />
      <Section4
        title="Why Choose Making Moves Matter for Storage Solutions?"
        subtitle="Climate control, video monitoring, wooden pallet vaulting, and direct door-to-storage transport."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default StoragePage;