"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaClock, FaCubes, FaCalendarCheck, FaBuilding, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const commercialPillars = [
    {
      icon: <FaClock className="text-[#f99c00] text-xl" />,
      title: "Minimized Disruption",
      desc: "Our experienced team works with you to create a strategic moving plan that keeps business interruptions to a minimum, with after-hours and weekend dispatch options."
    },
    {
      icon: <FaCubes className="text-[#f99c00] text-xl" />,
      title: "Efficient Logistics",
      desc: "We handle the transport of office furniture, electronics, workstations, and valuable inventory with the utmost care and specialized protective wrapping."
    },
    {
      icon: <FaCalendarCheck className="text-[#f99c00] text-xl" />,
      title: "Timely Delivery",
      desc: "We ensure your move is completed on schedule so you can quickly resume your operations and welcome employees back to work seamlessly."
    }
  ];

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="commercial-moving">
      <div className="container mx-auto px-5 flex flex-col-reverse lg:flex-row items-stretch gap-12">
        {/* Left Side: Content & Pillars */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Pillar 02 • Business & Corporate Relocation
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-4">
            2. Efficient Commercial Moving Services in Chandler
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            In addition to residential moves, we specialize in commercial moving services in Chandler. We help businesses relocate quickly and with minimal downtime, which is crucial to maintaining daily operations. Whether you’re moving your office, retail space, or industrial facility, we ensure the following:
          </p>

          <div className="space-y-4 mb-6">
            {commercialPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#f99c00] transition-colors duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--heading-text-color)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-medium bg-white p-4 rounded-xl border border-neutral-200">
            Choosing Making Moves Matter for your commercial move means you’re partnering with movers in Chandler, AZ, who understand the importance of timely and efficient relocation.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:4809348218"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#f99c00] hover:bg-[#e08b00] text-white font-semibold text-sm transition-colors duration-200"
            >
              <FaPhoneAlt className="text-xs" />
              Call Dispatch: (480) 934-8218
            </a>
            <button
              type="button"
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-[#f99c00] text-[#f99c00] hover:bg-orange-50 font-semibold text-sm transition-colors duration-200 cursor-pointer"
            >
              Get Commercial Quote
            </button>
          </div>
        </motion.div>

        {/* Right Side: Branded Commercial Office Visual */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-full min-h-[420px] rounded-xl overflow-hidden border border-neutral-200">
            <Image
              src="/images/chandler-commercial-moving.jpg"
              alt="Making Moves Matter commercial office and tech relocation in Chandler Arizona"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-sm rounded-lg border border-neutral-200">
              <span className="flex items-center gap-2 text-xs font-bold text-[#011234]">
                <FaBuilding className="text-[#f99c00]" />
                Chandler Commercial & Tech Park Relocation
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-sm rounded-lg border border-white/10 text-white">
              <p className="text-xs font-semibold text-[#f99c00] uppercase tracking-wide">Silicon Desert Tech Relocation</p>
              <p className="text-sm font-medium mt-0.5">Anti-static crating, server transit, and modular office setup</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
