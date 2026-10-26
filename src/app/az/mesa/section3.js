"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaMapMarkerAlt, FaRoute, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-16" ref={ref} id="local-long-distance">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-full min-h-[420px] rounded-xl overflow-hidden border border-neutral-200">
            <Image
              src="/images/mesa_moving_team.jpg"
              alt="Local and long-distance movers carefully packing and loading moving boxes in Mesa AZ"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-sm rounded-lg border border-neutral-200">
              <span className="flex items-center gap-2 text-xs font-bold text-[#011234]">
                <FaMapMarkerAlt className="text-[#f99c00]" />
                Mesa Local & Nationwide Routes
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Mesa & Beyond Relocation
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-4">
            Full-Spectrum Moving: Local Precision & Cross-Country Logistics
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            At Making Moves Matter, we take pride in offering a comprehensive range of moving services to residents and businesses in Mesa, AZ. Whether you’re relocating within the city or moving across the country, our team has the expertise to handle every aspect of your move with care, precision, and reliability. Here’s how we can assist you:
          </p>

          <div className="space-y-6">
            <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:border-[#f99c00] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center text-[#f99c00]">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="text-xl font-bold text-[var(--heading-text-color)]">
                  Local Moving Services in Mesa, AZ
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Relocating within Mesa can be a breeze with the help of our local movers in Mesa, AZ. From bustling areas like Downtown Mesa to peaceful neighborhoods such as Superstition Springs or Eastmark, we know Mesa inside and out. Our team specializes in apartment moves, house relocations, and any same-city transitions, ensuring your belongings arrive safely and promptly to your new home or office.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-2 font-medium">
                Whether you’re moving down the street or to another part of the city, we make it a stress-free experience, offering efficient solutions tailored to your needs.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/80 hover:border-[#f99c00] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-[#4096b1]">
                  <FaRoute />
                </div>
                <h3 className="text-xl font-bold text-[var(--heading-text-color)]">
                  Long-Distance & Nationwide Moving
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                For those planning a move outside Arizona, we offer expert long-distance moving and nationwide movers services. From Mesa, AZ, we provide door-to-door service, handling the logistics of interstate moves with ease. Your belongings are safely transported across state lines or even across the country, giving you peace of mind throughout the journey.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-2 font-medium">
                Our experienced team makes moving to places like California, Texas, or beyond as smooth as possible, with timely deliveries and safe handling.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="tel:4809348218"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#011234] hover:bg-slate-800 text-white font-semibold text-sm transition-colors duration-200"
            >
              <FaPhoneAlt className="text-xs text-[#f99c00]" />
              Speak with a Route Planner
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
