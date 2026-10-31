"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaBuilding, FaExternalLinkAlt } from "react-icons/fa";

const areas = [
  {
    name: "Gilbert, AZ",
    label: "Commercial movers in Gilbert, AZ",
    href: "/az/gilbert",
    image: "/images/gilbert-commercial-moving.jpg",
    description: "Full-service commercial relocations, retail store setups, and office moves across Gilbert.",
    externalWiki: null
  },
  {
    name: "Chandler, AZ",
    label: "Office moving companies in Chandler, AZ",
    href: "/az/chandler",
    image: "/images/chandler-commercial-moving.jpg",
    description: "Specialized tech-corridor office moving, workstations, IT hardware, and corporate facilities.",
    externalWiki: null
  },
  {
    name: "Tempe, AZ",
    label: "Corporate relocation services in Tempe, AZ",
    href: "/az/tempe",
    image: "/images/tempe-commercial-moving.jpg",
    description: "Corporate office expansions, startup headquarters transitions, and business moves in Tempe.",
    externalWiki: "https://en.wikipedia.org/wiki/Tempe,_Arizona"
  },
  {
    name: "Scottsdale, AZ",
    label: "Scottsdale commercial moving services",
    href: "/az/scottsdale",
    image: "/images/scottsdale-moving-branded.png",
    description: "Executive suite relocations, medical offices, and boutique storefront commercial moves.",
    externalWiki: null
  },
  {
    name: "Phoenix, AZ",
    label: "Business moving solutions in Phoenix and surrounding areas",
    href: "/az/phoenix",
    image: "/images/phoenix-commercial-moving.jpg",
    description: "Large corporate headquarters, industrial warehouse relocations, and Valley-wide logistics.",
    externalWiki: null
  }
];

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <FaMapMarkerAlt /> Regional East Valley Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#011234] leading-tight mb-4">
            Serving Businesses in Mesa and Surrounding Areas
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our professional Mesa business movers proudly serve the entire East Valley, including:
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {area.name}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block mb-0.5">
                        East Valley Service Area
                      </span>
                      <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm">
                        {area.label}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {area.description}
                    </p>

                    {area.externalWiki && (
                      <div className="text-xs text-slate-500 mb-2 flex items-center gap-1.5">
                        <span>Learn more about</span>
                        <a
                          href={area.externalWiki}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent-color)] hover:underline inline-flex items-center gap-1 font-medium"
                        >
                          Tempe, Arizona on Wikipedia <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-color)] group-hover:text-amber-700 transition-colors"
                  >
                    <span>View {area.name} Services</span>
                    <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Surrounding Area Quick Links Bar */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm">
          <span className="font-bold text-[#011234] flex items-center gap-2">
            <FaBuilding className="text-[var(--accent-color)]" />
            Direct Relocation Routes:
          </span>
          <Link href="/az/mesa" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Mesa Commercial Movers
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/az/gilbert" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Gilbert Office Movers
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/az/chandler" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Chandler Business Moving
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/az/tempe" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Tempe Corporate Relocation
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/az/scottsdale" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Scottsdale Office Services
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/az/phoenix" className="text-slate-600 hover:text-[var(--accent-color)] font-medium transition-colors">
            Phoenix Commercial Solutions
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Section3;
