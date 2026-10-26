"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWrench, FaShieldAlt, FaCheckCircle, FaTools } from "react-icons/fa";

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full bg-white py-14 lg:py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column: Content */}
          <motion.div
            className="w-full lg:w-7/12 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <FaWrench className="text-sm" />
              <span>Expert Disassembly &amp; Setup</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#011234] leading-tight mb-5">
              Reliable Furniture Assembly Services in Mesa, AZ
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Making Moves Matter provides reliable furniture assembly services in Mesa, AZ, to homeowners who want to save time and enjoy an efficient, hassle-free moving experience. Disassembly and reassembly can seem simple at first glance, but stripped screws, missing hardware, or complex modular frames can quickly lead to frustration. Our professional movers carefully disassemble your furniture, bag and label all hardware, and reassemble each piece in your new home with precision.
            </p>

            {/* Sub-block: Accurate Quotes */}
            <div className="bg-slate-50 border-l-4 border-[var(--accent-color)] rounded-r-2xl p-5 sm:p-6 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#011234] mb-3">
                Precision Assembly &amp; Accurate Quotes
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                When moving into your new home, furniture doesn’t always fit through doorways, narrow stairwells, or tight corners as a single piece. Disassembly is not only the safest way to move large furniture—in many cases, it is essential. We provide upfront, transparent estimates tailored to the type and number of items requiring assembly.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>Bed Frames, Bunks &amp; Modular Desks</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>Bagged, Labeled &amp; Secured Hardware</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>Professional Power &amp; Hand Tools</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>IKEA, Wayfair &amp; Custom Brand Experts</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Branded Visual */}
          <motion.div
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg">
              <Image
                src="/images/furniture-assembly-brand.jpg"
                alt="Reliable Furniture Assembly Services in Mesa AZ - Making Moves Matter"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl px-4 py-2 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-800">
                <FaShieldAlt className="text-[var(--accent-color)]" />
                <span>Trained Technicians</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#011234]/90 backdrop-blur-md rounded-xl p-4 border border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--accent-color)] font-bold">Furniture Assembly Specialists</p>
                    <p className="text-sm font-semibold text-white">Beds, Desks, Wall Units &amp; More</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-lg text-amber-300 font-semibold">
                    <FaTools />
                    <span>Tool Equipped</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section1;
