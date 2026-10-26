"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaStar, FaAward, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { openQuoteModal } from "../QuoteButton";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Successful Moves" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Licensed & Insured" }
];

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-200/80" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Branded Image Showcase */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[440px] sm:h-[500px] rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src="/images/mesa-movers-team.jpg"
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

              {/* Bottom Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#011234]/90 backdrop-blur-md rounded-xl p-4 border border-white/10 text-white">
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

          {/* Right: Rich SEO Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
              <FaAward /> About Making Moves Matter
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-[#011234] leading-tight mb-5">
              Mesa&apos;s Trusted Moving Experts Delivering Stress-Free Transitions
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
              At <strong>Making Moves Matter</strong>, we believe every relocation is more than just transporting boxes—it is a major milestone for your family or business. Based right here in Mesa, AZ, we provide comprehensive residential, commercial, local, and cross-country moving solutions engineered to protect your belongings and your peace of mind.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Our full-time, vetted moving crews know Mesa and the Greater Phoenix area inside and out. From careful packing of fragile heirlooms and disassembly of executive furniture to safe transport and room-of-choice placement, we handle every detail with precision. No hidden fees. No day-of-move surprises. Just honest, five-star moving services.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                <span>Upfront, Guaranteed Written Quotes</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                <span>Padded Blankets &amp; Floor Protection</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                <span>Full Valuation Insurance Coverage</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] shrink-0" />
                <span>Flexible Evening &amp; Weekend Schedules</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={openQuoteModal}
                type="button"
                className="bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 cursor-pointer"
              >
                Get Free Moving Quote
              </button>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#011234] hover:text-[var(--accent-color)] border border-slate-300 px-6 py-3.5 rounded-xl transition-colors"
              >
                <span>Learn More About Us</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section1;
