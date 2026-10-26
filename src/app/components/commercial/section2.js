"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaTruck,
  FaStore,
  FaBuilding,
  FaWarehouse,
  FaChair,
  FaBoxOpen,
  FaClock,
  FaArrowRight
} from "react-icons/fa";
import { openQuoteModal } from "../QuoteButton";

const services = [
  {
    icon: <FaBuilding />,
    title: "Office Movers in Mesa",
    description:
      "Our skilled Mesa office movers handle everything from cubicles and desks to computers and conference tables, ensuring a smooth office transition.",
    tag: "Workstations & Tech"
  },
  {
    icon: <FaStore />,
    title: "Retail & Storefront Moving",
    description:
      "Relocating a retail space? Our commercial movers in Mesa, AZ move store fixtures, inventory, and displays with precision to get your business back up and running quickly.",
    tag: "Fixtures & Inventory"
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Relocation Services",
    description:
      "Expanding or moving your corporate office? Our Mesa corporate movers provide full-service relocation solutions, including packing, moving, and office setup.",
    tag: "Turnkey Corporate"
  },
  {
    icon: <FaWarehouse />,
    title: "Warehouse & Industrial Moving",
    description:
      "We have the equipment and expertise to relocate warehouses and industrial facilities, ensuring a seamless transition with minimal disruption.",
    tag: "Heavy Equipment"
  },
  {
    icon: <FaChair />,
    title: "Furniture & Equipment Moving",
    description:
      "Our Mesa commercial furniture movers expertly transport desks, workstations, filing cabinets, and office electronics to your new location.",
    tag: "Electronics & Desks"
  },
  {
    icon: <FaBoxOpen />,
    title: "Packing & Unpacking Services for Businesses",
    description:
      "Protect valuable business assets with our professional packing and unpacking services in Mesa, ensuring everything arrives safely.",
    tag: "Asset Protection"
  },
  {
    icon: <FaClock />,
    title: "After-Hours & Weekend Moves",
    description:
      "To minimize business downtime, we offer after-hours and weekend commercial moving services in Mesa, allowing you to relocate at a time that works best for your company.",
    tag: "Zero Downtime"
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
            <FaTruck /> Complete Business Relocation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#011234] leading-tight mb-4">
            Our Mesa Commercial Moving Services Include:
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineered commercial moving solutions designed specifically to protect your company&apos;s assets, maintain productivity, and eliminate business disruption.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[var(--accent-color)] transition-all duration-300 flex flex-col justify-between group ${isLast ? "md:col-span-2 lg:col-span-1 lg:col-start-2 bg-gradient-to-br from-white via-white to-amber-50/30" : ""
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 w-[52px] h-[52px] rounded-xl bg-amber-500/10 text-[var(--accent-color)] flex items-center justify-center text-2xl group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors duration-300">
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
                    <span>Get Moving Estimate</span>
                    <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Section2;
