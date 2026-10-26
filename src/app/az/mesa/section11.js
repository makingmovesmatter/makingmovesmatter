"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaMapPin, FaCheck, FaPhoneAlt, FaCity, FaHome, FaTree, FaShoppingBag, FaMountain } from "react-icons/fa";

const neighborhoods = [
  {
    name: "Downtown Mesa",
    desc: "The heart of the city with its rich history and urban lifestyle.",
    icon: <FaCity className="text-[#f99c00]" />,
    badge: "Urban Core & Arts"
  },
  {
    name: "Eastmark",
    desc: "A growing community known for its modern homes and family-friendly atmosphere.",
    icon: <FaHome className="text-[#4096b1]" />,
    badge: "Master-Planned Living"
  },
  {
    name: "Red Mountain Ranch",
    desc: "A beautiful neighborhood with scenic views and peaceful surroundings.",
    icon: <FaMountain className="text-emerald-600" />,
    badge: "Scenic Foothills"
  },
  {
    name: "Dobson Ranch",
    desc: "Ideal for those who want a suburban setting with easy access to amenities.",
    icon: <FaTree className="text-amber-600" />,
    badge: "Lakes & Amenities"
  },
  {
    name: "Superstition Springs",
    desc: "Perfect for those who love shopping, entertainment, and a vibrant community.",
    icon: <FaShoppingBag className="text-[#011234]" />,
    badge: "Retail & Entertainment"
  }
];

const Section11 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-16" ref={ref} id="neighborhoods-mesa">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Mesa Community Coverage
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-4">
            Neighborhoods We Serve in Mesa, AZ – Expert Moving Services Across the City
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Making Moves Matter, we proudly serve the vibrant communities across{" "}
            <a
              href="https://en.wikipedia.org/wiki/Moving_company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f99c00] font-bold hover:underline"
            >
              Mesa
            </a>
            , AZ. Our expert moving team is familiar with the city’s diverse neighborhoods and is ready to assist with your relocation, no matter where you’re moving. Some of the areas we serve include:
          </p>

          <div className="space-y-3.5">
            {neighborhoods.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/70 hover:border-[#f99c00] transition-colors duration-200 flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--heading-text-color)] flex items-center gap-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-semibold px-2.5 py-1 rounded bg-white border border-neutral-200 text-neutral-600 whitespace-nowrap">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-sm font-medium mt-6 leading-relaxed">
            Whether you’re moving to or from these areas or any other neighborhood in Mesa, we ensure a smooth and efficient relocation process every time.
          </p>

          <div className="mt-6">
            <a
              href="tel:4809348218"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#f99c00] hover:bg-[#e08b00] text-white font-semibold text-sm transition-colors duration-200"
            >
              <FaPhoneAlt className="text-xs" />
              Book Your Neighborhood Move: (480) 934-8218
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-full min-h-[420px] rounded-xl overflow-hidden border border-neutral-200">
            <Image
              src="/images/mesa8.png"
              alt="Making Moves Matter team serving residential neighborhoods across Mesa Arizona"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/85 backdrop-blur-sm rounded-lg border border-white/10 text-white">
              <p className="text-xs font-semibold text-[#f99c00] uppercase tracking-wide">Citywide Mesa Coverage</p>
              <p className="text-sm font-medium mt-0.5">Navigating residential streets, gated communities, HOA rules, and elevator buildings with ease.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section11;
