"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWeightHanging, FaShieldAlt, FaCheckCircle, FaAward } from "react-icons/fa";

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
              <FaWeightHanging className="text-sm" />
              <span>Heavy Rigging &amp; Specialty Transport</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#011234] leading-tight mb-5">
              Specialized Large &amp; Heavy Item Moving in Mesa, AZ – Making Moves Matter
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Moving oversized, heavy, or delicate specialty items requires specialized equipment, technical rigging expertise, and experienced muscle. At Making Moves Matter, we specialize in moving heavy items that standard moving companies refuse to touch. Whether you need to transport a grand piano, multi-thousand-pound gun safe, commercial refrigerator, or heavy gym equipment, our Mesa heavy item movers guarantee damage-free relocation with zero risk to your property.
            </p>

            {/* Sub-block: Technical Precision */}
            <div className="bg-slate-50 border-l-4 border-[var(--accent-color)] rounded-r-2xl p-5 sm:p-6 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#011234] mb-3">
                Precision Rigging &amp; Floor Protection
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                We protect your floors, banisters, and doorframes using specialized neoprene runners, threshold ramps, and heavy-duty four-wheel dollies. Every move is engineered in advance to navigate tight angles, exterior stairs, and narrow hallways safely.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>Upright &amp; Baby Grand Pianos</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>Heavy Gun Safes &amp; Fire Vaults</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>Commercial Appliances &amp; Machinery</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>Industrial Hydraulic Liftgates</span>
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
                src="/images/scottsdale-specialty-piano.jpg"
                alt="Specialized Large and Heavy Item Moving in Mesa AZ - Making Moves Matter"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl px-4 py-2 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-800">
                <FaShieldAlt className="text-[var(--accent-color)]" />
                <span>Certified Rigging Crew</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#011234]/90 backdrop-blur-md rounded-xl p-4 border border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--accent-color)] font-bold">Heavy Item Specialists</p>
                    <p className="text-sm font-semibold text-white">Pianos, Safes, Spas &amp; Machinery</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-lg text-amber-300 font-semibold">
                    <FaAward />
                    <span>Heavy Care</span>
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
