"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaClock, FaDesktop, FaBoxes, FaPhoneAlt } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const commercialHighlights = [
    {
      icon: <FaClock className="text-[#f99c00] text-xl" />,
      title: "Zero-Downtime After-Hours Scheduling",
      desc: "We perform office relocations over weekends and evenings, allowing your retail store, dental practice, or office to resume normal operations Monday morning."
    },
    {
      icon: <FaDesktop className="text-[#f99c00] text-xl" />,
      title: "IT Equipment & Electronics Wrapping",
      desc: "Specialized anti-static padding, multi-screen computer crates, and labeled cable bundles ensure all desktop stations and printers arrive intact and ready to reconnect."
    },
    {
      icon: <FaBoxes className="text-[#f99c00] text-xl" />,
      title: "Modular Desks & Fixture Assembly",
      desc: "Expert disassembly and precise reassembly of modular cubicles, conference tables, retail shelving, and executive suites with systematic room placement."
    }
  ];

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="commercial-moving">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Corporate & Office Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Commercial and Office Relocations in San Tan Valley, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Reliable, organized moving solutions for local businesses, medical practices, retail storefronts, and commercial suites along Hunt Highway and Gary Road.
          </p>
        </div>

        {/* 3 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {commercialHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-[#f99c00] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-[var(--heading-text-color)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Consultation Callout with Visual */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="relative w-full lg:w-1/3 h-52 sm:h-64 rounded-xl overflow-hidden border border-neutral-200 flex-shrink-0">
            <Image
              src="/images/san-tan-valley-commercial-moving.jpg"
              alt="Making Moves Matter commercial moving crew relocating an office in San Tan Valley Arizona"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="lg:w-2/3 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--heading-text-color)] mb-2">
                Relocating Your San Tan Valley Business or Office?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Our commercial moving directors conduct on-site walk-throughs to provide binding quotes, Certificate of Insurance (COI) issuance, and coordinated logistics for local businesses.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:4809348218"
                className="px-6 py-3 rounded-lg bg-[#011234] hover:bg-slate-800 text-white font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
              >
                <FaPhoneAlt className="text-xs text-[#f99c00]" />
                Call (480) 934-8218
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="px-6 py-3 rounded-lg bg-[#f99c00] hover:bg-[#e08b00] text-white font-bold text-sm transition-colors cursor-pointer"
              >
                Request Commercial Proposal
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section4;