import React from "react";
import { sanTanValleyFaqs } from "./faqData";

const SanTanValleySchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://mesamovingexperts.com/az/san-tan-valley#movingcompany",
    "name": "Making Moves Matter - San Tan Valley Moving Company",
    "alternateName": "San Tan Valley Movers",
    "description":
      "Trusted San Tan Valley moving company with 15+ years of experience. Making Moves Matter specializes in stress-free residential, commercial, packing, secure climate storage, and long-distance moving across San Tan Valley and northern Pinal County, AZ.",
    "url": "https://mesamovingexperts.com/az/san-tan-valley",
    "telephone": "+1-480-934-8218",
    "email": "makingmovesmatter07@gmail.com",
    "priceRange": "$$",
    "image": [
      "https://mesamovingexperts.com/images/san-tan-valley-truck-branded.jpg",
      "https://mesamovingexperts.com/images/san-tan-valley-residential-moving.jpg",
      "https://mesamovingexperts.com/images/san-tan-valley-commercial-moving.jpg"
    ],
    "logo": "https://mesamovingexperts.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "San Tan Valley",
      "addressLocality": "San Tan Valley",
      "addressRegion": "AZ",
      "postalCode": "85140",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.1809,
      "longitude": -111.554
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
      "reviewCount": "188",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "San Tan Valley" },
      { "@type": "AdministrativeArea", "name": "Johnson Ranch" },
      { "@type": "AdministrativeArea", "name": "San Tan Heights" },
      { "@type": "AdministrativeArea", "name": "Copper Basin" },
      { "@type": "AdministrativeArea", "name": "Pecan Creek" },
      { "@type": "AdministrativeArea", "name": "Skyline Ranch" },
      { "@type": "AdministrativeArea", "name": "Ironwood Crossing" },
      { "@type": "City", "name": "Queen Creek" },
      { "@type": "City", "name": "Florence" },
      { "@type": "City", "name": "Gilbert" },
      { "@type": "City", "name": "Chandler" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "San Tan Valley Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Moving in San Tan Valley, AZ",
            "description": "Local and long-distance moves for single-family homes, golf villas, and apartments in San Tan Valley."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial and Office Relocations",
            "description": "Efficient office and retail moves across San Tan Valley commercial corridors."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Packing and Unpacking Services",
            "description": "Full-service packing solutions using heavy-duty protective materials."
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
            "description": "Safe transport of pianos, gun safes, hot tubs, and heavy appliances."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": sanTanValleyFaqs.map((faq) => ({
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
        "name": "Movers in San Tan Valley, AZ",
        "item": "https://mesamovingexperts.com/az/san-tan-valley"
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

export default SanTanValleySchema;
