"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCouch, FaBriefcase, FaCheck, FaPhoneAlt } from "react-icons/fa";

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="residential-commercial">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3 w-fit">
            Tailored Moving Expertise
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-6">
            Residential Living & Commercial Business Transitions in Mesa
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-neutral-200 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#f99c00]">
                  <FaCouch className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-[var(--heading-text-color)]">
                  Residential & Apartment Moves
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Whether you’re moving from a cozy apartment or a spacious home, we have the tools and expertise to manage moves of all sizes. From fragile items like glassware and electronics to large appliances and furniture, we ensure everything is packed securely for the journey. Our team handles your residential moving services with care, making sure that your items are carefully unloaded and placed in their new home.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                No matter the scale of your move, we ensure that every detail is taken care of, offering a seamless experience.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#4096b1]">
                  <FaBriefcase className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-[var(--heading-text-color)]">
                  Commercial & Office Moves
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Moving a business requires a different level of expertise, and at Making Moves Matter, we’re well-equipped to handle office moves for businesses in Mesa. Whether you’re moving office furniture, electronics, or specialized equipment, we transport everything safely and efficiently. We understand that business downtime is costly, so we offer after-hours moving to ensure minimal disruption to your workday.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                Our commercial moving services are designed to meet the unique needs of small and medium-sized businesses in Mesa, ensuring a fast and smooth transition to your new workspace.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="tel:4809348218"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#f99c00] hover:bg-[#e08b00] text-white font-semibold text-sm transition-colors duration-200"
            >
              <FaPhoneAlt className="text-xs" />
              Schedule Business or Home Move
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
              src="/images/mesa-commercial-moving.jpg"
              alt="Making Moves Matter commercial office relocation movers transporting computer equipment in Mesa AZ"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/85 backdrop-blur-sm rounded-lg border border-white/10 text-white">
              <p className="text-xs font-semibold text-[#f99c00] uppercase tracking-wide">Commercial & Office Moves</p>
              <p className="text-sm font-medium mt-0.5">Specialized rolling carts, tech equipment protection, and zero-downtime execution.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
