import React from 'react';
import Section1 from './section1';
import Section2 from './section2';
import Header from '../components/header';
import HowItWorksSection from '../components/home/HowItWorksSection';
import ReviewsSection from '../components/home/section2';
import AreasSection from '../components/home/section3';
import QuoteBannerSection from '../components/home/section5';
import Faq from '../components/faq';

export const metadata = {
  title: "About Making Moves Matter | Trusted Movers in Mesa, AZ",
  description:
    "Learn about Making Moves Matter, Mesa's trusted local and long-distance moving company. 15+ years of experience, 10,000+ stress-free moves, 100% licensed and insured.",
  keywords: [
    "About Making Moves Matter",
    "Mesa moving company story",
    "Professional movers Mesa AZ",
    "Trusted moving company Arizona",
    "Local and long distance movers Mesa",
    "Best movers East Valley AZ"
  ],
  authors: [{ name: "Making Moves Matter", url: "https://mesamovingexperts.com" }],
  creator: "Making Moves Matter",
  publisher: "Making Moves Matter",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/about-us/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "About Making Moves Matter | Top-Rated Movers in Mesa, AZ",
    description:
      "Discover the story behind Making Moves Matter. Providing dependable residential, commercial, and long-distance moving services across Mesa and Arizona for over 15 years.",
    url: "https://mesamovingexperts.com/about-us/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/mesa-movers-team.jpg",
        width: 1200,
        height: 630,
        alt: "Making Moves Matter Moving Team in Mesa Arizona",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Making Moves Matter | Trusted Movers in Mesa, AZ",
    description:
      "Get to know Making Moves Matter — Arizona’s premier movers for residential and commercial relocations. Over 15 years of excellence and care.",
    images: ["/images/mesa-movers-team.jpg"],
  },
};

const AboutUsPage = () => {
  const headerImg = "/images/az-fleet-hero.jpg";
  const headerText1 = "About";
  const headerText2 = "Making Moves Matter";
  const headerDesc =
    "For over 15 years, Making Moves Matter has delivered 5-star residential, commercial, local, and long-distance moving solutions throughout Mesa and Arizona.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://mesamovingexperts.com/about-us/#webpage",
        "url": "https://mesamovingexperts.com/about-us/",
        "name": "About Making Moves Matter | Trusted Movers in Mesa, AZ",
        "description":
          "Learn about Making Moves Matter, Mesa's premier local and long-distance moving company with 15+ years of experience.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://mesamovingexperts.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": "https://mesamovingexperts.com/about-us/"
            }
          ]
        }
      },
      {
        "@type": "MovingCompany",
        "@id": "https://mesamovingexperts.com/#organization",
        "name": "Making Moves Matter",
        "legalName": "Making Moves Matter LLC",
        "url": "https://mesamovingexperts.com",
        "logo": "https://mesamovingexperts.com/images/logo.png",
        "image": "https://mesamovingexperts.com/images/mesa-movers-team.jpg",
        "telephone": "+1-480-934-8218",
        "email": "info@mesamovingexperts.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mesa",
          "addressRegion": "AZ",
          "postalCode": "85201",
          "addressCountry": "US"
        },
        "priceRange": "$$",
        "foundingDate": "2010",
        "areaServed": [
          "Mesa, AZ",
          "Chandler, AZ",
          "Gilbert, AZ",
          "Tempe, AZ",
          "Scottsdale, AZ",
          "Phoenix, AZ",
          "Queen Creek, AZ",
          "Apache Junction, AZ"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "380",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Header */}
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* Brand Story & Experience Stats */}
      <Section1 />

      {/* 6 Standards & Values Pillars */}
      <Section2 />

      {/* 4-Step Move Process */}
      <HowItWorksSection />

      {/* Real Customer Reviews */}
      <ReviewsSection />

      {/* Service Areas Across Arizona */}
      <AreasSection />

      {/* Free Quote Banner */}
      <QuoteBannerSection />

      {/* FAQ Section */}
      <Faq />
    </main>
  );
};

export default AboutUsPage;
