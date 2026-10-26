"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaClock, FaDollarSign, FaGlobeAmericas, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const specialties = [
  {
    icon: <FaShieldAlt className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Licensed & Insured Movers",
    desc: "Complete coverage, bonded crews, and verified safety for all your household and business belongings."
  },
  {
    icon: <FaClock className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Timely & Punctual Crews",
    desc: "Guaranteed arrival windows, efficient loading, and dependable scheduling you can trust on moving day."
  },
  {
    icon: <FaDollarSign className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Transparent Flat-Rate Pricing",
    desc: "Clear, upfront estimates with no hidden fees, unexpected fuel charges, or surprise moving-day costs."
  },
  {
    icon: <FaGlobeAmericas className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Local & Long-Distance Moving",
    desc: "Reliable services across town in Gilbert or across state lines to anywhere in the United States."
  }
];

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-14" ref={ref} id="about-gilbert">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">

        {/* Left Column: Narrative & Specialties */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Gilbert, AZ Relocation Specialists
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-3">
            Welcome to Making Moves Matter: Your Trusted Gilbert Moving Company
          </h2>

          <h3 className="text-xl font-bold text-[#f99c00] mb-4">
            Professional Full-Service Moving for Gilbert Homeowners & Businesses
          </h3>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Planning a move in or to Gilbert, AZ? Making Moves Matter is the go-to moving company in Gilbert, AZ, offering professional, full-service relocation solutions for homeowners and businesses alike. Our licensed and insured movers in Gilbert, AZ handle everything—from packing and loading to secure storage and long-distance transport—ensuring a smooth, worry-free experience.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Whether you’re relocating a household across town or moving your office across the state, our team is dedicated to making your transition simple, efficient, and affordable. We pride ourselves on exceptional customer service, transparent pricing, and a no-hassle move from start to finish. We are fully licensed, insured, and dedicated to delivering top-tier service with every move.
          </p>

          <div className="pt-2">
            <h4 className="text-lg font-bold text-[var(--heading-text-color)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f99c00]"></span>
              Our Moving Company Specialties:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {specialties.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-[#f99c00] transition-colors duration-300 flex items-start gap-3"
                >
                  {item.icon}
                  <div>
                    <h5 className="font-semibold text-sm text-[var(--heading-text-color)]">{item.title}</h5>
                    <p className="text-gray-600 text-xs mt-1 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
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
                <FaCalendarCheck className="text-xs text-[#f99c00]" />
                Book Your Move Today
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Branded Visual in Gilbert */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-full min-h-[420px] rounded-xl overflow-hidden border border-neutral-200">
            <Image
              src="/images/gilbert-truck-branded.jpg"
              alt="Making Moves Matter branded moving truck serving homeowners in Gilbert, Arizona"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-sm rounded-lg border border-white/10 text-white">
              <p className="text-xs font-semibold text-[#f99c00] uppercase tracking-wide">Gilbert Moving Fleet</p>
              <p className="text-sm font-medium mt-0.5">Fully Equipped, Insured & Ready for Local & Long-Distance Moves</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section1;
