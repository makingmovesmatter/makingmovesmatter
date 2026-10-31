"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const areas = [
  {
    name: "Mesa, AZ",
    href: "/az/mesa",
    image: "/images/mesa-moving-branded.png",
    description: "Our hometown base. Trusted residential, apartment, and corporate office moving across Mesa.",
    badge: "Headquarters"
  },
  {
    name: "Chandler, AZ",
    href: "/az/chandler",
    image: "/images/chandler-moving-branded.png",
    description: "Professional residential and tech corridor office relocations throughout Chandler neighborhoods.",
    badge: "East Valley"
  },
  {
    name: "Scottsdale, AZ",
    href: "/az/scottsdale",
    image: "/images/scottsdale-moving-branded.png",
    description: "White-glove luxury estate moving, delicate antiques, and high-end residential transitions.",
    badge: "Luxury Care"
  },
  {
    name: "Tempe, AZ",
    href: "/az/tempe",
    image: "/images/tempe-moving-branded.png",
    description: "Fast, dependable student, apartment, and corporate moves throughout the vibrant Tempe community.",
    badge: "Fast Dispatch"
  },
  {
    name: "Gilbert, AZ",
    href: "/az/gilbert",
    image: "/images/gilbert-moving-branded.png",
    description: "Family-friendly full-service home relocations, packing, and furniture setup across Gilbert.",
    badge: "Family Moves"
  },
  {
    name: "Phoenix, AZ",
    href: "/az/phoenix",
    image: "/images/phoenix-moving-branded.png",
    description: "Valley-wide residential and commercial moving solutions covering all Phoenix metro districts.",
    badge: "Valley-Wide"
  },
  {
    name: "Queen Creek, AZ",
    href: "/az/queen-creek",
    image: "/images/queen-creek-moving-branded.png",
    description: "Dependable local moving services for new homes and expanding master-planned communities.",
    badge: "Growing Hub"
  },
  {
    name: "San Tan Valley, AZ",
    href: "/az/san-tan-valley",
    image: "/images/san-tan-valley-moving-branded.png",
    description: "Affordable, high-quality moving for families and businesses throughout San Tan Valley.",
    badge: "Dependable"
  }
];

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <FaMapMarkerAlt /> Serving the Greater Phoenix Area
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#011234] leading-tight mb-4">
            Areas We Serve Across Arizona
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From our headquarters in Mesa, Making Moves Matter proudly serves homeowners, renters, and commercial businesses across the entire Valley and statewide. Select your city to explore dedicated local moving services:
          </p>
        </div>

        {/* 8 Areas Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[var(--accent-color)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={area.image}
                    alt={`Movers in ${area.name} - Making Moves Matter`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                    {area.badge}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white">
                      {area.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-5">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100">
                <Link
                  href={area.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--accent-color)] group-hover:text-amber-700 transition-colors"
                >
                  <span>Explore {area.name} Movers</span>
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Regional Hub Button */}
        <div className="mt-12 text-center">
          <Link
            href="/az"
            className="inline-flex items-center gap-2 bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
          >
            <span>View All Arizona Service Locations</span>
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Section3;