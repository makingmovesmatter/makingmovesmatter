"use client";

import React from "react";
import Quote from "./quote";
import { motion } from "framer-motion";
import { PiPhoneCallLight, PiQuotes } from "react-icons/pi";
import {
  FaStar,
  FaShieldAlt,
  FaTruckMoving,
  FaClock,
  FaBoxes,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";
import { openQuoteModal } from "./QuoteButton";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Header = ({ headerImg, headerText1, headerText2, headerDesc }) => {
  return (
    <>
      <header
        className="w-full bg-cover bg-center bg-no-repeat min-h-[82vh] relative flex justify-center items-center overflow-hidden py-10"
        style={{ backgroundImage: `url(${headerImg})` }}
      >

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,156,0,0.18),transparent_50%)] z-0" />

        <div className="container z-10 w-full h-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full my-6 sm:my-10">
            <motion.div
              className="text-white flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Left Column: Rich Content, Details, Trust & Action CTAs */}
              <motion.div className="w-full lg:w-1/2" variants={fadeInUp}>
                {/* Primary SEO Heading (Single H1) */}
                <h1 className="text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                  <span className="block text-[var(--accent-color)]">{headerText1} <span className="block text-white mt-1">{headerText2}</span></span>

                </h1>

                {/* Subtitle / Description */}
                <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed font-normal max-w-2xl">
                  {headerDesc}
                </p>

                {/* Value Proposition Grid (4 Key Details) */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                    <FaShieldAlt className="text-[var(--accent-color)] text-base shrink-0" />
                    <span><strong>Guaranteed Flat Rates:</strong> Fixed prices, zero hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                    <FaClock className="text-[var(--accent-color)] text-base shrink-0" />
                    <span><strong>Same-Day & Flexible:</strong> Fast local & interstate booking</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                    <FaTruckMoving className="text-[var(--accent-color)] text-base shrink-0" />
                    <span><strong>Commercial Fleet:</strong> 26ft air-ride trucks & 60+ pads</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                    <FaBoxes className="text-[var(--accent-color)] text-base shrink-0" />
                    <span><strong>Full-Service Care:</strong> Packing, assembly & storage</span>
                  </div>
                </div>

                {/* High-Converting Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="flex items-center justify-center gap-3 bg-[var(--accent-color)] hover:opacity-90 text--bold-semibold text-base sm:text-lg py-4 px-7 rounded-xl transition-all cursor-pointer"
                  >
                    <PiQuotes className="text-2xl" />
                    <span>Get A Free Quote</span>
                    <FaArrowRight className="text-xs ml-1" />
                  </button>

                  <a
                    href="tel:4809348218"
                    className="flex items-center justify-center gap-3 bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold text-base sm:text-lg py-4 px-7 rounded-xl transition-all"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                    </span>
                    <PiPhoneCallLight className="text-2xl text-white" />
                    <span>(480) 934-8218</span>
                  </a>
                </div>

                {/* Social Proof & Local Trust Bar */}
                <div className="mt-7 pt-5 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-[#FBBC05]">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="font-semibold text-white">4.9 / 5.0</span>
                    <span className="text-slate-400">(204+ Google Reviews)</span>
                  </div>
                  <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-500" />
                  <div className="flex items-center gap-1.5">
                    <span className="text-[var(--accent-color)] font-semibold">✓ 3,500+</span>
                    <span>Moves Completed</span>
                  </div>
                  <div className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-500" />
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400 font-semibold">100%</span>
                    <span>Licensed & Insured</span>
                  </div>
                </div>

                {/* Mobile & Tablet Interactive Teaser Card */}
                <div className="lg:hidden mt-8 w-full p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-color)]">
                      ⚡ Instant Estimate in 60 Seconds
                    </span>
                    <span className="text-[11px] text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                      0 Obligation
                    </span>
                  </div>
                  <p className="text-sm text-white font-medium mb-4">
                    Ready for a flat-rate guaranteed moving quote tailored to your exact inventory and dates?
                  </p>
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="w-full py-3.5 px-4 rounded-xl bg-[var(--accent-color)] hover:opacity-95 text-white font-boldtext-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Launch Interactive Quote Calculator</span>
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </motion.div>

              {/* Right Column: Multi-Step Interactive Quote Form (Inline for Desktop) */}
              <motion.div variants={fadeInUp} className="hidden lg:block w-full lg:w-1/2">
                <Quote />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Trust Feature Strip with Clean Micro-Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#f99c00] text-white py-4.5 border-t border-orange-400/40"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "LICENSED & INSURED", desc: "Full Cargo Protection" },
              { title: "TRAINED CREWS", desc: "Background-Checked Pros" },
              { title: "COMMERCIAL EQUIPMENT", desc: "26ft Air-Ride Trucks" },
              { title: "GUARANTEED PRICING", desc: "Zero Hidden Surcharges" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center sm:justify-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                  <FaCheckCircle className="text-sm" />
                </div>
                <div>
                  <span className="block font-bold text-xs sm:text-sm tracking-wide text-white leading-tight">
                    {item.title}
                  </span>
                  <span className="block text-[11px] text-white/90 leading-tight">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative Brand Accent Cut */}
      <div
        className="w-full h-4 bg-[#f99c00] opacity-35"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 100%)" }}
      />
    </>
  );
};

export default Header;
