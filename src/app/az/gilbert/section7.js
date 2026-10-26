"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCheckCircle, FaStar, FaGoogle, FaPhoneAlt, FaDollarSign, FaUserCheck, FaClock, FaClipboardList } from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const offerings = [
  {
    icon: <FaDollarSign className="text-[#f99c00] text-2xl" />,
    title: "Transparent Pricing with No Hidden Fees",
    desc: "Upfront binding estimates with zero surprise fuel surcharges, stairs fees, or unexpected moving-day expenses."
  },
  {
    icon: <FaUserCheck className="text-[#f99c00] text-2xl" />,
    title: "Personalized Care for Each Customer",
    desc: "Custom moving plans tailored to your specific household items, family schedule, and delicate belongings."
  },
  {
    icon: <FaClock className="text-[#f99c00] text-2xl" />,
    title: "Timely, Efficient & Courteous Crews",
    desc: "Background-checked, professional movers who arrive on time, respect your home, and work quickly without cutting corners."
  },
  {
    icon: <FaClipboardList className="text-[#f99c00] text-2xl" />,
    title: "Free Quotes & Professional Consultations",
    desc: "No-obligation virtual video surveys and in-person consultations to accurately plan your relocation from start to finish."
  }
];

const Section7 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-white py-16" ref={ref} id="why-choose-gilbert">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            The Making Moves Matter Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Why Choose Our Gilbert Moving Company?
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            At Making Moves Matter, we’re more than just movers—we’re your neighbors. Our team of expert Gilbert movers understands the local landscape, neighborhoods, and the logistics that make for a successful relocation.
          </p>
        </div>

        {/* 4 Core Offerings Grid + Review Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {offerings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#f99c00] transition-all duration-300 flex flex-col justify-between group hover:bg-white"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--heading-text-color)] mb-2 group-hover:text-[#f99c00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Review Card Banner */}
        <div className="p-8 rounded-2xl bg-[#011234] text-white border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-2 mb-3">
              <FaGoogle className="text-white text-lg" />
              <div className="flex text-[#f99c00] text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-300 ml-2">Verified Review</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              "Phenomenal Gilbert Relocation to Morrison Ranch!"
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
              "Making Moves Matter moved our four-bedroom home into Morrison Ranch flawlessly. They moved our heavy gun safe without a scratch on our floors and had all our beds and couches assembled before dinner. True professionals!"
            </p>
            <span className="text-xs font-semibold text-[#f99c00] block mt-3">— Derek & Amanda K., Gilbert AZ</span>
          </div>

          <div className="lg:w-1/3 w-full flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="tel:4809348218"
              className="w-full text-center py-3.5 px-6 rounded-lg bg-[#f99c00] hover:bg-[#e08b00] text-white font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <FaPhoneAlt className="text-xs" />
              Call (480) 934-8218
            </a>
            <button
              type="button"
              onClick={openQuoteModal}
              className="w-full text-center py-3.5 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors cursor-pointer"
            >
              Request Free Quote Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section7;
