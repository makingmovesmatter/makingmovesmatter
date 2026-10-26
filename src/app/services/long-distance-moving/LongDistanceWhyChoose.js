"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaShieldAlt,
  FaDollarSign,
  FaUsers,
  FaClock,
  FaBoxes,
  FaStar,
  FaAward
} from "react-icons/fa";

const pillars = [
  {
    icon: <FaShieldAlt className="text-2xl text-[var(--accent-color)]" />,
    title: "Licensed & Insured",
    description: "Our fully licensed and insured long-distance movers in Mesa provide peace of mind for every move."
  },
  {
    icon: <FaDollarSign className="text-2xl text-[var(--accent-color)]" />,
    title: "Affordable & Transparent Pricing",
    description: "No hidden fees—just honest, competitive rates."
  },
  {
    icon: <FaUsers className="text-2xl text-[var(--accent-color)]" />,
    title: "Experienced Moving Team",
    description: "Our Mesa movers are trained professionals who handle your belongings with care."
  },
  {
    icon: <FaClock className="text-2xl text-[var(--accent-color)]" />,
    title: "Fast & Efficient Delivery",
    description: "We work on your schedule to ensure timely transportation and delivery."
  },
  {
    icon: <FaBoxes className="text-2xl text-[var(--accent-color)]" />,
    title: "Comprehensive Moving Solutions",
    description: "From packing to storage, we offer all the services you need for a seamless move."
  },
  {
    icon: <FaStar className="text-2xl text-[var(--accent-color)]" />,
    title: "Top Rated Long Distance Movers",
    description: "From packing and loading to unloading and furniture setup, we take care of every step so you don’t have to lift a finger."
  }
];

const LongDistanceWhyChoose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <FaAward /> The Mesa Moving Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#011234] leading-tight mb-4">
            Why Choose Making Moves Matter for Your Long-Distance Move?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Dedicated cross-country specialists committed to delivering your household safely, on budget, and on schedule.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:border-[var(--accent-color)] hover:shadow-md transition-all duration-300 flex items-start gap-5 group"
            >
              <div className="w-[52px] h-[52px] rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors duration-300">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#011234] mb-2 group-hover:text-[var(--accent-color)] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LongDistanceWhyChoose;
