"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBuilding, FaShieldAlt, FaClock, FaCheckCircle } from "react-icons/fa";

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
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <FaBuilding className="text-sm" />
              <span>Mesa Commercial Moving Specialists</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#011234] leading-tight mb-5">
              Top Commercial Movers in Mesa, AZ – Making Moves Matter
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Relocating your business? Making Moves Matter is the leading commercial moving company in Mesa, AZ, providing efficient, organized, and stress-free office and business relocations. Our expert Mesa commercial movers understand the importance of minimizing downtime, ensuring your business is up and running as quickly as possible. Whether you’re moving a small office, retail store, or large corporate headquarters, we’ve got the expertise to handle every aspect of your move.
            </p>

            {/* Sub-block: Reliable & Professional Commercial Moving */}
            <div className="bg-slate-50 border-l-4 border-[var(--accent-color)] rounded-r-2xl p-5 sm:p-6 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#011234] mb-3">
                Reliable & Professional Commercial Moving Services in Mesa
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Moving a business requires careful planning and precision. As one of the best commercial moving companies in Mesa, we specialize in office relocations, warehouse moves, and corporate transitions, ensuring your assets, equipment, and furniture are moved safely and efficiently.
              </p>
            </div>

            {/* Key Business Relocation Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>Minimized Business Downtime</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>Licensed & Insured Moving Crews</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>Cubicle, IT & Furniture Teardown</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FaCheckCircle className="text-[var(--accent-color)] text-base shrink-0" />
                <span>After-Hours & Weekend Schedules</span>
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
                src="/images/mesa-commercial-moving.jpg"
                alt="Top Commercial Movers in Mesa AZ - Making Moves Matter Office Relocation Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-xl px-4 py-2 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-800">
                <FaShieldAlt className="text-[var(--accent-color)]" />
                <span>Licensed & Insured</span>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#011234]/90 backdrop-blur-md rounded-xl p-4 border border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--accent-color)] font-bold">Commercial Moving Experts</p>
                    <p className="text-sm font-semibold text-white">Mesa, Chandler, Tempe & East Valley</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-lg">
                    <FaClock className="text-amber-400" />
                    <span>24/7 After-Hours</span>
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
