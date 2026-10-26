"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBoxes, FaLock, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const Section5 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-16" ref={ref} id="packing-storage">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-12">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-full h-[440px] sm:h-[500px] lg:h-full min-h-[420px] rounded-xl overflow-hidden border border-neutral-200">
            <Image
              src="/images/mesa-movers-team.jpg"
              alt="Professional movers from Making Moves Matter wrapping furniture and packing branded boxes in Mesa AZ"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 right-4 p-3 bg-white/95 backdrop-blur-sm rounded-lg border border-neutral-200">
              <span className="flex items-center gap-2 text-xs font-bold text-[#011234]">
                <FaLock className="text-[#f99c00]" />
                24/7 Climate-Controlled Storage
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
            Protection & Preservation
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] leading-tight mb-6">
            Professional Packing & 24/7 Monitored Storage in Mesa
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f99c00]">
                  <FaBoxes className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-[var(--heading-text-color)]">
                  Professional Packing Services
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                We designed our professional packing services to save you time and reduce stress. And we offer packing services in Mesa for everything from basic boxes to delicate items. Our team uses high-quality packing materials like bubble wrap, padding, and boxes to keep your belongings safe during transport. We also label everything to ensure an easy and organized unpacking process.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <FaLock className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-[var(--heading-text-color)]">
                  Secure Storage Solutions
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                If you need somewhere to store your belongings during the moving process, we offer secure storage solutions to give you peace of mind. Whether you need temporary storage during a transition or long-term storage for extra items, We monitor our climate-controlled units 24/7 for your peace of mind. keep your belongings safe and in top condition. Our facilities are monitored 24/7, providing you with added security and confidence in your storage choices.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="tel:4809348218"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#011234] hover:bg-slate-800 text-white font-semibold text-sm transition-colors duration-200"
            >
              <FaPhoneAlt className="text-xs text-[#f99c00]" />
              Inquire About Packing & Storage
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;
