"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaExclamationTriangle,
  FaStar,
  FaMoneyBillWave,
  FaAddressCard,
  FaBookOpen,
  FaCheckCircle
} from "react-icons/fa";

const scamTips = [
  {
    icon: <FaShieldAlt className="text-xl text-blue-600" />,
    title: "Verify Licensing and Insurance",
    description:
      "Reputable long-distance movers in Mesa should have a USDOT number and proper state licensing. Always ask for proof of insurance to ensure your belongings are covered."
  },
  {
    icon: <FaFileInvoiceDollar className="text-xl text-amber-600" />,
    title: "Get a Written Estimate",
    description:
      "Scammers often provide lowball quotes over the phone and then demand more money on moving day. Always request a detailed written estimate with all costs clearly outlined."
  },
  {
    icon: <FaExclamationTriangle className="text-xl text-red-500" />,
    title: "Watch for Red Flags",
    description:
      "Be cautious of movers who refuse to do an in-home estimate, demand large upfront deposits, or have no physical address listed."
  },
  {
    icon: <FaStar className="text-xl text-amber-500" />,
    title: "Research the Company’s Reputation",
    description:
      "Check online reviews, the Better Business Bureau (BBB), and ask for references to confirm the moving company’s credibility. Avoid companies with frequent complaints or unresolved issues."
  },
  {
    icon: <FaMoneyBillWave className="text-xl text-emerald-600" />,
    title: "Avoid Cash Payments or Large Deposits",
    description:
      "Legitimate long-distance moving companies in Mesa typically require payment upon delivery, not before. If a mover asks for a large cash deposit upfront, it’s a red flag."
  },
  {
    icon: <FaAddressCard className="text-xl text-purple-600" />,
    title: "Confirm Contact Information",
    description:
      "Ensure the Mesa moving company has a valid business address, working phone number, and professional website. Be wary of businesses that only communicate via email or have changing phone numbers."
  },
  {
    icon: <FaBookOpen className="text-xl text-sky-600" />,
    title: "Understand Your Rights",
    description:
      "The Federal Motor Carrier Safety Administration (FMCSA) provides consumer protection guidelines for moving. Familiarize yourself with the “Your Rights and Responsibilities When You Move” booklet to understand your legal protections."
  }
];

const LongDistanceScamGuide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <FaShieldAlt /> Consumer Advisory &amp; Protection
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#011234] leading-tight mb-4">
            How to Avoid Long-Distance Moving Scams
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            When hiring a long-distance moving company in Mesa, it’s crucial to protect yourself from fraudulent movers who take advantage of customers. Here are some key ways to avoid moving scams:
          </p>
        </div>

        {/* 7 Scam Prevention Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {scamTips.map((tip, index) => {
            const isLast = index === scamTips.length - 1;
            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-[var(--accent-color)] hover:bg-white transition-all duration-300 ${isLast ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                  }`}
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                    {tip.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#011234]">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Pledge Callout Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl bg-gradient-to-r from-[#011234] to-[#03235b] p-6 sm:p-8 text-white border border-white/10 shadow-lg flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-[var(--accent-color)]/20 border border-[var(--accent-color)]/40 flex items-center justify-center text-3xl text-[var(--accent-color)] shrink-0">
            <FaCheckCircle />
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Our 100% Transparency &amp; Honest Pricing Guarantee
            </h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              At Making Moves Matter, we believe in transparency, honesty, and customer satisfaction. We are a licensed and insured long-distance moving company in Mesa, providing fair pricing and top-notch service, so you never have to worry about scams or hidden fees.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LongDistanceScamGuide;
