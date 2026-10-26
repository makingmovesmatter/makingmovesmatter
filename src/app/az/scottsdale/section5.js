"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaMusic, FaGem, FaWarehouse, FaBoxOpen, FaShieldAlt, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const Section5 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const specialtyCategories = [
    {
      title: "Grand Pianos & Musical Instruments",
      desc: "Upright, baby grand, and concert pianos transported with heavy-duty piano boards, padded shoes, and precision maneuvering."
    },
    {
      title: "Antiques, Sculptures & Fine Art",
      desc: "Custom wood crating, museum-grade glass protection, and telescopic art boxes for high-value heirlooms and galleries."
    },
    {
      title: "Heavy Gun Safes & High-End Fitness",
      desc: "Equipped with motorized stair-climbing dollies and heavy-duty ramps to safely move 500-1,200 lb safes without floor damage."
    }
  ];

  const storageFeatures = [
    "Climate-controlled units guarded against extreme desert summer heat",
    "24/7 high-definition video surveillance and computerized gated entry",
    "Flexible month-to-month leases for short-term and long-term storage",
    "Clean, dust-sealed warehousing with direct crew delivery to your door"
  ];

  return (
    <section className="w-full bg-white py-16" ref={ref} id="specialty-storage">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            White-Glove Specialty & Storage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Specialty Item Moving, Packing & Secure Storage Options
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Tailored preservation for your most valuable treasures and flexible, climate-controlled warehousing in Scottsdale.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 mb-12">

          {/* Left Column: Specialty Moving Visual */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-full h-[420px] sm:h-[480px] lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-neutral-200">
              <Image
                src="/images/scottsdale-specialty-piano.jpg"
                alt="Making Moves Matter specialty movers carefully transporting a grand piano in an elegant Scottsdale home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-sm rounded-lg border border-white/10 text-white">
                <p className="text-xs font-semibold text-[#f99c00] uppercase tracking-wide">Piano & Specialty Moving</p>
                <p className="text-sm font-medium mt-0.5">Heavy-duty rigging, floor runners, and white-glove equipment</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Specialty Details & Categories */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-[var(--heading-text-color)] mb-3 flex items-center gap-2.5">
              Specialty Item Moving for Fragile & Valuable Items
            </h3>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
              Not all belongings can be packed in a standard box. In Scottsdale’s distinguished homes, we routinely transport irreplaceable heirlooms, delicate antiques, and heavy architectural pieces:
            </p>

            <div className="space-y-3.5 mb-6">
              {specialtyCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-[#f99c00] transition-colors"
                >
                  <h4 className="font-bold text-sm text-[var(--heading-text-color)] mb-1">
                    {cat.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-orange-50/70 border border-orange-200 mb-6">
              <h4 className="font-bold text-sm text-[#011234] mb-2 flex items-center gap-2">
                <FaWarehouse className="text-[#f99c00]" />
                Secure Climate-Controlled Storage Solutions
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {storageFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <FaCheckCircle className="text-[#f99c00] text-[11px] mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:4809348218"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#011234] hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
              >
                <FaPhoneAlt className="text-[10px] text-[#f99c00]" />
                Call (480) 934-8218
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#f99c00] hover:bg-[#e08b00] text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Quote Specialty Item or Storage
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Section5;
