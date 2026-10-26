import React from 'react';

const ArizonaHubSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MovingCompany",
        "@id": "https://mesamovingexperts.com/#organization",
        "name": "Making Moves Matter",
        "alternateName": "Mesa Moving Experts",
        "url": "https://mesamovingexperts.com/az",
        "logo": "https://mesamovingexperts.com/images/image.png",
        "image": "https://mesamovingexperts.com/images/az-fleet-hero.jpg",
        "telephone": "+1-480-934-8218",
        "email": "support@mesamovingexperts.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mesa Hub",
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
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "214",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Mesa",
            "sameAs": "https://mesamovingexperts.com/az/mesa"
          },
          {
            "@type": "City",
            "name": "Chandler",
            "sameAs": "https://mesamovingexperts.com/az/chandler"
          },
          {
            "@type": "City",
            "name": "Scottsdale",
            "sameAs": "https://mesamovingexperts.com/az/scottsdale"
          },
          {
            "@type": "City",
            "name": "Tempe",
            "sameAs": "https://mesamovingexperts.com/az/tempe"
          },
          {
            "@type": "City",
            "name": "Gilbert",
            "sameAs": "https://mesamovingexperts.com/az/gilbert"
          },
          {
            "@type": "City",
            "name": "Phoenix",
            "sameAs": "https://mesamovingexperts.com/az/phoenix"
          },
          {
            "@type": "City",
            "name": "Queen Creek",
            "sameAs": "https://mesamovingexperts.com/az/queen-creek"
          },
          {
            "@type": "City",
            "name": "San Tan Valley",
            "sameAs": "https://mesamovingexperts.com/az/san-tan-valley"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://mesamovingexperts.com/az/#cities",
        "name": "Arizona Moving Service Areas",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Movers in Mesa, AZ",
            "url": "https://mesamovingexperts.com/az/mesa"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Movers in Chandler, AZ",
            "url": "https://mesamovingexperts.com/az/chandler"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Movers in Scottsdale, AZ",
            "url": "https://mesamovingexperts.com/az/scottsdale"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Movers in Tempe, AZ",
            "url": "https://mesamovingexperts.com/az/tempe"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Movers in Gilbert, AZ",
            "url": "https://mesamovingexperts.com/az/gilbert"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Movers in Phoenix, AZ",
            "url": "https://mesamovingexperts.com/az/phoenix"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Movers in Queen Creek, AZ",
            "url": "https://mesamovingexperts.com/az/queen-creek"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Movers in San Tan Valley, AZ",
            "url": "https://mesamovingexperts.com/az/san-tan-valley"
          }
        ]
      },
      {
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
            "name": "Arizona Service Areas",
            "item": "https://mesamovingexperts.com/az"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What cities in Arizona do Making Moves Matter serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Making Moves Matter provides professional residential and commercial moving services across the entire Phoenix Metropolitan area and East Valley, including Mesa, Chandler, Scottsdale, Tempe, Gilbert, Phoenix, Queen Creek, and San Tan Valley, as well as statewide in Arizona."
            }
          },
          {
            "@type": "Question",
            "name": "Do you charge extra travel fees between cities in the Phoenix East Valley?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We offer upfront, transparent pricing with guaranteed flat rates and no hidden travel fees between Mesa, Gilbert, Chandler, Tempe, Scottsdale, Phoenix, Queen Creek, and San Tan Valley."
            }
          },
          {
            "@type": "Question",
            "name": "How do you protect furniture during moves in extreme Arizona summer heat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our crews use thick commercial moving blankets, breathable shrink-wrap, and climate-conscious handling techniques to protect leather, wood finishes, and electronics from heat damage during transit across Arizona."
            }
          },
          {
            "@type": "Question",
            "name": "Can you handle same-day or urgent moves in Arizona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, depending on daily truck and crew availability, our dispatch team can accommodate last-minute and urgent relocations across the Valley. Call (480) 934-8218 for immediate availability."
            }
          },
          {
            "@type": "Question",
            "name": "Are your movers licensed and insured in Arizona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Making Moves Matter is fully licensed, bonded, and insured in compliance with all Arizona Department of Transportation (ADOT) and federal moving regulations, providing full cargo valuation protection."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ArizonaHubSchema;
