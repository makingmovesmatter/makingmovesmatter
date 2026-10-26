import React from "react";
import { tempeFaqs } from "./faqData";

const TempeSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://mesamovingexperts.com/az/tempe#movingcompany",
    "name": "Making Moves Matter - Tempe Moving Company",
    "alternateName": "Tempe Movers",
    "description":
      "Leading Tempe moving company in AZ. Making Moves Matter specializes in stress-free residential, commercial, packing, secure climate-controlled storage, and long-distance moving across Tempe, ASU campus, and surrounding Phoenix metro areas.",
    "url": "https://mesamovingexperts.com/az/tempe",
    "telephone": "+1-480-934-8218",
    "email": "makingmovesmatter07@gmail.com",
    "priceRange": "$$",
    "image": [
      "https://mesamovingexperts.com/images/tempe-truck-branded.jpg",
      "https://mesamovingexperts.com/images/tempe-residential-moving.jpg",
      "https://mesamovingexperts.com/images/tempe-commercial-moving.jpg"
    ],
    "logo": "https://mesamovingexperts.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tempe",
      "addressLocality": "Tempe",
      "addressRegion": "AZ",
      "postalCode": "85281",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.4255,
      "longitude": -111.94
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
      "reviewCount": "184",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Tempe" },
      { "@type": "AdministrativeArea", "name": "Downtown Tempe" },
      { "@type": "AdministrativeArea", "name": "Tempe Town Lake" },
      { "@type": "AdministrativeArea", "name": "South Tempe" },
      { "@type": "AdministrativeArea", "name": "Kyrene Corridor" },
      { "@type": "AdministrativeArea", "name": "Warner Ranch" },
      { "@type": "City", "name": "Mesa" },
      { "@type": "City", "name": "Chandler" },
      { "@type": "City", "name": "Phoenix" },
      { "@type": "City", "name": "Scottsdale" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tempe Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Moving in Tempe, AZ",
            "description": "Reliable local and long-distance moves for houses, condos, and apartments in Tempe."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial and Office Relocations",
            "description": "Expert moving solutions for offices, retail spaces, tech hubs, and corporate relocations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Packing and Unpacking Services",
            "description": "Efficient packing solutions using high-quality materials to protect all valuables."
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
            "name": "Specialty Item Moving",
            "description": "Expert handling of fragile, large, and valuable items including pianos, antiques, and heavy safes."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tempeFaqs.map((faq) => ({
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
        "name": "Movers in Tempe, AZ",
        "item": "https://mesamovingexperts.com/az/tempe"
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

export default TempeSchema;
