"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaTruckFast, 
  FaBoxesPacking, 
  FaRoute, 
  FaFileInvoiceDollar, 
  FaUsersGear, 
  FaShieldHalved,
  FaAward
} from "react-icons/fa6";

const cards = [
  {
    icon: <FaTruckFast className="text-2xl text-[var(--accent-color)]" />,
    title: "Fast & Reliable Dispatch",
    description: "On-time arrival, efficient loading, and direct transportation with real-time coordinator communication."
  },
  {
    icon: <FaBoxesPacking className="text-2xl text-[var(--accent-color)]" />,
    title: "Safe & Professional Packing",
    description: "Top-tier packing supplies, custom crating, and thick furniture blankets protect every item."
  },
  {
    icon: <FaRoute className="text-2xl text-[var(--accent-color)]" />,
    title: "Local & Long Distance",
    description: "Whether moving across town in Mesa or cross-country nationwide, our fleet is equipped for the journey."
  },
  {
    icon: <FaFileInvoiceDollar className="text-2xl text-[var(--accent-color)]" />,
    title: "Transparent, Upfront Quotes",
    description: "Clear, all-inclusive pricing with zero hidden fees, travel surcharges, or moving-day surprises."
  },
  {
    icon: <FaUsersGear className="text-2xl text-[var(--accent-color)]" />,
    title: "Experienced Full-Time Crew",
    description: "Background-checked, respectful, and trained moving professionals dedicated to top-tier care."
  },
  {
    icon: <FaShieldHalved className="text-2xl text-[var(--accent-color)]" />,
    title: "100% Licensed & Insured",
    description: "Fully compliant with state and federal regulations, providing total peace of mind for your assets."
  }
];

const Section7 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <FaAward /> The Arizona Moving Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#011234] leading-tight mb-4">
            Why Choose Making Moves Matter
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            With 15+ years of proven moving excellence across Mesa and the Valley, we combine speed, precision, and genuine customer care for every relocation.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200 hover:border-[var(--accent-color)] hover:bg-white transition-all duration-300 flex items-start gap-5 group"
            >
              <div className="w-[52px] h-[52px] rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#011234] mb-2 group-hover:text-[var(--accent-color)] transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section7;
