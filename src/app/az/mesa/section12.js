"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle, FaPhoneAlt } from "react-icons/fa";
import { mesaFaqs } from "./faqData";

const Section12 = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="mesa-faq">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Got Questions? We Have Answers
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading-text-color)] capitalize">
            FAQ About Moving Services in Mesa, AZ
          </h2>

          <p className="text-gray-600 text-base mt-3 max-w-none">
            Here are some frequently asked questions to help you better understand our services at Making Moves Matter:
          </p>
        </motion.div>

        <div className="space-y-4">
          {mesaFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                className="rounded-xl border border-neutral-200 bg-white overflow-hidden transition-colors duration-200 hover:border-[#f99c00]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[var(--heading-text-color)] flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-orange-50 text-[#f99c00]" : "text-gray-500"
                    }`}
                  >
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-neutral-100 pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="mt-10 p-6 rounded-xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base text-[var(--heading-text-color)]">
              Have another question about moving in Mesa?
            </h3>
            <p className="text-sm text-gray-600 mt-0.5">
              Our relocation dispatchers are available 7 days a week to assist you.
            </p>
          </div>
          <a
            href="tel:4809348218"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#011234] hover:bg-slate-800 text-white font-semibold text-sm flex-shrink-0 transition-colors"
          >
            <FaPhoneAlt className="text-xs text-[#f99c00]" />
            Call (480) 934-8218
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section12;
