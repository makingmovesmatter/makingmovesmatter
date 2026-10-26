"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHome, FaCheckCircle, FaPhoneAlt, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const benefits = [
    {
      title: "Local & Cross-Valley Relocations",
      desc: "Fast, seamless moves throughout Scottsdale, Paradise Valley, Fountain Hills, Phoenix, and across the entire East Valley."
    },
    {
      title: "Luxury Estates & Gated Communities",
      desc: "Experienced handling in exclusive communities like Silverleaf, DC Ranch, and Gainey Ranch with complete HOA compliance and gate coordination."
    },
    {
      title: "Full Furniture Protection & Assembly",
      desc: "Padded moving blankets, protective corner guards, and expert disassembly and reassembly of complex designer furnishings."
    }
  ];

  return (
    <section className="w-full bg-white py-16" ref={ref} id="residential-moving">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">

        {/* Left Column: Branded Visual */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-full min-h-[420px] rounded-xl overflow-hidden border border-neutral-200">
            <Image
              src="/images/scottsdale-luxury-moving.jpg"
              alt="Making Moves Matter residential moving team carefully placing wrapped designer furniture in a Scottsdale Arizona luxury estate"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-sm rounded-lg border border-neutral-200">
              <span className="flex items-center gap-2 text-xs font-bold text-[#011234]">
                <FaMapMarkerAlt className="text-[#f99c00]" />
                Scottsdale Residential Moving Specialists
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-sm rounded-lg border border-white/10 text-white">
              <p className="text-xs font-semibold text-[#f99c00] uppercase tracking-wide">White-Glove Home Care</p>
              <p className="text-sm font-medium mt-0.5">Floor runners, custom pads, and zero damage to luxury finishes</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Core Service • Residential Relocation
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-4">
            Residential Moving: Local & Long-Distance for Houses, Apartments & Condos
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Relocating your home is a major life milestone. At Making Moves Matter, we specialize in delivering personalized, worry-free residential moves tailored to the discerning standards of Scottsdale homeowners and apartment residents.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Whether you are transitioning from a chic urban loft in Old Town, an apartment near Scottsdale Fashion Square, or a sprawling hillside estate in Troon North, our background-checked crew delivers unmatched attentiveness and care.
          </p>

          <div className="space-y-3.5 mb-6">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:border-[#f99c00] transition-colors"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#f99c00] text-base flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-[var(--heading-text-color)] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:4809348218"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#f99c00] hover:bg-[#e08b00] text-white font-semibold text-sm transition-colors duration-200"
            >
              <FaPhoneAlt className="text-xs" />
              Call (480) 934-8218
            </a>
            <button
              type="button"
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-[#f99c00] text-[#f99c00] hover:bg-orange-50 font-semibold text-sm transition-colors duration-200 cursor-pointer"
            >
              Get Free Residential Quote
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section3;
