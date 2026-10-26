"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBuilding, FaClock, FaDesktop, FaBoxes, FaPhoneAlt, FaCheckCircle, FaFileInvoiceDollar } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const commercialHighlights = [
    {
      icon: <FaClock className="text-[#f99c00] text-xl" />,
      title: "Zero-Downtime Strategic Scheduling",
      desc: "Flexible weekend and evening moving slots ensure your staff leaves on Friday and resumes normal operations on Monday without business interruption."
    },
    {
      icon: <FaDesktop className="text-[#f99c00] text-xl" />,
      title: "Workstation & IT Protection",
      desc: "Careful disconnection, anti-static wrapping, and organized transport of server racks, dual monitors, printers, and delicate tech hardware."
    },
    {
      icon: <FaBoxes className="text-[#f99c00] text-xl" />,
      title: "Modular Office Furniture & Layout",
      desc: "Expert disassembly and setup of executive desks, cubicles, conference tables, and commercial filing systems with detailed inventory tracking."
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
            Commercial and Office Relocations in Scottsdale, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Efficient, organized, and expedited moves for businesses of all sizes across the Scottsdale Airpark, Old Town, and corporate hubs.
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

        {/* Corporate Consultation Callout */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="lg:w-2/3">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--heading-text-color)] mb-2">
              Relocating Your Scottsdale Business or Professional Suite?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our dedicated corporate moving supervisors conduct on-site walk-throughs to provide binding estimates, COI (Certificate of Insurance) verification, and dedicated dock scheduling.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
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
    </section>
  );
};

export default Section4;