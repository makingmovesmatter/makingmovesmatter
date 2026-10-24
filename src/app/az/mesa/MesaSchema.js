import React from "react";
import { mesaFaqs } from "./faqData";

const MesaSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://mesamovingexperts.com/az/mesa#movingcompany",
    "name": "Making Moves Matter - Mesa Moving Experts",
    "alternateName": "Mesa Moving Experts",
    "description":
      "Professional local and long-distance movers in Mesa, AZ. Fully licensed and insured moving company offering residential, commercial, packing, and secure climate-controlled storage.",
    "url": "https://mesamovingexperts.com/az/mesa",
    "telephone": "+1-480-934-8218",
    "email": "makingmovesmatter07@gmail.com",
    "priceRange": "$$",
    "image": [
      "https://mesamovingexperts.com/images/mesa-truck-branded.jpg",
      "https://mesamovingexperts.com/images/mesa-movers-team.jpg",
      "https://mesamovingexperts.com/images/mesa-commercial-moving.jpg"
    ],
    "logo": "https://mesamovingexperts.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mesa",
      "addressLocality": "Mesa",
      "addressRegion": "AZ",
      "postalCode": "85201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.4152,
      "longitude": -111.8315
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
      "reviewCount": "185",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Mesa" },
      { "@type": "AdministrativeArea", "name": "Downtown Mesa" },
      { "@type": "AdministrativeArea", "name": "Eastmark" },
      { "@type": "AdministrativeArea", "name": "Red Mountain Ranch" },
      { "@type": "AdministrativeArea", "name": "Dobson Ranch" },
      { "@type": "AdministrativeArea", "name": "Superstition Springs" },
      { "@type": "City", "name": "Gilbert" },
      { "@type": "City", "name": "Chandler" },
      { "@type": "City", "name": "Tempe" },
      { "@type": "City", "name": "Scottsdale" },
      { "@type": "City", "name": "Phoenix" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mesa Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Moving Services in Mesa, AZ",
            "description": "Full-service local residential and commercial moves across Mesa, AZ."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Long-Distance & Nationwide Moving",
            "description": "Cross-country and interstate moving with direct door-to-door delivery from Mesa, AZ."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential & Apartment Moves",
            "description": "Safe, careful moves for apartments, single-family homes, and condos."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial & Office Moves",
            "description": "Efficient office relocations with minimal downtime and after-hours availability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Packing Services",
            "description": "Full-service packing and unpacking using premium materials and labeling."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Secure Storage Solutions",
            "description": "Short and long term 24/7 monitored climate-controlled storage in Mesa."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mesaFaqs.map((faq) => ({
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
        "name": "Arizona",
        "item": "https://mesamovingexperts.com/az"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mesa Movers",
        "item": "https://mesamovingexperts.com/az/mesa"
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

export default MesaSchema;
