"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBoxOpen, FaTools, FaTruck, FaPhoneAlt, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const features = [
    {
      icon: <FaBoxOpen className="text-[#f99c00] text-xl" />,
      title: "Packing and Unpacking Services",
      desc: "Protect your belongings with our expert packing services, ensuring safe transport for all your items with heavy-duty boxes and premium wrapping."
    },
    {
      icon: <FaTools className="text-[#f99c00] text-xl" />,
      title: "Furniture Assembly and Disassembly",
      desc: "Our team can help with assembling or disassembling furniture to make your move more efficient, protecting delicate joints and hardware."
    },
    {
      icon: <FaTruck className="text-[#f99c00] text-xl" />,
      title: "Safe and Secure Transport",
      desc: "We use high-quality trucks and moving equipment to ensure your items are transported without any damage across Chandler and beyond."
    }
  ];

  return (
    <section className="w-full bg-white py-16" ref={ref} id="residential-moving">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">
        {/* Left Side: Branded Visual */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-full min-h-[420px] rounded-xl overflow-hidden border border-neutral-200">
            <Image
              src="/images/chandler-movers-team.jpg"
              alt="Making Moves Matter residential moving team carefully handling furniture in Chandler AZ"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-sm rounded-lg border border-neutral-200">
              <span className="flex items-center gap-2 text-xs font-bold text-[#011234]">
                <FaMapMarkerAlt className="text-[#f99c00]" />
                Chandler Residential Moving Experts
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-sm rounded-lg border border-white/10 text-white">
              <p className="text-xs font-semibold text-[#f99c00] uppercase tracking-wide">White-Glove Home Relocation</p>
              <p className="text-sm font-medium mt-0.5">Floor runners, padded blankets, and precision care on every move</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Narrative & Offerings */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Pillar 01 • Residential Relocation
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-4">
            1. Full-Service Residential Moving in Chandler, AZ
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We are Making Moves Matter - Chandler Moving Company, AZ, focusing on residential relocations. Whether you’re moving from a small apartment or a large family home, we provide personalized, stress-free moving solutions tailored to your unique requirements:
          </p>

          <div className="space-y-4 mb-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:border-[#f99c00] transition-colors duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--heading-text-color)] mb-1">
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

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-medium bg-orange-50/60 p-4 rounded-xl border border-orange-200">
            By choosing our Chandler moving services, you gain peace of mind knowing that your belongings are in safe hands from start to finish.
          </p>

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
              Get Free Moving Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
