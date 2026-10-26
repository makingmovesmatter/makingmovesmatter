"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHome, FaBuilding, FaBoxOpen, FaWarehouse, FaDollyFlatbed, FaDumbbell, FaGlobeAmericas, FaArrowRight } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const services = [
  {
    icon: <FaHome className="text-[#f99c00] text-3xl" />,
    title: "Residential Moving",
    description: "Local and long-distance moves for houses, apartments, and master-planned community homes in Gilbert, AZ.",
    tag: "Houses, Condos & Estates"
  },
  {
    icon: <FaBuilding className="text-[#f99c00] text-3xl" />,
    title: "Commercial and Office Relocations",
    description: "Efficient moves for businesses of all sizes, retail stores, and corporate offices with zero operational disruption.",
    tag: "Corporate & Offices"
  },
  {
    icon: <FaBoxOpen className="text-[#f99c00] text-3xl" />,
    title: "Packing and Unpacking",
    description: "Full-service packing solutions using high-quality materials to protect all fragile valuables and heirlooms.",
    tag: "Full & Partial Packing"
  },
  {
    icon: <FaWarehouse className="text-[#f99c00] text-3xl" />,
    title: "Secure Storage Options",
    description: "Clean, climate-controlled storage for short- or long-term needs with 24/7 digital surveillance and gated access.",
    tag: "Climate-Controlled Units"
  },
  {
    icon: <FaDollyFlatbed className="text-[#f99c00] text-3xl" />,
    title: "Specialty Item Moving",
    description: "Careful handling of large, fragile, and valuable items including pianos, delicate antiques, and fine art pieces.",
    tag: "Fragile & Valuable"
  },
  {
    icon: <FaDumbbell className="text-[#f99c00] text-3xl" />,
    title: "Heavy Item Moving",
    description: "From heavy gun safes to hot tubs, we’ve got the muscle, specialized rigging equipment, and technique to move heavy cargo.",
    tag: "Safes & Hot Tubs"
  },
  {
    icon: <FaGlobeAmericas className="text-[#f99c00] text-3xl" />,
    title: "Local Moves & Long Distance Moving",
    description: "Reliable moving services across town in Gilbert or across state lines to any state nationwide with guaranteed delivery windows.",
    tag: "Local & Nationwide"
  }
];

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full py-16 bg-neutral-50 border-y border-neutral-200" ref={ref} id="gilbert-services">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Comprehensive Moving Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Gilbert Moving Services Include:
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Let us do the heavy lifting—literally and figuratively—so you don’t have to.
          </p>
        </div>

        {/* 7-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
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
