"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaMapPin, FaCheck, FaPhoneAlt, FaCity, FaHome, FaTree, FaWater, FaGraduationCap } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const neighborhoods = [
  {
    name: "Downtown Tempe (Mill Avenue)",
    desc: "The vibrant heart of Tempe featuring modern high-rise apartments, urban student lofts, eclectic retail, and world-class dining.",
    icon: <FaCity className="text-[#011234]" />,
    badge: "Urban Core & Mill Ave"
  },
  {
    name: "Tempe Town Lake Waterfront",
    desc: "Premier waterfront district boasting luxury modern condominiums, corporate headquarters, and panoramic lake views.",
    icon: <FaWater className="text-[#4096b1]" />,
    badge: "Waterfront Living"
  },
  {
    name: "South Tempe",
    desc: "An established suburban sanctuary known for sprawling single-family custom estates, horse properties, and tree-lined streets.",
    icon: <FaHome className="text-[#f99c00]" />,
    badge: "Luxury Custom Estates"
  },
  {
    name: "Kyrene Corridor",
    desc: "Top-rated family community recognized for award-winning schools, serene neighborhood parks, and quiet residential cul-de-sacs.",
    icon: <FaGraduationCap className="text-emerald-700" />,
    badge: "Top Schools & Families"
  },
  {
    name: "Warner Ranch",
    desc: "Popular master-planned neighborhood featuring community swimming pools, tennis courts, walking greenbelts, and family amenities.",
    icon: <FaTree className="text-emerald-600" />,
    badge: "Parks & Greenbelts"
  },
  {
    name: "Shalimar & Broadmor",
    desc: "Charming mid-century neighborhoods with mature shade trees, spacious yards, and easy access to ASU and the US-60 freeway.",
    icon: <FaHome className="text-amber-700" />,
    badge: "Mid-Century Charm"
  }
];

const zipCodes = ["85281", "85282", "85283", "85284", "85285", "85287"];

const Section11 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-16" ref={ref} id="neighborhoods-tempe">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">

        {/* Left Column: Neighborhood Cards */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Tempe Community Coverage
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-4">
            Neighborhoods We Serve in Tempe, AZ – Expert Moving Services Across the City
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            From the bustling high-rise apartments of Downtown Tempe and Town Lake to the quiet family estates of South Tempe and the Kyrene Corridor, Making Moves Matter provides reliable, on-time moving services across every neighborhood:
          </p>

          <div className="space-y-3.5 mb-6">
            {neighborhoods.map((n, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:border-[#f99c00] hover:bg-white transition-all duration-200 flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-base">
                  {n.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-sm text-[var(--heading-text-color)]">
                      {n.name}
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-[#f99c00]">
                      {n.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {n.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: ZIP Coverage & Free Estimate Form Callout */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f99c00] text-2xl mb-6">
                <FaMapPin />
              </div>

              <span className="text-xs font-bold text-[#f99c00] uppercase tracking-wider block mb-2">
                100% Tempe Geographic Coverage
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--heading-text-color)] mb-4">
                Local Routes & Valley-Wide Connectivity
              </h3>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                Our moving fleet travels all primary Tempe corridors daily, including Loop 202 (Red Mountain Freeway), Loop 101 (Price Freeway), US-60 (Superstition Freeway), I-10, Rural Road, and Mill Avenue.
              </p>

              <h4 className="font-bold text-sm text-[var(--heading-text-color)] mb-3">
                Serving All Primary Tempe ZIP Codes:
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                {zipCodes.map((zip, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-neutral-200 text-center font-mono font-bold text-sm text-[#011234] flex items-center justify-center gap-1.5"
                  >
                    <FaCheck className="text-xs text-[#f99c00]" />
                    {zip}
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-xs leading-relaxed mb-6">
                Also offering seamless relocations connecting Tempe with Mesa, Chandler, Scottsdale, Phoenix, Gilbert, Queen Creek, and cross-country long-distance moves nationwide.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:4809348218"
                className="w-full text-center py-3.5 px-6 rounded-lg bg-[#011234] hover:bg-slate-800 text-white font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
              >
                <FaPhoneAlt className="text-xs text-[#f99c00]" />
                Call (480) 934-8218
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="w-full text-center py-3.5 px-6 rounded-lg bg-[#f99c00] hover:bg-[#e08b00] text-white font-bold text-sm transition-colors cursor-pointer"
              >
                Get Local Estimate
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section11;
