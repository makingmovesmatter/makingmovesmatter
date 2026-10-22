import React from 'react';
import Header from '../components/header';
import Faq from '../components/faq';
import ReviewsClient from './ReviewsClient';

export const metadata = {
  title: "Customer Reviews & 5-Star Ratings | Mesa Moving Experts | Making Moves Matter",
  description:
    "Read 200+ verified 5-star Google customer reviews for Making Moves Matter. Rated 4.9/5 in Mesa, AZ for residential, commercial, packing, and long-distance moving.",
  keywords: [
    "Making Moves Matter reviews",
    "Mesa moving company reviews",
    "Best movers Mesa AZ",
    "Google reviews Mesa movers",
    "Affordable movers Arizona reviews",
    "Trusted moving company ratings",
  ],
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  creator: "Mesa Moving Experts",
  publisher: "Mesa Moving Experts",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: "Customer Reviews & 5-Star Ratings | Mesa Moving Experts",
    description:
      "Read real 5-star customer reviews for Making Moves Matter. Rated 4.9/5 on Google for trusted moving across Mesa and Arizona.",
    url: "https://mesamovingexperts.com/reviews",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 500,
        height: 300,
        alt: "Mesa Moving Experts Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews & 5-Star Ratings | Mesa Moving Experts",
    description:
      "Rated 4.9/5 on Google with 204+ verified reviews. Discover why Mesa homeowners trust Making Moves Matter.",
    images: ["/images/logo.png"],
    creator: "@mesamoving",
  },
};

export default function ReviewsPage() {
  const headerImg = "/images/homebanne.png";
  const headerText1 = "Customer";
  const headerText2 = "Reviews & Ratings";
  const headerDesc =
    "Read real Google reviews from satisfied homeowners and businesses who trusted Making Moves Matter with their relocations.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Making Moves Matter - Mesa Moving Experts",
    "image": "https://mesamovingexperts.com/images/logo.png",
    "telephone": "(480) 934-8218",
    "email": "makingmovesmatter07@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "445 S Dobson Rd",
      "addressLocality": "Mesa",
      "addressRegion": "AZ",
      "postalCode": "85202",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "204",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />
      <ReviewsClient />
      <Faq />
    </>
  );
}
