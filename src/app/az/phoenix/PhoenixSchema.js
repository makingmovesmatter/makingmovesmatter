import React from "react";
import { phoenixFaqs } from "./faqData";

const PhoenixSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://mesamovingexperts.com/az/phoenix#movingcompany",
    "name": "Making Moves Matter - Phoenix Moving Company",
    "alternateName": "Phoenix Movers",
    "description":
      "Trusted Phoenix moving company in AZ with 15+ years of experience. Making Moves Matter specializes in stress-free residential, commercial, packing, secure climate-controlled storage, and long-distance moving across Phoenix and the Valley of the Sun.",
    "url": "https://mesamovingexperts.com/az/phoenix",
    "telephone": "+1-480-934-8218",
    "email": "makingmovesmatter07@gmail.com",
    "priceRange": "$$",
    "image": [
      "https://mesamovingexperts.com/images/phoenix-truck-branded.jpg",
      "https://mesamovingexperts.com/images/phoenix-residential-moving.jpg",
      "https://mesamovingexperts.com/images/phoenix-commercial-moving.jpg"
    ],
    "logo": "https://mesamovingexperts.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phoenix",
      "addressLocality": "Phoenix",
      "addressRegion": "AZ",
      "postalCode": "85001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.4484,
      "longitude": -112.074
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
      "reviewCount": "210",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Phoenix" },
      { "@type": "AdministrativeArea", "name": "Downtown Phoenix" },
      { "@type": "AdministrativeArea", "name": "Biltmore" },
      { "@type": "AdministrativeArea", "name": "Arcadia" },
      { "@type": "AdministrativeArea", "name": "North Central Phoenix" },
      { "@type": "AdministrativeArea", "name": "Desert Ridge" },
      { "@type": "AdministrativeArea", "name": "Ahwatukee Foothills" },
      { "@type": "City", "name": "Scottsdale" },
      { "@type": "City", "name": "Mesa" },
      { "@type": "City", "name": "Tempe" },
      { "@type": "City", "name": "Chandler" },
      { "@type": "City", "name": "Glendale" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Phoenix Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Moving in Phoenix, AZ",
            "description": "Local and long-distance moves for houses, apartments, and condos in Phoenix."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial and Office Relocations",
            "description": "Efficient moves for businesses, tech offices, and corporate suites of all sizes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Packing and Unpacking Services",
            "description": "Full-service packing solutions using high-quality materials to protect all valuables."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Secure Climate-Controlled Storage",
            "description": "Clean, climate-controlled storage for short-term and long-term needs with 24/7 video security."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Specialty Item Moving",
            "description": "Careful handling of large, fragile, and valuable items including pianos, antiques, and heavy safes."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": phoenixFaqs.map((faq) => ({
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
        "name": "Movers in Phoenix, AZ",
        "item": "https://mesamovingexperts.com/az/phoenix"
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

export default PhoenixSchema;
