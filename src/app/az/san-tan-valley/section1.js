"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaClock, FaDollarSign, FaGlobeAmericas, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const specialties = [
  {
    icon: <FaShieldAlt className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Licensed & Insured Moving",
    desc: "15+ years of trusted experience with background-checked, fully insured, and highly trained professional crews."
  },
  {
    icon: <FaClock className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Punctual & Reliable Dispatch",
    desc: "Guaranteed arrival windows, efficient route coordination across Hunt Highway and Ironwood, and reliable timing."
  },
  {
    icon: <FaDollarSign className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Transparent Upfront Pricing",
    desc: "Guaranteed flat-rate estimates with zero hidden fuel charges, unexpected stairs fees, or moving day surcharges."
  },
  {
    icon: <FaGlobeAmericas className="text-[#f99c00] text-2xl flex-shrink-0" />,
    title: "Local & Nationwide Moving",
    desc: "Seamless relocations across San Tan Valley, throughout the Phoenix metro, or nationwide with dedicated long-haul trucks."
  }
];

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-14" ref={ref} id="about-san-tan-valley">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">

        {/* Left Column: Narrative & Specialties */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            San Tan Valley, AZ Relocation Specialists
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-2">
            Welcome to Making Moves Matter: Your Trusted San Tan Valley Moving Company
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#f99c00] mb-4">
            Local San Tan Valley Movers with 15+ Years Experience, Licensed & Insured, with a Trained Crew
          </h3>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Are you looking for dependable, stress-free movers in San Tan Valley, AZ to handle your upcoming relocation? At Making Moves Matter, we provide top-quality moving services for families and businesses throughout San Tan Valley and surrounding northern Pinal County. Our skilled moving teams handle everything from residential homes in master-planned golf communities to local commercial offices.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Whether you are moving across town to Johnson Ranch or relocating out of state, our mission is to make your transition smooth, efficient, and affordable. With professional packing, secure climate-controlled storage, and punctual delivery, we are the San Tan Valley moving company you can count on for total peace of mind.
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
                <FaCalendarCheck className="text-xs" />
                Request Free Quote
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Feature Card */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between h-full">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-[#f99c00] text-xs font-bold uppercase tracking-wider mb-4">
                Why San Tan Valley Residents Choose Us
              </div>
              <h3 className="text-2xl font-bold text-[var(--heading-text-color)] mb-4">
                Expert Moving for Master-Planned Neighborhoods & Mountain Foothills
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                From golf fairway homes in Johnson Ranch and mountain-view residences in San Tan Heights to spacious family properties in Copper Basin and Pecan Creek, our movers understand local layouts, HOA guidelines, and wide desert corridors.
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="p-3.5 rounded-lg bg-white border border-neutral-200 flex items-center justify-between">
                  <span className="font-semibold text-sm text-[var(--heading-text-color)]">Local & Long-Distance Experience</span>
                  <span className="font-bold text-sm text-[#f99c00]">15+ Years</span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-neutral-200 flex items-center justify-between">
                  <span className="font-semibold text-sm text-[var(--heading-text-color)]">Customer Satisfaction Rating</span>
                  <span className="font-bold text-sm text-[#f99c00]">4.9 / 5.0 ★</span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-neutral-200 flex items-center justify-between">
                  <span className="font-semibold text-sm text-[var(--heading-text-color)]">Licensing & Coverage</span>
                  <span className="font-bold text-sm text-[#f99c00]">100% Bonded & Insured</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-center">
              <p className="text-xs text-gray-700 font-medium">
                Serving all San Tan Valley ZIP codes: <strong className="text-[#011234]">85140, 85142, 85143</strong> and surrounding areas.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section1;
