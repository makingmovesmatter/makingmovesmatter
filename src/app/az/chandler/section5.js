"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaShieldAlt,
  FaWarehouse,
  FaMusic,
  FaGem,
  FaCouch,
  FaPalette,
  FaTemperatureLow,
  FaVideo,
  FaKey,
  FaPhoneAlt
} from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const specialtyItems = [
  { name: "Pianos", icon: <FaMusic className="text-[#f99c00]" />, desc: "Upright, baby grand, and concert grand pianos handled with specialized skids and padding." },
  { name: "Antiques", icon: <FaGem className="text-[#f99c00]" />, desc: "Heirloom furniture, delicate wood finishes, and vintage pieces wrapped with multi-layer care." },
  { name: "Heavy Furniture", icon: <FaCouch className="text-[#f99c00]" />, desc: "Solid hardwood tables, heavy armoires, marble tops, and oversized sectional couches." },
  { name: "Artwork and Mirrors", icon: <FaPalette className="text-[#f99c00]" />, desc: "Custom wooden crating, corner protectors, and telescopic art boxes for maximum defense." }
];

const storageBenefits = [
  {
    icon: <FaTemperatureLow className="text-[#4096b1] text-2xl" />,
    title: "Climate Control",
    desc: "Your belongings are protected from extreme Arizona summer heat, humidity, and airborne dust."
  },
  {
    icon: <FaVideo className="text-emerald-600 text-2xl" />,
    title: "24/7 Monitored Security",
    desc: "Our storage units are equipped with top-notch security features, including video surveillance and gated access."
  },
  {
    icon: <FaKey className="text-[#f99c00] text-2xl" />,
    title: "Convenient Access",
    desc: "We offer easy access to your belongings whenever you need them throughout your relocation transition."
  }
];

const Section5 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-16" ref={ref} id="specialty-and-storage">
      <div className="container mx-auto px-5">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Pillars 03 & 04 • Specialized Protection & Storage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Specialty Moving for Fragile Items & Secure Storage Solutions
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Tailored preservation for your most valuable treasures and flexible, climate-controlled warehousing in Chandler.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Card 1: 3. Specialty Moving Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between hover:border-[#f99c00] transition-colors"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f99c00] text-xl">
                  <FaShieldAlt />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#f99c00] uppercase tracking-wider block">Specialty Relocation</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--heading-text-color)]">
                    3. Specialty Moving Services for Fragile Items
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                Not all belongings are created equal, and some require extra care during the moving process. At Making Moves Matter, we specialize in specialty moving services for high-value and sensitive cargo:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {specialtyItems.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-neutral-200">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-base">{item.icon}</span>
                      <h4 className="font-bold text-sm text-[var(--heading-text-color)]">{item.name}</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6 bg-white p-3.5 rounded-xl border border-neutral-200">
                Our team is highly trained in handling fragile, bulky, or unusual items. We ensure everything is packed securely and transported safely to its new destination.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#011234] hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Quote Specialty Item
              </button>
              <span className="text-xs font-medium text-gray-500">Custom Crating Available</span>
            </div>
          </motion.div>

          {/* Card 2: 4. Secure Storage Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between hover:border-[#f99c00] transition-colors"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f99c00] text-xl">
                  <FaWarehouse />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#f99c00] uppercase tracking-wider block">Vault & Climate Warehousing</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--heading-text-color)]">
                    4. Secure Storage Solutions in Chandler
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                When moving, sometimes there’s a need for temporary storage. Our Chandler moving company offers secure, climate-controlled storage units. Whether you need short-term or long-term storage, our facilities provide the following benefits:
              </p>

              <div className="space-y-3.5 mb-6">
                {storageBenefits.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-neutral-200 flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-neutral-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[var(--heading-text-color)] mb-0.5">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6 bg-white p-3.5 rounded-xl border border-neutral-200 font-medium text-orange-950">
                If your new home or office isn’t quite ready, our storage solutions give you the flexibility you need during the transition.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#f99c00] hover:bg-[#e08b00] text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Reserve Storage Unit
              </button>
              <span className="text-xs font-medium text-gray-500">24/7 Gated & Monitored</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section5;
