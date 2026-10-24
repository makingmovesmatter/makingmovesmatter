"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHome, FaBuilding, FaBoxOpen, FaWarehouse, FaDollyFlatbed, FaArrowRight } from "react-icons/fa";
import { openQuoteModal } from "@/app/components/QuoteButton";

const services = [
  {
    icon: <FaHome className="text-[#f99c00] text-3xl" />,
    title: "Residential Moving",
    description: "Local and long-distance moves for houses, apartments, and condos across Mesa, AZ and beyond.",
    tag: "Houses & Apartments"
  },
  {
    icon: <FaBuilding className="text-[#f99c00] text-3xl" />,
    title: "Commercial and Office Relocations",
    description: "Efficient moves for businesses of all sizes, with after-hours options to minimize work downtime.",
    tag: "Corporate & Retail"
  },
  {
    icon: <FaBoxOpen className="text-[#f99c00] text-3xl" />,
    title: "Packing and Unpacking",
    description: "Full-service packing and unpacking using top-grade materials, protective wrapping, and organized labeling.",
    tag: "Full & Partial Packing"
  },
  {
    icon: <FaWarehouse className="text-[#f99c00] text-3xl" />,
    title: "Secure Storage Options",
    description: "Short- and long-term climate-controlled storage solutions monitored 24/7 for complete peace of mind.",
    tag: "Climate-Controlled"
  },
  {
    icon: <FaDollyFlatbed className="text-[#f99c00] text-3xl" />,
    title: "Specialty Item Moving",
    description: "Careful handling of large, fragile, and valuable items including pianos, antiques, safes, and artwork.",
    tag: "High-Value Care"
  }
];

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full py-16 bg-neutral-50 border-y border-neutral-200" ref={ref} id="mesa-services">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Comprehensive Moving Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading-text-color)] capitalize">
            Our Mesa Packing and Movers Services Include
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Tailored, full-service relocation solutions designed to make your move smooth, safe, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white rounded-xl border border-neutral-200 p-6 flex flex-col justify-between hover:border-[#f99c00] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-100 text-neutral-700">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--heading-text-color)] mb-2 group-hover:text-[#f99c00] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <a
                  href="tel:4809348218"
                  className="text-xs font-semibold text-[#f99c00] hover:text-[#d98500] inline-flex items-center gap-1.5"
                >
                  Book This Service <FaArrowRight className="text-[10px]" />
                </a>
                <span className="text-xs text-gray-400 font-medium">Free Quote</span>
              </div>
            </motion.div>
          ))}

          {/* Interactive Quick Estimate Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: services.length * 0.1, ease: "easeOut" }}
            className="bg-[#011234] text-white rounded-xl border border-slate-800 p-6 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block px-2.5 py-1 rounded bg-orange-500/20 text-[#f99c00] border border-orange-500/30 text-xs font-bold uppercase tracking-wider mb-4">
                Need a Custom Plan?
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Get an Instant Free Quote
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Every move in Mesa is unique. Speak directly with our moving coordinators for an upfront, flat-rate estimate with zero surprises.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:4809348218"
                className="w-full text-center px-4 py-2.5 rounded-md bg-[#f99c00] hover:bg-[#e08b00] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200"
              >
                Call (480) 934-8218
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="w-full text-center px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-colors duration-200 cursor-pointer"
              >
                Online Quote
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
