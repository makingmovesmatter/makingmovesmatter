import React from "react";
import Header from "./components/header";
import Section2 from "./components/home/section2";
import Section1 from "./components/home/section1";
import Section3 from "./components/home/section3";
import Section5 from "./components/home/section5";
import Section7 from "./components/home/section7";
import ServiceSection from "./components/servicesection";
import ServiceGrid from "./components/servicegrid";
import Section4 from "./components/home/section4";
import HowItWorksSection from "./components/home/HowItWorksSection";
import Faq from "./components/faq";

export const metadata = {
  title: "Making Moves Matter | Top-Rated Mesa Movers & Relocation Services in AZ",
  description:
    "Looking for dependable movers in Mesa, AZ? Making Moves Matter provides 5-star local, long-distance, residential, commercial, and packing services across Arizona. Get a free quote!",
  keywords: [
    "movers in Mesa AZ",
    "Mesa moving company",
    "Making Moves Matter",
    "local movers Mesa Arizona",
    "commercial movers Mesa",
    "long distance moving Arizona",
    "affordable movers Phoenix AZ",
    "furniture movers East Valley",
  ],
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Making Moves Matter | Top-Rated Mesa Movers & Relocation Services in AZ",
    description:
      "Dependable, stress-free moving services across Mesa, Phoenix, and the entire East Valley. 15+ years experience, licensed & insured with 5-star reviews.",
    url: "https://mesamovingexperts.com",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/az-fleet-hero.png",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter Branded Fleet and Moving Team in Mesa Arizona",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Making Moves Matter | Top-Rated Mesa Movers & Relocation Services in AZ",
    description:
      "Stress-free moving services across Mesa and Arizona. Residential, commercial, local, and cross-country relocations.",
    images: ["/images/az-fleet-hero.png"],
    creator: "@MesaMoving",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": "https://mesamovingexperts.com/#organization",
      "name": "Making Moves Matter",
      "url": "https://mesamovingexperts.com",
      "logo": "https://mesamovingexperts.com/images/logo.png",
      "image": "https://mesamovingexperts.com/images/az-fleet-hero.png",
      "description":
        "Premier residential and commercial moving company based in Mesa, AZ, offering local, long-distance, packing, and furniture assembly services throughout Arizona.",
      "telephone": "+1-480-934-8218",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mesa, AZ",
        "addressLocality": "Mesa",
        "addressRegion": "AZ",
        "postalCode": "85201",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.4152,
        "longitude": -111.8315,
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
            "Sunday",
          ],
          "opens": "07:00",
          "closes": "20:00",
        },
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "258",
        "bestRating": "5",
        "worstRating": "1",
      },
      "areaServed": [
        "Mesa, AZ",
        "Chandler, AZ",
        "Scottsdale, AZ",
        "Tempe, AZ",
        "Gilbert, AZ",
        "Phoenix, AZ",
        "Queen Creek, AZ",
        "San Tan Valley, AZ",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mesamovingexperts.com/#website",
      "url": "https://mesamovingexperts.com",
      "name": "Making Moves Matter",
      "publisher": { "@id": "https://mesamovingexperts.com/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://mesamovingexperts.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a move cost in Mesa, AZ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moving costs depend on home size, travel distance, and required packing services. Making Moves Matter provides transparent, all-inclusive estimates with zero hidden fees.",
          },
        },
        {
          "@type": "Question",
          "name": "Are your Mesa movers licensed and insured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Making Moves Matter is fully licensed, bonded, and insured in compliance with all Arizona state and federal moving regulations for maximum customer protection.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide packing and unpacking services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide full-service packing and unpacking using commercial-grade moving boxes, bubble wrap, custom crating, and heavy-duty furniture blankets.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I hire movers just for labor, loading, or unloading?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. If you have your own truck, container, or PODS, our skilled crews can be hired solely for heavy lifting, loading, unloading, and in-home rearranging.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you handle specialty items like pianos, safes, or hot tubs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We operate specialized rigging gear, heavy-duty spa dollies, and ramps specifically designed for pianos, gun safes, appliances, and hot tubs.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  const headerImg = "/images/az-fleet-hero.png";
  const headerText1 = "Top-Rated Mesa Movers";
  const headerText2 = "Making Moves Matter";
  const headerDesc =
    "Stress-free local, long-distance, residential, and commercial moving services across Mesa, Phoenix, and the entire East Valley. 15+ years of trusted experience, licensed & insured, transparent pricing.";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* 1. Real Customer Reviews & Social Proof */}
      <Section2 />

      {/* 2. Comprehensive Moving Services Grid (All Branded Imagery) */}
      <ServiceSection />

      {/* 3. Company Story, Credentials & Stats */}
      <Section1 />

      {/* 4. How It Works - Step by Step Workflow */}
      <HowItWorksSection />

      {/* 5. Areas We Serve (Mesa, Chandler, Scottsdale, Tempe, Gilbert, Phoenix, Queen Creek, San Tan Valley) */}
      <Section3 />

      {/* 6. Why Choose Us (6 Pillars & Value Props) */}
      <Section7 />

      {/* 7. Process Details & Video Demonstration */}
      <ServiceGrid />

      {/* 8. In-Depth Moving Guarantees & Credentials */}
      <Section4 />

      {/* 9. Call Us & Moving Quote Banner */}
      <Section5 />

      {/* 10. Frequently Asked Questions */}
      <Faq />
    </div>
  );
}
