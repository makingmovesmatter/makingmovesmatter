"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaRoute } from "react-icons/fa";

const areas = [
  {
    name: "Gilbert, AZ",
    label: "Long-distance movers in Gilbert, AZ",
    href: "/az/gilbert",
    image: "/images/gilbert-moving-branded.png",
    description: "Full-service cross-country packing and interstate moving departures from Gilbert neighborhoods."
  },
  {
    name: "Chandler, AZ",
    label: "Chandler long-distance moving companies",
    href: "/az/chandler",
    image: "/images/chandler-moving-branded.png",
    description: "Reliable out-of-state relocations for single family homes, apartments, and tech executives in Chandler."
  },
  {
    name: "Tempe, AZ",
    label: "Tempe movers near me for state-to-state relocations",
    href: "/az/tempe",
    image: "/images/tempe-moving-branded.png",
    description: "Dependable state-to-state moving solutions for Tempe residents, ASU faculty, and relocating families."
  },
  {
    name: "Scottsdale, AZ",
    label: "Scottsdale long-distance movers for high-end, secure moves",
    href: "/az/scottsdale",
    image: "/images/scottsdale-moving-branded.png",
    description: "White-glove interstate transitions, custom antique crating, and luxury estate moves from Scottsdale."
  },
  {
    name: "Phoenix, AZ",
    label: "Phoenix long-distance moving services for residential and office relocations",
    href: "/az/phoenix",
    image: "/images/phoenix-moving-branded.png",
    description: "Valley-wide interstate departures, corporate transfers, and direct cross-country line hauls."
  }
];

const LongDistanceAreasServed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-t border-slate-200/80" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <FaMapMarkerAlt /> Arizona Regional Hubs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#011234] leading-tight mb-4">
            Serving Mesa and Surrounding Areas for Long-Distance Moves
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our professional long-distance movers near me proudly serve Mesa and nearby cities, including:
          </p>
        </div>

        {/* Areas Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {areas.map((area, index) => {
            const isWide = index === 4;
            return (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[var(--accent-color)] transition-all duration-300 flex flex-col justify-between group ${isWide ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
              >
                <div>
                  {/* City Visual */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={area.image}
                      alt={`${area.label} - Making Moves Matter`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {area.name}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block mb-0.5">
                        Interstate Departure Service
                      </span>
                      <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm">
                        {area.label}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-color)] group-hover:text-amber-700 transition-colors"
                  >
                    <span>View {area.name} Long-Distance Details</span>
                    <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Links Bar */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm">
          <span className="font-bold text-[#011234] flex items-center gap-2">
            <FaRoute className="text-[var(--accent-color)]" />
            Interstate Service Coverage:
          </span>
          <Link href="/az/mesa" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Mesa Long-Distance Movers
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/az/gilbert" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Gilbert Out-of-State Movers
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/az/chandler" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Chandler Interstate Relocation
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/az/tempe" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Tempe State-to-State
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/az/scottsdale" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Scottsdale Long-Distance Movers
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/az/phoenix" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Phoenix Long-Distance Moving
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LongDistanceAreasServed;
