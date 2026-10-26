"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHome, FaBuilding, FaBoxOpen, FaWarehouse, FaDollyFlatbed, FaArrowRight } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const services = [
  {
    icon: <FaHome className="text-[#f99c00] text-3xl" />,
    title: "Residential Moving",
    description: "Local and long-distance moves for single-family homes, golf community villas, and apartments across San Tan Valley.",
    tag: "Houses, Golf Estates & Condos"
  },
  {
    icon: <FaBuilding className="text-[#f99c00] text-3xl" />,
    title: "Commercial and Office Relocations",
    description: "Efficient moves for local businesses, medical practices, retail storefronts, and offices along Hunt Highway and Gary Road.",
    tag: "Offices & Retail Suites"
  },
  {
    icon: <FaBoxOpen className="text-[#f99c00] text-3xl" />,
    title: "Packing and Unpacking",
    description: "Full-service packing solutions using heavy-duty double-walled boxes, bubble wrap, and wardrobe boxes to protect all your belongings.",
    tag: "Full & Partial Packing"
  },
  {
    icon: <FaWarehouse className="text-[#f99c00] text-3xl" />,
    title: "Secure Storage Options",
    description: "Clean, climate-controlled storage units for both short-term transitional needs and long-term storage with 24/7 video monitoring.",
    tag: "Climate-Controlled Units"
  },
  {
    icon: <FaDollyFlatbed className="text-[#f99c00] text-3xl" />,
    title: "Specialty & Heavy Item Moving",
    description: "Careful transport of large, heavy, and valuable items including heavy gun safes, hot tubs, upright/grand pianos, and workout equipment.",
    tag: "Safes, Spas & Pianos"
  }
];

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full py-16 bg-neutral-50 border-y border-neutral-200" ref={ref} id="san-tan-valley-services">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Comprehensive Moving Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Our San Tan Valley Moving Services Include:
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Tailored, full-service relocation solutions designed to make your move smooth, safe, and stress-free.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-[#f99c00] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {srv.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-gray-700">
                    {srv.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--heading-text-color)] mb-2 group-hover:text-[#f99c00] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="text-xs font-bold text-[#f99c00] group-hover:text-[#e08b00] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Request Service Quote <FaArrowRight className="text-[10px]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section2;
