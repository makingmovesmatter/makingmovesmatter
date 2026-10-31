"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaTruck, FaArrowRight, FaCalendarCheck } from "react-icons/fa";
import { openQuoteModal } from "./QuoteButton";

const services = [
  {
    title: "Local Moving",
    description: "Fast, dependable, and affordable moving services across Mesa, Phoenix, and nearby East Valley communities.",
    image: "/images/mesa-moving-branded.jpg",
    link: "/services/local-moving",
    tag: "Most Popular"
  },
  {
    title: "Long Distance Moving",
    description: "Trusted interstate and cross-country moving solutions with dedicated trucks, GPS tracking, and on-time delivery.",
    image: "/images/longdistance.png",
    link: "/services/long-distance-moving",
    tag: "State-to-State"
  },
  {
    title: "Commercial Services",
    description: "Expert office, retail, and corporate relocation planned to minimize operational downtime and protect vital business assets.",
    image: "/images/mesa-commercial-moving.jpg",
    link: "/services/commercial-services",
    tag: "Business & Office"
  },
  {
    title: "Furniture Moving",
    description: "Careful blanket wrapping, disassembly, and transportation for luxury sofas, antiques, dining sets, and bedroom suites.",
    image: "/images/scottsdale-luxury-moving.jpg",
    link: "/services/furniture-moving",
    tag: "Care & Protection"
  },
  {
    title: "Furniture Assembly",
    description: "Precision teardown and rebuild of bed frames, modular desks, executive furniture, and home storage units.",
    image: "/images/furniture-assembly-brand.jpg",
    link: "/services/furniture-assembly",
    tag: "Setup & Tools"
  },
  {
    title: "Packing & Unpacking Services",
    description: "Full or partial packing with commercial-grade boxes, custom crating, bubble wrap, and safe unpacking at your new home.",
    image: "/images/mesa_packing_care.jpg",
    link: "/services/packing-and-unpacking-services",
    tag: "Full Service"
  },
  {
    title: "Large and Heavy Item Moving",
    description: "Specialized rigging and heavy-duty dollies for grand pianos, gun safes, oversized appliances, and machinery.",
    image: "/images/scottsdale-specialty-piano.jpg",
    link: "/services/large-and-heavy-item-moving",
    tag: "Specialty Rigging"
  },
  {
    title: "Storage Solutions",
    description: "Secure, climate-controlled storage facilities for short-term transitions or long-term warehousing with easy access.",
    image: "/images/chandler-commercial-moving.jpg",
    link: "/services/storage",
    tag: "Climate-Controlled"
  },
  {
    title: "Hot Tub Relocation",
    description: "Safe, damage-free spa transport using specialized trailers, heavy-duty spa dollies, and trained moving technicians.",
    image: "/images/az-fleet-hero.png",
    link: "/services/hot-tub-relocation",
    tag: "Heavy Handling"
  },
];

const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50 border-y border-slate-200/80" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[var(--accent-color)] border border-amber-200/60 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <FaTruck /> Full-Service Moving Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#011234] leading-tight mb-4">
            Our Moving Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We help with moves big and small—whether you’re relocating from a studio apartment, a multi-bedroom estate, or an entire commercial corporate office. Explore our trusted services below.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[var(--accent-color)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Tag */}
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
                  href={service.link}
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
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#011234] to-[#021d59] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold mb-1">Need a Custom Moving Package?</h4>
            <p className="text-slate-300 text-sm sm:text-base">
              Call our friendly coordinators at (480) 934-8218 for honest, upfront quotes with zero hidden fees.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={openQuoteModal}
              type="button"
              className="w-full md:w-auto bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              Request Free Quote
            </button>
            <a
              href="tel:4809348218"
              className="w-full md:w-auto bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold px-5 py-3 rounded-xl text-center transition-all whitespace-nowrap"
            >
              (480) 934-8218
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
