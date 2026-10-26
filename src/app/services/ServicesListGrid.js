"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FaTruck, FaArrowRight, FaCalendarCheck } from "react-icons/fa";
import { openQuoteModal } from "@/app/components/QuoteButton";
import { ALL_SERVICES } from "./servicesData";

const ServicesListGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <FaTruck /> Professional Arizona Moving Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#011234] leading-tight mb-4">
            Comprehensive Moving Solutions Tailored to You
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every move is unique. Whether you need an entire home packed and moved cross-country or just a few heavy items shifted safely across town, our licensed and insured moving professionals have you covered.
          </p>
        </div>

        {/* 12 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ALL_SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[var(--accent-color)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image with Brand Overlay */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Making Moves Matter`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
                    {service.tag}
                  </span>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description Body */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={service.slug}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-color)] hover:text-amber-700 transition-colors"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={openQuoteModal}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[var(--accent-color)] hover:opacity-90 px-3.5 py-2 rounded-lg transition-all cursor-pointer"
                >
                  <FaCalendarCheck />
                  <span>Get Quote</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA Strip */}
        <div className="mt-16 p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-[#011234] to-[#021d59] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="text-left max-w-xl">
            <h4 className="text-2xl sm:text-3xl font-semibold mb-2">Need a Custom Moving Package?</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Call our friendly coordinators at (480) 934-8218 for honest, upfront written quotes with zero hidden fees.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={openQuoteModal}
              type="button"
              className="w-full sm:w-auto bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold px-7 py-3.5 rounded-xl transition-all cursor-pointer whitespace-nowrap text-center"
            >
              Request Free Quote
            </button>
            <a
              href="tel:4809348218"
              className="w-full sm:w-auto bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold px-6 py-3.5 rounded-xl text-center transition-all whitespace-nowrap"
            >
              (480) 934-8218
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesListGrid;
