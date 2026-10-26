"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWarehouse, FaBoxOpen, FaPhoneAlt, FaCheckCircle, FaDollyFlatbed } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const Section5 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const specialtyCategories = [
    {
      title: "Heavy Gun Safes & Ranch Vaults",
      desc: "Equipped with heavy-duty motorized stair dollies, reinforced steel ramps, and floor-protection composite plates to transport 500-1,500 lb safes with absolute safety."
    },
    {
      title: "Upright & Baby Grand Pianos",
      desc: "Specialized piano skids, padded canvas boots, and precision buckle strapping ensure musical instruments are moved without finish scratches or mechanical shock."
    },
    {
      title: "Hot Tubs & Outdoor Spa Relocations",
      desc: "Professional spa sleds and experienced rigging teams to safely maneuver bulky hot tubs through tight side-yard gates and onto dedicated transport trailers."
    }
  ];

  const storageFeatures = [
    "Clean, climate-controlled units shielded from extreme Arizona heat and dust",
    "24/7 digital video surveillance, individual alarm points, and computerized gate access",
    "Flexible month-to-month leases for short-term home transitions and long-term storage",
    "Door-to-warehouse pickup and delivery service across Queen Creek and the East Valley"
  ];

  return (
    <section className="w-full bg-white py-16" ref={ref} id="specialty-storage">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Specialty Moving & Secure Storage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Specialty Item Moving, Packing & Climate-Controlled Storage
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            Careful transport of large, heavy, and valuable items, full-service packing, and clean climate-controlled warehousing in Queen Creek, AZ.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12">

          {/* Left Column: Specialty Moving Highlights */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f99c00] text-xl">
                  <FaDollyFlatbed />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--heading-text-color)]">
                  Heavy & Fragile Item Care
                </h3>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Queen Creek properties often feature oversized, high-value belongings that require specialized equipment and veteran technique. From heavy gun safes and upright pianos to large outdoor spas, our crews handle the heavy lifting with surgical precision.
              </p>

              <div className="space-y-4 mb-8">
                {specialtyCategories.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-[#f99c00] transition-colors"
                  >
                    <h4 className="font-bold text-sm text-[var(--heading-text-color)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-[var(--heading-text-color)]">
                Need a specialty item moved in Queen Creek?
              </span>
              <button
                type="button"
                onClick={openQuoteModal}
                className="px-4 py-2 rounded-lg bg-[#f99c00] hover:bg-[#e08b00] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Get Specialty Quote
              </button>
            </div>
          </motion.div>

          {/* Right Column: Packing & Secure Climate-Controlled Storage */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="p-8 rounded-2xl bg-[#011234] text-white border border-slate-800 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#f99c00] flex items-center justify-center text-[#011234] text-xl">
                    <FaWarehouse />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Secure Climate-Controlled Storage
                  </h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Whether your new Queen Creek home build is awaiting completion or you need flexible storage during staging and closing, our climate-controlled facilities keep your furniture, artwork, and electronics safe from extreme Arizona heat and dust.
                </p>

                <div className="space-y-3.5 mb-8">
                  {storageFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#f99c00] text-sm flex-shrink-0 mt-1" />
                      <span className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:4809348218"
                  className="w-full text-center py-3.5 px-6 rounded-lg bg-[#f99c00] hover:bg-[#e08b00] text-white font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt className="text-xs" />
                  Call (480) 934-8218
                </a>
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full text-center py-3.5 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors cursor-pointer"
                >
                  Request Storage Quote
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Section5;
