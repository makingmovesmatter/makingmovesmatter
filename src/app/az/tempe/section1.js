"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaClock, FaDollarSign, FaGlobeAmericas, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const specialties = [
  {
    icon: <FaShieldAlt className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Fully Licensed & Insured",
    desc: "Complete protection, bonded crews, and verified safety for all your household and business belongings."
  },
  {
    icon: <FaClock className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Punctual & Guaranteed Delivery",
    desc: "Dependable dispatch, exact arrival windows, and reliable scheduling tailored to your relocation timeline."
  },
  {
    icon: <FaDollarSign className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Affordable & Transparent Pricing",
    desc: "Upfront competitive quotes with zero hidden fuel charges, stair fees, or surprise moving-day costs."
  },
  {
    icon: <FaGlobeAmericas className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Local & Nationwide Relocation",
    desc: "Seamless moving services connecting Tempe across the Phoenix Valley and to any state in the country."
  }
];

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-14" ref={ref} id="about-tempe">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">

        {/* Left Column: Narrative & Specialties */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Tempe, AZ Relocation Specialists
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-3">
            Welcome to Making Moves Matter: Your Trusted Tempe Moving Company
          </h2>

          <h3 className="text-xl font-bold text-[#f99c00] mb-4">
            Stress-Free Residential & Commercial Movers in Tempe, AZ
          </h3>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Planning a move to or from Tempe, AZ? At Making Moves Matter, we specialize in providing top-tier, stress-free relocation services across Tempe and the surrounding metro area. As a leading moving company in Tempe, AZ, our team of skilled professionals is experienced in handling every phase of your move—from packing and loading to transport, storage, and final delivery.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Whether you’re transitioning into a new home or relocating your business, our dedicated movers in Tempe, AZ are ready to provide a seamless, efficient, and affordable experience tailored to your unique needs. We’re fully licensed, insured, and committed to delivering exceptional service with every move.
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
                Click to Schedule Your Move
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Branded Visual near Tempe Town Lake */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-full min-h-[420px] rounded-xl overflow-hidden border border-neutral-200">
            <Image
              src="/images/tempe-truck-branded.png"
              alt="Making Moves Matter branded moving truck parked near Tempe Town Lake and the Mill Avenue bridge in Tempe, Arizona"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-sm rounded-lg border border-white/10 text-white">
              <p className="text-xs font-semibold text-[#f99c00] uppercase tracking-wide">Tempe Moving Fleet</p>
              <p className="text-sm font-medium mt-0.5">Fully Equipped, Insured & Ready for Local & Long-Distance Moves</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section1;
