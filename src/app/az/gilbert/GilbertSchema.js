import React from "react";
import { gilbertFaqs } from "./faqData";

const GilbertSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://mesamovingexperts.com/az/gilbert#movingcompany",
    "name": "Making Moves Matter - Gilbert Moving Company",
    "alternateName": "Gilbert Movers",
    "description":
      "Leading Gilbert moving company in AZ. Making Moves Matter specializes in stress-free residential, commercial, heavy item moving, packing, secure climate-controlled storage, and long-distance moving across Gilbert and the East Valley.",
    "url": "https://mesamovingexperts.com/az/gilbert",
    "telephone": "+1-480-934-8218",
    "email": "makingmovesmatter07@gmail.com",
    "priceRange": "$$",
    "image": [
      "https://mesamovingexperts.com/images/gilbert-truck-branded.png",
      "https://mesamovingexperts.com/images/gilbert-residential-moving.jpg",
      "https://mesamovingexperts.com/images/gilbert-commercial-moving.jpg"
    ],
    "logo": "https://mesamovingexperts.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gilbert",
      "addressLocality": "Gilbert",
      "addressRegion": "AZ",
      "postalCode": "85296",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.3528,
      "longitude": -111.789
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
      "reviewCount": "176",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Gilbert" },
      { "@type": "AdministrativeArea", "name": "Downtown Gilbert" },
      { "@type": "AdministrativeArea", "name": "Heritage District" },
      { "@type": "AdministrativeArea", "name": "Agritopia" },
      { "@type": "AdministrativeArea", "name": "Morrison Ranch" },
      { "@type": "AdministrativeArea", "name": "Seville" },
      { "@type": "AdministrativeArea", "name": "Power Ranch" },
      { "@type": "AdministrativeArea", "name": "Val Vista Lakes" },
      { "@type": "City", "name": "Mesa" },
      { "@type": "City", "name": "Chandler" },
      { "@type": "City", "name": "Queen Creek" },
      { "@type": "City", "name": "Phoenix" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gilbert Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Moving in Gilbert, AZ",
            "description": "Reliable local and long-distance moves for houses, apartments, and master-planned community homes in Gilbert."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial and Office Relocations",
            "description": "Efficient moves for businesses, corporate offices, medical suites, and retail storefronts."
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
            "description": "Clean, climate-controlled storage for short- or long-term needs with 24/7 video security."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Specialty & Heavy Item Moving",
            "description": "Careful muscle and technique for gun safes, hot tubs, pianos, and valuable items."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": gilbertFaqs.map((faq) => ({
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
        "name": "Movers in Gilbert, AZ",
        "item": "https://mesamovingexperts.com/az/gilbert"
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

export default GilbertSchema;
