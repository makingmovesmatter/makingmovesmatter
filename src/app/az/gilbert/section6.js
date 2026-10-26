"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaClock, FaDollarSign, FaPhoneAlt, FaStar, FaAward, FaTruck } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const Section6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const pillars = [
    {
      icon: <FaShieldAlt className="text-[#f99c00] text-2xl" />,
      title: "Your Items Arrive Safely",
      desc: "Our experienced crew ensures your household or office belongings are securely packed and transported across state lines using dedicated air-ride moving trucks and commercial tie-downs."
    },
    {
      icon: <FaClock className="text-[#f99c00] text-2xl" />,
      title: "Timely Delivery",
      desc: "We understand that scheduling precision matters in cross-country moves. We provide guaranteed pickup dates, realistic transit timelines, and continuous dispatch updates."
    },
    {
      icon: <FaDollarSign className="text-[#f99c00] text-2xl" />,
      title: "Affordable Pricing",
      desc: "We offer clear, flat-rate pricing for interstate and cross-country relocations, keeping you on budget with zero unexpected line-items or hidden fuel charges."
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: <FaAward className="text-[#f99c00]" /> },
    { number: "10,000+", label: "Successful Moves", icon: <FaTruck className="text-[#f99c00]" /> },
    { number: "100%", label: "Licensed & Insured", icon: <FaShieldAlt className="text-[#f99c00]" /> },
    { number: "4.9★", label: "Top Rated on Google", icon: <FaStar className="text-[#f99c00]" /> }
  ];

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="gilbert-long-distance">
      <div className="container mx-auto px-5">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Nationwide Relocation Specialists
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Long-Distance Moves with Confidence
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Relocating across town or across state lines can be overwhelming, but with Making Moves Matter, you can rest assured your move will be handled professionally and safely.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-[#f99c00] transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-[var(--heading-text-color)] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#011234] text-white border border-slate-800 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-3">
              <div className="text-2xl sm:text-3xl flex justify-center mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#f99c00] mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Callout Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200 text-center">
          <p className="text-gray-800 text-base sm:text-lg font-bold mb-4">
            Trust our Gilbert Moving Company to make your interstate or cross-country move hassle-free.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:4809348218"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#f99c00] hover:bg-[#e08b00] text-white font-semibold text-sm transition-colors"
            >
              <FaPhoneAlt className="text-xs" />
              Call (480) 934-8218
            </a>
            <button
              type="button"
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-[#f99c00] text-[#f99c00] hover:bg-orange-50 font-semibold text-sm transition-colors cursor-pointer"
            >
              Get A Free Long-Distance Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section6;
