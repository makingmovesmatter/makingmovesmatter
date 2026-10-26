"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWarehouse, FaBoxOpen, FaPhoneAlt, FaCheckCircle, FaDollyFlatbed, FaShieldAlt } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const Section5 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const specialtyCategories = [
    {
      title: "Upright & Concert Grand Pianos",
      desc: "Specialized piano skids, heavy-duty padded shoes, and precision straps ensure safe transport of delicate instruments without surface scratches or internal disruption."
    },
    {
      title: "Antiques, Sculptures & Fine Art",
      desc: "Custom wood crating, museum-grade glass protection, and telescopic art boxes for high-value heirlooms, gallery pieces, and architectural decor."
    },
    {
      title: "Heavy Gun Safes & High-End Fitness Gear",
      desc: "Motorized stair-climbing dollies and reinforced ramps allow our crews to safely transport 500-1,200 lb security safes without floor damage."
    }
  ];

  const storageFeatures = [
    "Clean, climate-controlled units shielded from extreme desert heat and dust",
    "24/7 digital video surveillance, individual alarm points, and computerized gate access",
    "Flexible month-to-month leases for short-term closings and long-term storage needs",
    "Direct door-to-warehouse pickup and delivery service across Phoenix and the Valley"
  ];

  return (
    <section className="w-full bg-white py-16" ref={ref} id="specialty-storage">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Specialty Moving & Secure Storage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Specialty Item Moving, Packing & Climate-Controlled Storage
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Careful transport of large, fragile, and valuable items, full-service packing, and secure climate-controlled warehousing in Phoenix, AZ.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12">

          {/* Left Column: Specialty Moving Highlights */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-2xl font-bold text-[var(--heading-text-color)] mb-3 flex items-center gap-2.5">
                <FaDollyFlatbed className="text-[#f99c00]" />
                Specialty Item Moving for Fragile, Large & Valuable Items
              </h3>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
                Not all belongings can be moved with ordinary boxes. In Phoenix, our seasoned team handles high-value, oversized, and fragile treasures with white-glove respect:
              </p>

              <div className="space-y-3.5 mb-6">
                {specialtyCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-[#f99c00] transition-colors"
                  >
                    <h4 className="font-bold text-sm text-[var(--heading-text-color)] mb-1">
                      {cat.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:4809348218"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#011234] hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
              >
                <FaPhoneAlt className="text-[10px] text-[#f99c00]" />
                Call (480) 934-8218
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#f99c00] hover:bg-[#e08b00] text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Quote Specialty Item
              </button>
            </div>
          </motion.div>

          {/* Right Column: Packing & Secure Storage Card */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div>
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f99c00] text-lg">
                    <FaBoxOpen />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--heading-text-color)]">
                    Full-Service Packing & Unpacking
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Our professional packing team uses premium double-walled boxes, bubble wrap, stretch film, and custom dish packs to safeguard all glassware, heirlooms, and electronics before loading.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
                  <span className="flex items-center gap-1.5"><FaCheckCircle className="text-[#f99c00]" /> Heavy-Duty Box Packs</span>
                  <span className="flex items-center gap-1.5"><FaCheckCircle className="text-[#f99c00]" /> Wardrobe Cartons</span>
                  <span className="flex items-center gap-1.5"><FaCheckCircle className="text-[#f99c00]" /> Bubble Wrap & Paper</span>
                  <span className="flex items-center gap-1.5"><FaCheckCircle className="text-[#f99c00]" /> Organized Room Labeling</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-orange-50/70 border border-orange-200">
                <h4 className="font-bold text-base text-[#011234] mb-3 flex items-center gap-2">
                  <FaWarehouse className="text-[#f99c00]" />
                  Clean, Climate-Controlled Secure Storage
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  {storageFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#f99c00] text-xs mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={openQuoteModal}
                className="w-full text-center py-3.5 px-6 rounded-lg bg-[#f99c00] hover:bg-[#e08b00] text-white font-bold text-sm transition-colors cursor-pointer"
              >
                Inquire About Phoenix Storage Options
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Section5;
