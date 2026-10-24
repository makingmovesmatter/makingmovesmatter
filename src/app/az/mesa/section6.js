"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaAward, FaCalendarCheck, FaShieldAlt, FaStar, FaPhoneAlt, FaCheck } from "react-icons/fa";
import { openQuoteModal } from "@/app/components/QuoteButton";

const stats = [
  { value: "15+", label: "Years Experience", desc: "Local expertise across Mesa and the East Valley" },
  { value: "10,000+", label: "Moves Completed", desc: "Proven track record of safe, prompt deliveries" },
  { value: "100%", label: "Licensed & Insured", desc: "Full cargo & liability protection for your peace of mind" },
  { value: "4.9★", label: "Top Customer Rating", desc: "Consistently praised on Google & local directories" },
];

const Section6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-900 text-white py-16 border-y border-neutral-800" ref={ref} id="comprehensive-moving">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            15 Years of Moving Excellence
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Get Comprehensive Moving Service in Mesa <br/> AZ Local, Long-Distance, Residential & More
          </h2>

          <p className="text-neutral-400 text-base mt-4 max-w-none">
            Tailored logistics, white-glove handling, and honest upfront rates from Mesa’s premier moving team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 space-y-4 text-neutral-300 text-base leading-relaxed"
          >
            <p>
              <strong className="text-white font-semibold">Making Moves Matter</strong>, we are proud to be one of the most trusted moving companies in Mesa, AZ. With 15 years of moving experience, our committed team of experts has developed an extensive knowledge of the local area, so guaranteeing that your move is as seamless and quick as it could be.
            </p>
            <p>
              We specialize in providing a range of moving services in Mesa, catering to both local and long-distance moves. Whether you’re moving within Mesa or planning a relocation across the state or nation, we have the expertise to handle your move with the utmost care and efficiency. From residential moves to commercial relocations, we understand that every move is unique, and we closely assist you to develop a customized moving strategy.
            </p>
            <p>
              As your local experts, we go above and beyond by offering full-service moving options, which include expert packing, secure storage, and comprehensive transportation solutions. Our team is ready for every requirement, so you may concentrate on adjusting to your new place free from logistical worry.
            </p>
            <p>
              Being local movers in Mesa, Arizona, we are dedicated to provide the best degree of professionalism and dependability so that your move is finished on schedule and with least disturbance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 hover:border-[#f99c00] transition-colors duration-300"
              >
                <div className="text-3xl sm:text-4xl font-black text-[#f99c00] mb-1">
                  {stat.value}
                </div>
                <div className="text-white font-bold text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-neutral-400 text-xs leading-normal">
                  {stat.desc}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 rounded-xl bg-neutral-800/50 border border-neutral-700 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#f99c00]/20 border border-[#f99c00]/40 flex items-center justify-center text-[#f99c00] flex-shrink-0">
              <FaAward className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Experience the Making Moves Matter Difference</h3>
              <p className="text-sm text-neutral-400">Reliable scheduling, respectful movers, and complete upfront clarity.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <a
              href="tel:4809348218"
              className="w-full md:w-auto text-center px-6 py-3 rounded-md bg-[#f99c00] hover:bg-[#e08b00] text-white font-semibold text-sm transition-colors duration-200"
            >
              Call (480) 934-8218
            </a>
            <button
              type="button"
              onClick={openQuoteModal}
              className="w-full md:w-auto text-center px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-colors duration-200 cursor-pointer"
            >
              Instant Estimate
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section6;
