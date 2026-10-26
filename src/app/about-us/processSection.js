"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaClipboardList, 
  FaCalendarCheck, 
  FaBoxesPacking, 
  FaHouseChimney 
} from "react-icons/fa6";

const steps = [
  {
    step: "01",
    icon: <FaClipboardList className="text-2xl text-[var(--accent-color)]" />,
    title: "Accurate, Transparent Quote",
    description:
      "We begin with a detailed inventory review to provide you with an honest, upfront estimate. No hidden fees, ever."
  },
  {
    step: "02",
    icon: <FaCalendarCheck className="text-2xl text-[var(--accent-color)]" />,
    title: "Personalized Move Plan",
    description:
      "Your dedicated move coordinator coordinates timing, parking logistics, packing materials, and special handling instructions."
  },
  {
    step: "03",
    icon: <FaBoxesPacking className="text-2xl text-[var(--accent-color)]" />,
    title: "White-Glove Packing & Loading",
    description:
      "Our uniformed, background-checked crew arrives on time with padded blankets, floor runners, and high-strength wrap."
  },
  {
    step: "04",
    icon: <FaHouseChimney className="text-2xl text-[var(--accent-color)]" />,
    title: "Direct Delivery & Room Setup",
    description:
      "We deliver straight to your new destination on dedicated trucks, placing furniture and boxes right where you want them."
  }
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100/70 text-[var(--accent-color)] border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Our Proven Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#011234] leading-tight mb-4">
            How We Make Every Move Stress-Free
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From your initial call to the final box unpacked, here is how our professional moving team delivers a seamless relocation experience.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-[var(--accent-color)] transition-colors group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl font-semibold text-[var(--accent-color)]">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                  {item.icon}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#011234] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
