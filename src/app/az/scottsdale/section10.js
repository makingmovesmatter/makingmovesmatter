"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCalendarAlt, FaShieldAlt, FaWineBottle, FaLightbulb, FaPhoneAlt } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const tips = [
  {
    icon: <FaCalendarAlt className="text-[#f99c00] text-xl" />,
    title: "Schedule Early Morning Loadings to Beat Desert Heat",
    content: "Scottsdale's summer temperatures can rise quickly. Scheduling your move for first thing in the morning ensures loading is completed during the coolest hours, safeguarding both your family and delicate belongings."
  },
  {
    icon: <FaShieldAlt className="text-[#4096b1] text-xl" />,
    title: "Coordinate HOA & Gated Community Clearances in Advance",
    content: "Prestigious Scottsdale communities like Silverleaf, DC Ranch, and Troon have strict moving truck gate policies, designated parking zones, and defined moving hours. Verify access requirements ahead of moving day."
  },
  {
    icon: <FaWineBottle className="text-red-500 text-xl" />,
    title: "Safeguard Fine Wine Collections & Artwork",
    content: "Extreme desert heat can ruin high-end wine collections and delicate canvas artwork. We recommend transporting wine in temperature-managed conditions and utilizing our custom wooden crating for museum-grade paintings."
  }
];

const Section10 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="scottsdale-moving-tips">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">

        {/* Left Column: Tips List */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Local Pro Knowledge
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-4">
            Essential Moving Tips for Scottsdale Residents – Local Insights for a Smooth Move
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Moving to or from Scottsdale, AZ can be a smooth process with proper planning. Here are expert recommendations to ensure your relocation is seamless:
          </p>

          <div className="space-y-4">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-neutral-200 hover:border-[#f99c00] transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center">
                    {tip.icon}
                  </div>
                  <h3 className="font-bold text-base text-[var(--heading-text-color)]">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-12">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Interactive Consultation Card */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="p-8 rounded-2xl bg-[#011234] text-white border border-slate-800 flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f99c00] flex items-center justify-center text-[#011234] text-2xl mb-6 shadow-lg shadow-orange-500/20">
                <FaLightbulb />
              </div>

              <span className="text-xs font-bold text-[#f99c00] uppercase tracking-wider block mb-2">
                White-Glove Relocation Checklist
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Need Help Planning Your Scottsdale Move?
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Our moving specialists will walk you through a custom timeline, packing material estimates, and gate clearance for your specific Scottsdale community. Contact us today for personalized moving support.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-[#f99c00]" />
                  <span>Complimentary in-home or virtual video moving assessments</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-[#f99c00]" />
                  <span>Custom crating for fine artwork, chandeliers & grand pianos</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-[#f99c00]" />
                  <span>Guaranteed flat-rate pricing with zero hidden surcharges</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:4809348218"
                className="w-full text-center py-3.5 px-6 rounded-lg bg-[#f99c00] hover:bg-[#e08b00] text-white font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
              >
                <FaPhoneAlt className="text-xs" />
                Call (480) 934-8218
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="w-full text-center py-3.5 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors cursor-pointer"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section10;
