import React from "react";
import { queenCreekFaqs } from "./faqData";

const QueenCreekSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://mesamovingexperts.com/az/queen-creek#movingcompany",
    "name": "Making Moves Matter - Queen Creek Moving Company",
    "alternateName": "Queen Creek Movers",
    "description":
      "Trusted Queen Creek moving company with 15+ years of experience. Making Moves Matter specializes in stress-free residential, commercial, equestrian estate, packing, climate storage, and long-distance moving across Queen Creek, AZ.",
    "url": "https://mesamovingexperts.com/az/queen-creek",
    "telephone": "+1-480-934-8218",
    "email": "makingmovesmatter07@gmail.com",
    "priceRange": "$$",
    "image": [
      "https://mesamovingexperts.com/images/queen-creek-truck-branded.png",
      "https://mesamovingexperts.com/images/queen-creek-residential-moving.jpg",
      "https://mesamovingexperts.com/images/queen-creek-commercial-moving.jpg"
    ],
    "logo": "https://mesamovingexperts.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Queen Creek",
      "addressLocality": "Queen Creek",
      "addressRegion": "AZ",
      "postalCode": "85142",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.2486,
      "longitude": -111.6343
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
      "reviewCount": "194",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Queen Creek" },
      { "@type": "AdministrativeArea", "name": "Montelena" },
      { "@type": "AdministrativeArea", "name": "Hastings Farms" },
      { "@type": "AdministrativeArea", "name": "Cortina" },
      { "@type": "AdministrativeArea", "name": "Queen Creek Station" },
      { "@type": "AdministrativeArea", "name": "Charleston Estates" },
      { "@type": "AdministrativeArea", "name": "Victoria" },
      { "@type": "City", "name": "Gilbert" },
      { "@type": "City", "name": "San Tan Valley" },
      { "@type": "City", "name": "Chandler" },
      { "@type": "City", "name": "Mesa" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Queen Creek Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Moving in Queen Creek, AZ",
            "description": "Local and long-distance moves for single-family homes, ranch estates, and condos in Queen Creek."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial and Office Relocations",
            "description": "Efficient office and retail relocations across Queen Creek commercial districts."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Packing and Unpacking Services",
            "description": "Full-service packing solutions using high-quality protective materials."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Secure Climate-Controlled Storage",
            "description": "Clean, climate-controlled storage for short and long-term needs with 24/7 video security."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Specialty & Heavy Item Moving",
            "description": "Safe transport of pianos, gun safes, hot tubs, and heavy ranch equipment."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": queenCreekFaqs.map((faq) => ({
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
        "name": "Movers in Queen Creek, AZ",
        "item": "https://mesamovingexperts.com/az/queen-creek"
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

export default QueenCreekSchema;
