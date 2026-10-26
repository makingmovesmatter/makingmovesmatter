"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaClock, FaDollarSign, FaGlobeAmericas, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const specialties = [
  {
    icon: <FaShieldAlt className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Licensed & Insured Moving",
    desc: "15 years of experience with fully bonded, background-checked, and rigorously trained moving crews."
  },
  {
    icon: <FaClock className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Timely & Punctual Delivery",
    desc: "Guaranteed arrival windows, efficient dispatch, and dependable relocation scheduling across the Valley."
  },
  {
    icon: <FaDollarSign className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Transparent Upfront Pricing",
    desc: "Competitive flat-rate quotes with zero hidden fuel charges, stair surcharges, or surprise moving fees."
  },
  {
    icon: <FaGlobeAmericas className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Local & Cross-Country Moving",
    desc: "Moving across the street or across the country with dedicated trucks and direct route tracking."
  }
];

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-14" ref={ref} id="about-phoenix">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">

        {/* Left Column: Narrative & Specialties */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Phoenix, AZ Relocation Specialists
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-2">
            Welcome to Making Moves Matter: Your Trusted Moving Company in Phoenix
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#f99c00] mb-4">
            Local Phoenix Movers with 15 Years of Experience, Licensed & Insured, with a Trained Crew
          </h3>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Are you looking for dependable and professional movers in Phoenix to handle your relocation? At Making Moves Matter, we pride ourselves on delivering top-quality, stress-free moving services in Phoenix and nearby areas. Our skilled team of local movers in Phoenix is ready to assist with everything from residential moves to complex commercial relocations.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Whether you’re moving across the street or across the country, our mission is to make your transition smooth and efficient. With expert packing, secure storage, and timely delivery, we’re the Phoenix moving company you can rely on for a seamless moving experience. We are fully licensed, insured, and committed to delivering exceptional service for every move.
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
                Book Your Phoenix Move
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Branded Visual in Phoenix */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-full min-h-[420px] rounded-xl overflow-hidden border border-neutral-200">
            <Image
              src="/images/phoenix-truck-branded.jpg"
              alt="Making Moves Matter branded moving truck serving residents in Phoenix, Arizona"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-sm rounded-lg border border-white/10 text-white">
              <p className="text-xs font-semibold text-[#f99c00] uppercase tracking-wide">Phoenix Moving Fleet</p>
              <p className="text-sm font-medium mt-0.5">15 Years Experience, Fully Equipped & Dedicated to Quality Moves</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section1;
