import React from "react";
import { scottsdaleFaqs } from "./faqData";

const ScottsdaleSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://mesamovingexperts.com/az/scottsdale#movingcompany",
    "name": "Making Moves Matter - Scottsdale Moving Company",
    "alternateName": "Scottsdale Movers",
    "description":
      "Premier Scottsdale moving company in AZ. Making Moves Matter specializes in stress-free residential, commercial, white-glove luxury estates, packing, secure climate-controlled storage, and long-distance moving across Scottsdale and Paradise Valley.",
    "url": "https://mesamovingexperts.com/az/scottsdale",
    "telephone": "+1-480-934-8218",
    "email": "makingmovesmatter07@gmail.com",
    "priceRange": "$$",
    "image": [
      "https://mesamovingexperts.com/images/scottsdale-truck-branded.jpg",
      "https://mesamovingexperts.com/images/scottsdale-luxury-moving.jpg",
      "https://mesamovingexperts.com/images/scottsdale-specialty-piano.jpg"
    ],
    "logo": "https://mesamovingexperts.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Scottsdale",
      "addressLocality": "Scottsdale",
      "addressRegion": "AZ",
      "postalCode": "85251",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.4942,
      "longitude": -111.9261
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
      "reviewCount": "198",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Scottsdale" },
      { "@type": "AdministrativeArea", "name": "Old Town Scottsdale" },
      { "@type": "AdministrativeArea", "name": "DC Ranch" },
      { "@type": "AdministrativeArea", "name": "Silverleaf" },
      { "@type": "AdministrativeArea", "name": "McCormick Ranch" },
      { "@type": "AdministrativeArea", "name": "Gainey Ranch" },
      { "@type": "AdministrativeArea", "name": "Troon North" },
      { "@type": "AdministrativeArea", "name": "McDowell Mountain Ranch" },
      { "@type": "City", "name": "Paradise Valley" },
      { "@type": "City", "name": "Phoenix" },
      { "@type": "City", "name": "Mesa" },
      { "@type": "City", "name": "Tempe" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Scottsdale Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Moving in Scottsdale, AZ",
            "description": "Local and long-distance moves for houses, apartments, and luxury golf estates in Scottsdale."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial and Office Relocations",
            "description": "Efficient moves for businesses, medical suites, and corporate headquarters."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Service Packing and Unpacking",
            "description": "Complete packing solutions using high-quality materials and customized crating."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Secure Climate-Controlled Storage",
            "description": "24/7 video-monitored, climate-controlled storage for short-term and long-term needs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Specialty Item Moving for Fragile & Valuable Items",
            "description": "White-glove care for grand pianos, antiques, fine art, and heavy safes."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": scottsdaleFaqs.map((faq) => ({
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
        "name": "Movers in Scottsdale, AZ",
        "item": "https://mesamovingexperts.com/az/scottsdale"
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

export default ScottsdaleSchema;
