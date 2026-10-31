"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { 
  FaStar, 
  FaShieldAlt, 
  FaAward, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaArrowRight 
} from "react-icons/fa";
import { openQuoteModal } from "@/app/components/QuoteButton";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "10,000+", label: "Successful Moves" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Licensed & Insured" }
];

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full bg-white py-16 lg:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Visual Brand Story & Stats */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src="/images/about1.png"
                alt="Making Moves Matter Professional Moving Team in Mesa Arizona"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-2 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <FaStar className="text-amber-500" />
                <span>Top-Rated Mesa Moving Company</span>
              </div>

              {/* Bottom Stats Banner Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#011234]/95 backdrop-blur-md rounded-xl p-4 border border-white/10 text-white">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xl sm:text-2xl font-bold text-[var(--accent-color)]">{stat.value}</p>
                      <p className="text-[11px] text-slate-300 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Values */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
              <FaAward /> The Making Moves Matter Story
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#011234] leading-tight mb-5">
              Moving Arizona Families and Businesses with Care &amp; Integrity
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
              At <strong>Making Moves Matter</strong>, we believe that moving should be an exciting new milestone, not a stressful ordeal. Founded in Mesa, AZ, our company was built on a simple promise: treat every client like family, communicate transparently, and protect every item as if it were our own.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Over the past 15+ years, we have grown from a single dedicated truck into one of Arizona’s most trusted full-service relocation companies. Whether you are moving out of an East Valley apartment, transitioning into a custom home, or relocating an entire commercial headquarters, our vetted, respectful crews provide unmatched speed and precision.
            </p>

            {/* Core Commitments Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                <span>Upfront, Guaranteed Written Quotes</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                <span>Heavy-Duty Blankets &amp; Floor Protection</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                <span>Full Valuation Insurance Coverage</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                <span>Punctual, Uniformed Moving Crews</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={openQuoteModal}
                type="button"
                className="bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all cursor-pointer"
              >
                Get Free Moving Quote
              </button>
              <a
                href="tel:4809348218"
                className="inline-flex items-center gap-2 bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                <FaPhoneAlt className="text-xs" />
                <span>(480) 934-8218</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section1;
