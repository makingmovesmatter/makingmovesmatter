"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCalendarAlt, FaParking, FaTemperatureHigh, FaLightbulb, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const tips = [
  {
    icon: <FaCalendarAlt className="text-[#f99c00] text-xl" />,
    title: "Best Months to Move",
    content: "Mesa’s summer temperatures can be extreme, so it’s best to plan your move during the cooler months (late fall or early spring). Moving during these months can make the process much more comfortable, especially for both you and your movers in Mesa, AZ."
  },
  {
    icon: <FaParking className="text-[#4096b1] text-xl" />,
    title: "Parking Considerations",
    content: "Be mindful of parking regulations in your neighborhood. In some areas, such as Downtown Mesa, securing a parking spot for the moving truck may require a permit or advanced planning. Check with the city or your building for specific parking rules ahead of time."
  },
  {
    icon: <FaTemperatureHigh className="text-red-500 text-xl" />,
    title: "Heat Considerations",
    content: "During the hotter months, ensure your moving services in Mesa, AZ are prepared to handle extreme temperatures. It’s essential to hydrate, protect your electronics, and pack carefully to prevent any items from being damaged by the heat."
  }
];

const Section10 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="moving-tips">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Local Pro Knowledge
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-4">
            Essential Moving Tips for Mesa Residents – Local Insights for a Smooth Move
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Moving to or from Mesa, AZ can be a smooth process with a little preparation. Here are some tips to ensure your move goes as effortlessly as possible:
          </p>

          <div className="space-y-4">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-neutral-200 hover:border-[#f99c00] transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center">
                    {tip.icon}
                  </div>
                  <h3 className="font-bold text-base text-[var(--heading-text-color)]">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed pl-12">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-orange-50 border border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-800 leading-snug">
              For more helpful tips or advice on your upcoming move, check out our{" "}
              <Link href="/blog" className="text-[#f99c00] font-bold underline hover:text-[#d98500]">
                blog
              </Link>{" "}
              or contact us for personalized moving guidance. Our team is here to assist every step of the way.
            </p>
            <a
              href="tel:4809348218"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#011234] hover:bg-slate-800 text-white font-semibold text-xs flex-shrink-0 transition-colors"
            >
              <FaPhoneAlt className="text-xs text-[#f99c00]" />
              (480) 934-8218
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
              src="/images/mesa7.png"
              alt="Mesa Arizona movers providing desert climate relocation advice and smooth transport"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/85 backdrop-blur-sm rounded-lg border border-white/10 text-white">
              <p className="text-xs font-semibold text-[#f99c00] uppercase tracking-wide">Desert Climate Ready</p>
              <p className="text-sm font-medium mt-0.5">Hydration, AC-cooled transport units, and heat-resistant wrapping materials.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section10;
