"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBoxOpen,
  FaHome,
  FaBuilding,
  FaChair,
  FaWarehouse,
  FaTruckMoving,
  FaArrowRight
} from "react-icons/fa";
import { openQuoteModal } from "@/app/components/QuoteButton";

const services = [
  {
    icon: <FaBoxOpen />,
    title: "Full-Service Packing and Moving",
    description:
      "Our packing and moving services in Mesa ensure your items are securely packed for transport. We use high-quality packing materials to protect your belongings throughout the journey.",
    tag: "High-Grade Materials"
  },
  {
    icon: <FaHome />,
    title: "Residential Long-Distance Movers in Mesa",
    description:
      "Moving your home to another city or state? Our residential long-distance movers in Mesa handle every aspect of your move with care and efficiency.",
    tag: "Homes & Estates"
  },
  {
    icon: <FaBuilding />,
    title: "Apartment and Condo Moving",
    description:
      "Our experienced apartment movers in Mesa specialize in long-distance moves for multi-unit buildings, navigating stairs and elevators with ease.",
    tag: "Elevators & High-Rises"
  },
  {
    icon: <FaBuilding />,
    title: "Office and Commercial Long-Distance Moving",
    description:
      "Relocating a business? Our Mesa office movers offer organized, efficient moving solutions to ensure a seamless transition with minimal disruption.",
    tag: "Zero Downtime"
  },
  {
    icon: <FaChair />,
    title: "Furniture Movers in Mesa, AZ",
    description:
      "Our furniture movers in Mesa carefully disassemble, wrap, and transport large or heavy furniture to your new location.",
    tag: "Disassembly & Padding"
  },
  {
    icon: <FaWarehouse />,
    title: "Storage Solutions for Long-Distance Moves",
    description:
      "If your new home isn’t ready yet, we offer secure storage solutions in Mesa to keep your belongings safe until you’re ready for delivery.",
    tag: "Secure & Climate-Controlled"
  }
];

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <FaTruckMoving /> Comprehensive Interstate Relocation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#011234] leading-tight mb-4">
            Our Long-Distance Moving Services Include:
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From complete household packing and white-glove furniture handling to secure storage in transit, our Mesa moving crews provide dependable cross-country moving solutions.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--accent-color)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-[52px] h-[52px] rounded-xl bg-amber-500/10 text-[var(--accent-color)] flex items-center justify-center text-2xl group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#011234] mb-3 group-hover:text-[var(--accent-color)] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={openQuoteModal}
                  type="button"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--accent-color)] hover:text-amber-700 cursor-pointer transition-colors"
                >
                  <span>Request Free Estimate</span>
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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