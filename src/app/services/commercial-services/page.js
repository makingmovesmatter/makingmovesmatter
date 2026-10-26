import React from "react";
import Header from "@/app/components/header";
import Section1 from "@/app/components/commercial/section1";
import Section2 from "@/app/components/commercial/section2";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import Section4 from "@/app/components/commercial/section4";
import Section3 from "@/app/components/commercial/section3";
import CommercialCta from "@/app/components/commercial/CommercialCta";
import ServiceSection from "@/app/components/servicesection";
import Faq from "@/app/components/faq";

export const metadata = {
  title: "Top Commercial Movers in Mesa, AZ – Making Moves Matter",
  description:
    "Relocating your business? Making Moves Matter is the leading commercial moving company in Mesa, AZ. Office moving, retail relocations, corporate transitions & warehouse moves with minimal downtime.",
  keywords: [
    "commercial movers Mesa AZ",
    "office movers in Mesa",
    "commercial moving services Mesa",
    "corporate relocation services Mesa AZ",
    "business movers Arizona",
    "retail moving company Mesa",
    "warehouse movers Mesa AZ",
    "commercial movers near me",
  ],
  category: "Commercial Moving Services",
  authors: [{ name: "Making Moves Matter", url: "https://mesamovingexperts.com" }],
  creator: "Making Moves Matter",
  publisher: "Making Moves Matter",

  metadataBase: new URL("https://mesamovingexperts.com"),

  alternates: {
    canonical: "/services/commercial-services",
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
    title: "Top Commercial Movers in Mesa, AZ – Making Moves Matter",
    description:
      "Leading commercial moving company in Mesa, AZ providing efficient, organized, and stress-free office and business relocations with minimal downtime.",
    url: "https://mesamovingexperts.com/services/commercial-services",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/mesa-commercial-moving.jpg",
        width: 1200,
        height: 675,
        alt: "Top Commercial Movers in Mesa, AZ - Making Moves Matter",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Commercial Movers in Mesa, AZ – Making Moves Matter",
    description:
      "Reliable & professional commercial moving services in Mesa. Office moving, corporate relocations, and warehouse moves with minimal downtime.",
    images: ["/images/mesa-commercial-moving.jpg"],
    creator: "@MesaMoving",
  },

  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

const commercialSchema = {
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
        "addressCountry": "US"
      },
      "areaServed": [
        "Mesa, AZ",
        "Gilbert, AZ",
        "Chandler, AZ",
        "Tempe, AZ",
        "Scottsdale, AZ",
        "Phoenix, AZ"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://mesamovingexperts.com/services/commercial-services/#service",
      "name": "Commercial Moving Services in Mesa, AZ",
      "provider": { "@id": "https://mesamovingexperts.com/#organization" },
      "serviceType": "Commercial Relocation & Office Moving",
      "description": "Leading commercial moving company in Mesa, AZ, providing efficient, organized, and stress-free office and business relocations with minimized business downtime.",
      "areaServed": [
        { "@type": "City", "name": "Mesa" },
        { "@type": "City", "name": "Gilbert" },
        { "@type": "City", "name": "Chandler" },
        { "@type": "City", "name": "Tempe" },
        { "@type": "City", "name": "Scottsdale" },
        { "@type": "City", "name": "Phoenix" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Commercial Moving Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Movers in Mesa" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail & Storefront Moving" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Relocation Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse & Industrial Moving" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture & Equipment Moving" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packing & Unpacking Services for Businesses" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "After-Hours & Weekend Moves" } }
        ]
      }
    }
  ]
};

const CommercialPage = () => {
  const headerImg = "/images/mesa-commercial-moving.jpg";
  const headerText1 = "Top Commercial Movers";
  const headerText2 = "in Mesa, AZ";
  const headerDesc =
    "Relocating your business? Making Moves Matter is the leading commercial moving company in Mesa, AZ, providing efficient, organized, and stress-free office and business relocations with minimal downtime.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialSchema) }}
      />

      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* 1. Executive Intro & Reliable & Professional Commercial Moving */}
      <Section1 />

      {/* 2. Comprehensive 7 Commercial Moving Services */}
      <Section2 />

      {/* 3. Step-by-Step Proven Relocation Process */}
      <HowItWorksSection />

      {/* 4. Why Choose Making Moves Matter as Your Mesa Commercial Movers? (5 Value Pillars) */}
      <Section4
        title="Why Choose Making Moves Matter as Your Mesa Commercial Movers?"
        subtitle="When moving your business, you need a partner that values your time, budget, and the security of your company assets."
      />

      {/* 5. Serving Businesses in Mesa and Surrounding Areas */}
      <Section3 />

      {/* 6. High-CTR Free Quote CTA Banner */}
      <CommercialCta />

      {/* 7. Explore Other Moving Services */}
      <ServiceSection />

      {/* 8. Frequently Asked Questions */}
      <Faq />
    </div>
  );
};

export default CommercialPage;
