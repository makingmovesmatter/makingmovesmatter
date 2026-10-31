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
  title: "Reliable Hot Tub Relocation Services in Mesa, AZ | Making Moves Matter",
  description:
    "Safe, damage-free hot tub and spa relocation in Mesa, AZ. Specialized trailers, spa dollies, and experienced movers. Making Moves Matter.",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/services/hot-tub-relocation",
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
    title: "Reliable Hot Tub Relocation Services in Mesa, AZ | Making Moves Matter",
    description:
      "Expert hot tub movers in Mesa, AZ. Specialized equipment, safe backyard gate navigation, and licensed crews.",
    url: "https://mesamovingexperts.com/services/hot-tub-relocation",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/az-fleet-hero.png",
        width: 1200,
        height: 800,
        alt: "Hot Tub Relocation in Mesa AZ - Making Moves Matter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Hot Tub Relocation Services in Mesa, AZ | Making Moves Matter",
    description:
      "Safe, insured spa moving in Mesa, AZ. Free upfront estimates.",
    images: ["/images/az-fleet-hero.png"],
    creator: "@MesaMoving",
  },
};

const hotTubSchema = {
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
      "@id": "https://mesamovingexperts.com/services/hot-tub-relocation/#service",
      "name": "Hot Tub Relocation Services in Mesa, AZ",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Hot Tub & Spa Moving",
      "description": "Safe and damage-free hot tub transport in Mesa, AZ utilizing purpose-built spa dollies and specialized trailers."
    }
  ]
};

const HotTubPage = () => {
  const headerImg = "/images/az-fleet-hero.png";
  const headerText1 = "Hot Tub Relocation";
  const headerText2 = "Services in AZ";
  const headerDesc = "Specialized spa trailers, dollies, and experienced movers to transport hot tubs and outdoor spas damage-free.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotTubSchema) }}
      />
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc={headerDesc} />
      <Section1 />
      <Section2 />
      <HowItWorksSection />
      <Section4
        title="Why Choose Making Moves Matter for Hot Tub Moving?"
        subtitle="Purpose-built spa dollies, property protection, and experienced heavy-handling technicians."
      />
      <ServiceSection />
      <Section5 />
      <Section3 />
      <Faq />
    </div>
  );
};

export default HotTubPage;
