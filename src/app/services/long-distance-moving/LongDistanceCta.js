"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FaPhoneAlt, FaCalendarCheck, FaShieldAlt, FaComments } from "react-icons/fa";
import { openQuoteModal } from "@/app/components/QuoteButton";

const LongDistanceCta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-16 lg:py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#011234] via-[#021845] to-[#011234] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-color)]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[var(--accent-color)] mb-5">
              <FaShieldAlt /> Stress-Free Interstate Relocation
            </div>

            {/* Main CTA Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Get a Free Quote from Mesa’s Best Long-Distance Movers!
            </h2>

            {/* Paragraph with Contact Us link */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Trust Making Moves Matter to handle your move with professionalism and care.{" "}
              <Link
                href="/contact-us"
                className="text-[var(--accent-color)] underline underline-offset-4 font-bold hover:text-amber-300 transition-colors"
              >
                Contact us
              </Link>{" "}
              today for a free long-distance moving estimate, and let us take the stress out of your relocation!
            </p>

            {/* Actions Grid */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8">
              <button
                onClick={openQuoteModal}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[var(--accent-color)] hover:bg-amber-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <FaCalendarCheck className="text-lg" />
                <span>Request Long-Distance Quote</span>
              </button>

              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <FaComments className="text-lg text-[var(--accent-color)]" />
                <span>Contact Our Coordinators</span>
              </Link>

              <a
                href="tel:4809348218"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white border-2 border-[var(--accent-color)] font-bold text-base px-8 py-4 rounded-xl transition-all duration-300"
              >
                <FaPhoneAlt className="text-base text-[var(--accent-color)]" />
                <span>(480) 934-8218</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Guaranteed Written Pricing
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Dedicated Cross-Country Logistics Team
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Full Valuation Protection Available
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LongDistanceCta;
