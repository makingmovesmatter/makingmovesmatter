import React from 'react';
import Header from '../components/header';
import Quote from '../components/quote';
import ReviewsSection from '../components/home/section2';
import AreasSection from '../components/home/section3';
import Faq from '../components/faq';
import { FaShieldAlt, FaClock, FaStar, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: "Get a Free Moving Quote | Mesa Moving Experts",
  description:
    "Request your free, accurate, flat-rate moving quote in Mesa, AZ and across Arizona. Fast response, guaranteed pricing, 100% licensed and insured movers.",
  keywords: [
    "Mesa moving quote",
    "Free moving estimate Mesa AZ",
    "Moving cost calculator Arizona",
    "Affordable movers quote",
    "Making Moves Matter quote"
  ],
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: "Get a Free Moving Quote | Making Moves Matter",
    description:
      "Get an instant, guaranteed flat-rate moving estimate for local or long-distance moves in Mesa, Phoenix, and across Arizona.",
    url: "https://mesamovingexperts.com/quote",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/az-fleet-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Making Moves Matter Free Moving Quote",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function QuotePage() {
  const headerImg = "/images/az-fleet-hero.jpg";
  const headerText1 = "Get Your Free";
  const headerText2 = "Moving Quote";
  const headerDesc =
    "Fast, accurate, guaranteed flat-rate quotes with zero hidden fees. Fill out the quick 2-step form below or call our dispatch team directly.";

  return (
    <main>
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* Main Quote Form Section */}
      <section className="w-full py-12 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Value Proposition & Direct Phone Support */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <span className="text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider block mb-2">
                  ⚡ Transparent &amp; Guaranteed
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#011234] leading-tight mb-3">
                  Why Get a Quote from Making Moves Matter?
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  We believe in upfront, straightforward pricing. When you request an estimate with us, you get a clear, guaranteed rate tailored to your exact dates and inventory.
                </p>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                    <span><strong>Zero Hidden Fees:</strong> No stairs or fuel surprises</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                    <span><strong>100% Licensed &amp; Insured:</strong> Full valuation protection</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                    <span><strong>Dedicated Trucks:</strong> No co-loading or cross-dock transfers</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                    <span><strong>Professional Full-Time Crews:</strong> Never day labor</span>
                  </div>
                </div>
              </div>

              {/* Direct Phone Call Box */}
              <div className="bg-[#011234] text-white border border-slate-800 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-color)] mb-1">
                  Prefer to Talk to a Human?
                </p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Speak Directly with Our Mesa Dispatch Team
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Call now for immediate moving advice, customized scheduling, or instant phone estimates.
                </p>
                <a
                  href="tel:4809348218"
                  className="w-full py-3.5 px-4 rounded-xl bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-opacity"
                >
                  <FaPhoneAlt className="text-xs text-white" />
                  <span>Call (480) 934-8218</span>
                </a>
              </div>
            </div>

            {/* Right: The 2-Step Quote Form */}
            <div className="lg:col-span-7">
              <Quote />
            </div>

          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <ReviewsSection />

      {/* Areas Served Across Arizona */}
      <AreasSection />

      {/* Frequently Asked Questions */}
      <Faq />
    </main>
  );
}

