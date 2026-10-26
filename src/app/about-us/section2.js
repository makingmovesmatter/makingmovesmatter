"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaShieldHalved, 
  FaReceipt, 
  FaUsers, 
  FaCouch, 
  FaTruckFast, 
  FaHeadset 
} from "react-icons/fa6";

const pillars = [
  {
    icon: <FaShieldHalved className="text-2xl text-[var(--accent-color)]" />,
    title: "100% Licensed & Fully Insured",
    description:
      "Fully certified for local and interstate relocation with full-value cargo and liability protection for complete peace of mind."
  },
  {
    icon: <FaReceipt className="text-2xl text-[var(--accent-color)]" />,
    title: "Guaranteed Transparent Pricing",
    description:
      "Clear, upfront quotes with zero surprise fees. We never charge hidden fees for stairs, heavy items, or fuel surcharges."
  },
  {
    icon: <FaUsers className="text-2xl text-[var(--accent-color)]" />,
    title: "Vetted, Full-Time Specialists",
    description:
      "Our movers are background-checked, drug-tested, and trained in-house. We never rely on inexperienced day laborers."
  },
  {
    icon: <FaCouch className="text-2xl text-[var(--accent-color)]" />,
    title: "White-Glove Property Care",
    description:
      "We safeguard your home with floor runners, door jamb protectors, shrink-wrap, and thick quilted moving pads on every item."
  },
  {
    icon: <FaTruckFast className="text-2xl text-[var(--accent-color)]" />,
    title: "Dedicated Direct Transportation",
    description:
      "Your belongings are loaded onto a dedicated truck and moved straight to your destination—never co-mingled or transferred."
  },
  {
    icon: <FaHeadset className="text-2xl text-[var(--accent-color)]" />,
    title: "7-Day Personal Move Coordinators",
    description:
      "A dedicated move manager keeps you informed every step of the way, from first packing box to final room setup."
  }
];

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50 border-t border-b border-slate-200" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100/70 text-[var(--accent-color)] border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#011234] leading-tight mb-4">
            The Standards That Set Us Apart
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every move we take on is backed by our strict commitment to safety, transparency, punctuality, and personalized care.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-slate-200 flex flex-col justify-between hover:border-[var(--accent-color)] transition-colors group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-5 group-hover:bg-[var(--accent-color)]/10 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#011234] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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

export default Section2;
