import React from 'react';
import Header from '../components/header';
import Faq from '../components/faq';
import Link from 'next/link';

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Mesa Moving Experts",
  description:
    "Find answers to frequently asked questions about our moving services, quotes, packing supplies, licensing, insurance, and service areas in Mesa, AZ.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const headerImg = "/images/homebanne.png";
  const headerText1 = "Frequently Asked";
  const headerText2 = "Questions";
  const headerDesc =
    "Everything you need to know about our moving services, pricing, insurance, and scheduling.";

  return (
    <div>
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />
      <div className="py-12 bg-slate-50">
        <Faq />
      </div>
    </div>
  );
}
