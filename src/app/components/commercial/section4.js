"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaShieldAlt,
  FaTasks,
  FaBusinessTime,
  FaClipboardList,
  FaDollarSign,
  FaAward
} from "react-icons/fa";

const defaultCards = [
  {
    icon: <FaShieldAlt className="text-2xl text-[var(--accent-color)]" />,
    title: "Licensed & Insured",
    description: "We are a fully licensed and insured commercial moving company in Mesa, AZ, giving you peace of mind."
  },
  {
    icon: <FaTasks className="text-2xl text-[var(--accent-color)]" />,
    title: "Efficient & Organized",
    description: "Our team works quickly and methodically to keep your move on schedule and within budget."
  },
  {
    icon: <FaBusinessTime className="text-2xl text-[var(--accent-color)]" />,
    title: "Minimized Business Downtime",
    description: "We focus on efficiency to ensure a smooth transition, so your business operations are not disrupted."
  },
  {
    icon: <FaClipboardList className="text-2xl text-[var(--accent-color)]" />,
    title: "Custom Moving Plans",
    description: "Every business is unique, and we provide tailored moving solutions to meet your specific needs."
  },
  {
    icon: <FaDollarSign className="text-2xl text-[var(--accent-color)]" />,
    title: "Affordable & Transparent Pricing",
    description: "No hidden fees—just honest, upfront quotes from trusted Mesa commercial movers."
  }
];

const Section4 = ({
  title = "Why Choose Making Moves Matter as Your Mesa Commercial Movers?",
  subtitle = "Experience the peace of mind that comes with hiring vetted, reliable, and punctual Arizona moving professionals."
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <FaAward /> Trusted Business Movers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-[#011234] leading-tight mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-base sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {defaultCards.map((card, index) => {
            const isSpanTwo = index === 3 || index === 4;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`bg-white rounded-2xl p-7 border border-slate-200 hover:border-[var(--accent-color)] transition-all duration-300 flex items-start gap-5 group ${index === 3 ? "lg:col-span-1 lg:col-start-1" : ""
                  }`}
              >
                <div className="w-[52px] h-[52px] rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:text-white transition-colors duration-300">
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
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Section4;