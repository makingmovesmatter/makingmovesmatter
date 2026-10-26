"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhoneAlt, FaCheckCircle, FaCalendarCheck } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const Section13 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full text-white py-16" ref={ref} id="tempe-cta">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-900 to-[#011234] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="lg:w-2/3">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-[#f99c00] border border-orange-500/30 text-xs font-bold uppercase tracking-wider mb-4">
              Book Your Free Tempe Moving Quote
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Get a Free Quote from the Top Movers in Tempe
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              When it comes to moving companies in Tempe, Making Moves Matter stands out for our commitment to excellence, competitive pricing, and personalized service. We understand the unique challenges of moving in Tempe and are here to make your relocation experience stress-free.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium text-orange-200">
              If you’re planning a move, contact Making Moves Matter today. Our experienced local movers in Tempe and long-distance movers are ready to help you with a seamless and stress-free relocation. Call us now or request a free quote online — because every move matters, and we’re here to make yours a success. Let the top-rated Tempe moving company handle the heavy lifting while you settle into your new home with ease.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f99c00] flex-shrink-0" />
                Licensed & Fully Insured
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f99c00] flex-shrink-0" />
                Guaranteed Flat-Rate Quotes
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f99c00] flex-shrink-0" />
                Zero Hidden Charges
              </span>
            </div>
          </div>

          <div className="lg:w-1/3 w-full flex flex-col sm:flex-row lg:flex-col gap-4">
            <a
              href="tel:4809348218"
              className="w-full text-center py-4 px-6 rounded-lg bg-[#f99c00] hover:bg-[#e08b00] text-white font-bold text-base transition-colors duration-200 inline-flex items-center justify-center gap-2.5"
            >
              <FaPhoneAlt className="text-sm" />
              Call (480) 934-8218
            </a>

            <button
              type="button"
              onClick={openQuoteModal}
              className="w-full text-center py-4 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-colors duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaCalendarCheck className="text-sm text-[#f99c00]" />
              Request Free Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section13;
