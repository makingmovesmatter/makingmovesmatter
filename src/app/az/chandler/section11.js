"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaMapPin, FaCheck, FaPhoneAlt, FaCity, FaHome, FaTree, FaShoppingBag, FaWater } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const neighborhoods = [
  {
    name: "Ocotillo",
    desc: "Renowned luxury master-planned community featuring over 160 acres of interconnected lakes and championship golf courses.",
    icon: <FaWater className="text-[#4096b1]" />,
    badge: "Waterfront & Golf Living"
  },
  {
    name: "Fulton Ranch",
    desc: "A 520-acre premier community celebrated for gated multi-million dollar estates, lush walking trails, and top schools.",
    icon: <FaHome className="text-[#f99c00]" />,
    badge: "Luxury Gated Estates"
  },
  {
    name: "Downtown Chandler",
    desc: "The historic heart of Chandler featuring urban loft apartments, award-winning breweries, art galleries, and dining.",
    icon: <FaCity className="text-[#011234]" />,
    badge: "Historic & Urban Core"
  },
  {
    name: "Sun Lakes",
    desc: "Chandler’s premier resort-style active adult community with five golf courses, clubhouses, and quiet suburban streets.",
    icon: <FaTree className="text-emerald-600]" />,
    badge: "Active Adult Resort"
  },
  {
    name: "Andersen Springs",
    desc: "A lush, serene neighborhood centered around tranquil community lakes, greenbelts, and family-friendly schools.",
    icon: <FaHome className="text-amber-600" />,
    badge: "Lakes & Greenbelts"
  },
  {
    name: "Sun Groves",
    desc: "Scenic South Chandler neighborhood surrounded by sprawling community parks, walking paths, and San Tan Mountain views.",
    icon: <FaShoppingBag className="text-[#f99c00]" />,
    badge: "Parks & Family Living"
  }
];

const zipCodes = ["85224", "85225", "85226", "85248", "85249", "85286"];

const Section11 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-16" ref={ref} id="neighborhoods-chandler">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">

        {/* Left Column: Neighborhood Cards */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Chandler Community Coverage
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-4">
            Neighborhoods We Serve in Chandler, AZ – Expert Moving Services Across the City
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            From the lakefront estates of Ocotillo to the bustling corporate campuses along the Price Road Tech Corridor, Making Moves Matter provides reliable, on-time residential and commercial moving across every corner of Chandler:
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
                100% Chandler Geographic Coverage
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--heading-text-color)] mb-4">
                Local Routes & East Valley Connectivity
              </h3>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                Our moving trucks operate daily across all primary Chandler thoroughfares, including Loop 202 (Santan Freeway), Loop 101 (Price Freeway), Arizona Avenue (State Route 87), and Alma School Road.
              </p>

              <h4 className="font-bold text-sm text-[var(--heading-text-color)] mb-3">
                Serving All Primary Chandler ZIP Codes:
              </h4>

              <div className="grid grid-cols-3 gap-2.5 mb-8">
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
                Also providing seamless relocations connecting Chandler to Gilbert, Mesa, Tempe, Scottsdale, Queen Creek, Phoenix, and nationwide cross-country destinations.
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
