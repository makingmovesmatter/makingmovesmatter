import React from "react";
import { chandlerFaqs } from "./faqData";

const ChandlerSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://mesamovingexperts.com/az/chandler#movingcompany",
    "name": "Making Moves Matter - Chandler Moving Company",
    "alternateName": "Chandler Moving Company AZ",
    "description":
      "Best Chandler moving company in AZ. Making Moves Matter provides reliable residential, commercial, packing, climate-controlled storage, and long-distance moving services across Chandler and the Phoenix East Valley.",
    "url": "https://mesamovingexperts.com/az/chandler",
    "telephone": "+1-480-934-8218",
    "email": "makingmovesmatter07@gmail.com",
    "priceRange": "$$",
    "image": [
      "https://mesamovingexperts.com/images/chandler-truck-branded.png",
      "https://mesamovingexperts.com/images/chandler-movers-team.jpg",
      "https://mesamovingexperts.com/images/chandler-commercial-moving.jpg"
    ],
    "logo": "https://mesamovingexperts.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chandler",
      "addressLocality": "Chandler",
      "addressRegion": "AZ",
      "postalCode": "85225",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.3062,
      "longitude": -111.8413
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "192",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Chandler" },
      { "@type": "AdministrativeArea", "name": "Ocotillo" },
      { "@type": "AdministrativeArea", "name": "Fulton Ranch" },
      { "@type": "AdministrativeArea", "name": "Downtown Chandler" },
      { "@type": "AdministrativeArea", "name": "Sun Lakes" },
      { "@type": "AdministrativeArea", "name": "Andersen Springs" },
      { "@type": "AdministrativeArea", "name": "Sun Groves" },
      { "@type": "City", "name": "Gilbert" },
      { "@type": "City", "name": "Mesa" },
      { "@type": "City", "name": "Tempe" },
      { "@type": "City", "name": "Phoenix" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chandler Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Service Residential Moving in Chandler, AZ",
            "description": "Expert residential moving for houses, condos, and apartments in Chandler."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial and Office Moving Services",
            "description": "Minimal-downtime office, tech lab, and corporate relocation across Chandler."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Specialty Moving for Fragile & Heavy Items",
            "description": "Safe transport of pianos, antiques, safes, and fine artwork."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Secure Climate-Controlled Storage Solutions",
            "description": "24/7 video-monitored, climate-controlled temporary and long-term storage."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Long-Distance & Interstate Moving",
            "description": "Door-to-door interstate relocation with guaranteed arrival windows."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": chandlerFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mesamovingexperts.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Arizona Locations",
        "item": "https://mesamovingexperts.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Movers in Chandler, AZ",
        "item": "https://mesamovingexperts.com/az/chandler"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default ChandlerSchema;
